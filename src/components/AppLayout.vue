<template>
  <div class="app-layout">
    <NavBar />
    <main class="main">
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
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: var(--container-width);
  margin: 0 auto;
  width: 100%;
  background-color: var(--color-surface);
  border: var(--main-border);
  border-radius: var(--border-radius-24);
}

.main {
  flex: 1;
  padding-inline: var(--spacing-64);
}
</style>
