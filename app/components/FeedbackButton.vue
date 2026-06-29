<template>
  <div>
    <button class="fb-fab" type="button" :aria-label="t.open" @click="open = true">
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2Z"
        />
      </svg>
      <span>{{ t.label }}</span>
    </button>

    <Teleport to="body">
      <div v-if="open" class="fb-overlay" @click.self="close">
        <div class="fb-modal" role="dialog" aria-modal="true" :aria-label="t.title">
          <button class="fb-close" type="button" :aria-label="t.close" @click="close">&times;</button>

          <template v-if="!sent">
            <h2 class="fb-title">{{ t.title }}</h2>
            <p class="fb-sub">{{ t.sub }}</p>

            <form @submit.prevent="submit">
              <label class="fb-field">
                <span>{{ t.name }} <em>{{ t.optional }}</em></span>
                <input v-model.trim="name" type="text" autocomplete="name" :placeholder="t.namePh" />
              </label>

              <label class="fb-field">
                <span>{{ t.email }} <em>{{ t.optional }}</em></span>
                <input v-model.trim="email" type="email" autocomplete="email" :placeholder="t.emailPh" />
              </label>

              <label class="fb-field">
                <span>{{ t.message }} <em class="req">*</em></span>
                <textarea v-model.trim="message" rows="5" required :placeholder="t.messagePh" />
              </label>

              <p v-if="error" class="fb-error">{{ error }}</p>

              <button class="fb-submit" type="submit" :disabled="sending || !message">
                {{ sending ? t.sending : t.send }}
              </button>
            </form>
          </template>

          <div v-else class="fb-done">
            <div class="fb-check" aria-hidden="true">✓</div>
            <h2 class="fb-title">{{ t.thanksTitle }}</h2>
            <p class="fb-sub">{{ t.thanksBody }}</p>
            <button class="fb-submit" type="button" @click="close">{{ t.done }}</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const { locale } = useI18nNav()
const { $supabase } = useNuxtApp()
const route = useRoute()

const open = ref(false)
const sending = ref(false)
const sent = ref(false)
const error = ref('')

const name = ref('')
const email = ref('')
const message = ref('')

const strings = {
  nl: {
    label: 'Feedback', open: 'Feedback geven', close: 'Sluiten',
    title: 'Feedback geven', sub: 'Laat ons weten wat je vindt. Naam en e-mail zijn optioneel.',
    name: 'Naam', email: 'E-mail', message: 'Feedback', optional: '(optioneel)',
    namePh: 'Je naam', emailPh: 'jij@voorbeeld.nl', messagePh: 'Wat wil je ons laten weten?',
    send: 'Versturen', sending: 'Versturen…',
    thanksTitle: 'Bedankt!', thanksBody: 'We hebben je feedback ontvangen.', done: 'Sluiten',
    errEmpty: 'Vul alsjeblieft wat feedback in.',
    errFail: 'Versturen mislukt. Probeer het later opnieuw.'
  },
  en: {
    label: 'Feedback', open: 'Give feedback', close: 'Close',
    title: 'Give feedback', sub: 'Let us know what you think. Name and email are optional.',
    name: 'Name', email: 'Email', message: 'Feedback', optional: '(optional)',
    namePh: 'Your name', emailPh: 'you@example.com', messagePh: 'What would you like to tell us?',
    send: 'Send', sending: 'Sending…',
    thanksTitle: 'Thank you!', thanksBody: 'Your feedback has been received.', done: 'Close',
    errEmpty: 'Please enter some feedback.',
    errFail: 'Could not send. Please try again later.'
  }
}
const t = computed(() => strings[locale.value])

function close() {
  open.value = false
  // Reset after the close so the success state isn't visible while fading.
  setTimeout(() => {
    if (sent.value) {
      sent.value = false
      name.value = ''
      email.value = ''
      message.value = ''
    }
    error.value = ''
  }, 150)
}

