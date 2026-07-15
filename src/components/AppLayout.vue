<template>
  <div class="app-layout">
    <NavBar />
    <main class="app-layout__main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import AppFooter from './AppFooter.vue'
import NavBar from './NavBar.vue'
</script>

<style lang="scss" scoped>
.app-layout {
  background-color: var(--color-surface);
  border: var(--main-border);
  border-radius: var(--border-radius-24);
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--container-width);
  overflow: visible;
  width: 100%;

  &__main {
    flex: 1;
    padding-inline: var(--spacing-64);
  }
}
</style>
