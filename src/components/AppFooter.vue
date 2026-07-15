<template>
  <footer class="app-footer">
    <div class="app-footer__content">
      <p>Almaty, Kazakhstan</p>
      <p><small>&copy;2026</small></p>
      <p class="app-footer__aside">I use Arch, btw.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  border-top: var(--main-border);
  color: var(--color-text-secondary);
  padding-bottom: var(--spacing-34);
  padding-top: var(--spacing-34);
  text-align: center;

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
  }

  &__aside {
    color: var(--color-accent);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }
}

p {
  margin: 0;
}
</style>
