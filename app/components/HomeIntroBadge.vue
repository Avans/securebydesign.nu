<template>
  <div class="intro-with-badge">
    <figure class="edubadge">
      <img
        src="/2613175_avans_edubadge_blue.png"
        :alt="content.alt"
        width="3075"
        height="3075"
        decoding="async"
      />
      <figcaption>
        <span>{{ content.description }}</span>
      </figcaption>
    </figure>
    <div class="intro-copy"><slot /></div>
  </div>
</template>

<script setup lang="ts">
import nl from '~/content/edubadge.nl'
import en from '~/content/edubadge.en'

const { locale } = useI18nNav()
const content = computed(() => locale.value === 'en' ? en : nl)
</script>

<style scoped>
.intro-with-badge {
  position: relative;
  max-width: var(--home-content-width);
}
.intro-copy { min-width: 0; padding-right: 244px; }
.intro-copy :deep(.lede) { max-width: none; }
.edubadge {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  margin: 0;
  display: grid;
  justify-items: center;
  gap: 4px;
}
.edubadge img {
  display: block;
  width: 120px;
  height: auto;
  transform: rotate(7deg);
  mix-blend-mode: multiply;
}
.edubadge figcaption {
  text-align: center;
  color: var(--ink2);
  font-size: 13px;
  line-height: 1.4;
}
@media (max-width: 760px) {
  .intro-copy { display: contents; padding-right: 0; }
  .edubadge {
    position: relative;
    float: right;
    width: 84px;
    margin: 4px 4px 8px 16px;
  }
  .edubadge img { width: 84px; }
  .edubadge figcaption {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  .intro-with-badge :deep(.chips) { clear: both; }
}
</style>
