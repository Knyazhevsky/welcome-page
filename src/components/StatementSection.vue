<template>
  <div class="statement">
    <span aria-hidden="true" class="statement__mark">“</span>
    <p class="statement__text">I enjoy designing software that remains understandable as it grows.</p>
    <span aria-hidden="true" class="statement__divider"></span>
  </div>
</template>

<style lang="scss" scoped>
.statement {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-block: var(--spacing-64) var(--spacing-96);
  text-align: center;

  &__mark {
    color: var(--color-accent);
    font-size: 48px;
    font-weight: 600;
    line-height: 32px;
  }

  &__text {
    color: var(--color-text-primary);
    font-size: var(--font-size-h2);
    line-height: var(--line-height-h2);
    margin: var(--spacing-16) 0 var(--spacing-34);
    max-width: 560px;
  }

  &__divider {
    border-top: var(--main-border);
    width: var(--spacing-48);
  }
}
</style>