async function submit() {
  error.value = ''
  if (!message.value) {
    error.value = t.value.errEmpty
    return
  }
  if (!$supabase) {
    error.value = t.value.errFail
    return
  }

  sending.value = true
  const { error: dbError } = await $supabase.from('feedback').insert({
    name: name.value || null,
    email: email.value || null,
    message: message.value,
    page: route.fullPath,
    locale: locale.value
  })
  sending.value = false

  if (dbError) {
    console.error('[feedback]', dbError)
    error.value = t.value.errFail
    return
  }
  sent.value = true
}

// Close on Escape.
function onKey(e) {
  if (e.key === 'Escape' && open.value) close()
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.fb-fab{
  position:fixed; right:20px; bottom:20px; z-index:900;
  display:inline-flex; align-items:center; gap:8px;
  font-family:'JetBrains Mono',monospace; font-size:13px; font-weight:600;
  letter-spacing:.04em; color:#fff; background:var(--accent);
  border:none; border-radius:999px; padding:11px 16px; cursor:pointer;
  box-shadow:0 6px 18px -6px rgba(33,29,24,.5); transition:transform .14s, background .14s;
}
.fb-fab:hover{ transform:translateY(-2px); background:var(--w2) }
.fb-fab svg{ flex:none }

.fb-overlay{
  position:fixed; inset:0; z-index:1000; display:flex; align-items:center; justify-content:center;
  padding:18px; background:rgba(33,29,24,.45); backdrop-filter:blur(2px);
}
.fb-modal{
  position:relative; width:100%; max-width:440px; background:var(--card);
  border:1px solid var(--line); border-radius:16px; box-shadow:var(--shadow);
  border-top:4px solid var(--accent); padding:24px 22px 22px;
}
.fb-close{
  position:absolute; top:10px; right:12px; width:32px; height:32px; padding:0;
  border:none; background:transparent; font-size:24px; line-height:1; color:var(--ink2);
  cursor:pointer; border-radius:8px;
}
.fb-close:hover{ background:var(--paper2); color:var(--ink) }

.fb-title{ font-family:'Fraunces',serif; font-weight:600; font-size:22px; margin:0 0 4px; color:var(--ink) }
.fb-sub{ margin:0 0 16px; font-size:14px; color:var(--ink2); max-width:46ch }

.fb-field{ display:block; margin-bottom:13px }
.fb-field > span{
  display:block; margin-bottom:5px; font-size:12.5px; font-weight:600; color:var(--ink);
}
.fb-field em{ font-style:normal; font-weight:400; color:var(--ink2); font-size:11.5px }
.fb-field em.req{ color:var(--accent) }
.fb-field input,
.fb-field textarea{
  width:100%; box-sizing:border-box; font:inherit; font-size:14px; color:var(--ink);
  background:var(--paper); border:1px solid var(--line); border-radius:10px; padding:9px 11px;
  transition:border-color .14s;
}
.fb-field input:focus,
.fb-field textarea:focus{ outline:none; border-color:var(--accent) }
.fb-field textarea{ resize:vertical; min-height:90px }

.fb-error{ margin:0 0 12px; font-size:13px; color:var(--w2) }

.fb-submit{
  width:100%; font-family:'JetBrains Mono',monospace; font-size:13.5px; font-weight:600;
  letter-spacing:.04em; color:#fff; background:var(--accent); border:none; border-radius:10px;
  padding:11px 16px; cursor:pointer; transition:background .14s;
}
.fb-submit:hover:not(:disabled){ background:var(--w2) }
.fb-submit:disabled{ opacity:.55; cursor:not-allowed }

.fb-done{ text-align:center; padding:8px 0 4px }
.fb-check{
  width:54px; height:54px; margin:0 auto 12px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  font-size:28px; color:#fff; background:var(--w3);
}

@media(max-width:680px){
  .fb-fab span{ display:none }
  .fb-fab{ padding:13px }
}
@media(prefers-reduced-motion:reduce){
  .fb-fab{ transition:none }
  .fb-fab:hover{ transform:none }
}
</style>
