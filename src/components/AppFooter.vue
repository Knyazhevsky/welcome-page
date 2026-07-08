<template>
  <footer class="ftr">
    <div class="ftr__content">
      <p class="city">Almaty, Kazakhstan</p>
      <p class="copyright">&copy; 2026</p>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
.ftr {
  border-top: var(--main-border);
  padding-top: var(--spacing-34);
  padding-bottom: var(--spacing-34);
  text-align: center;
  color: var(--color-text-secondary);

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
  }
}

</style>
