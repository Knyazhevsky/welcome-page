<template>
  <section class="hero">
    <div class="hero__content">
      <p class="hello">hello<span class="hello__dot">.</span></p>
      <h1 class="hero__title">Boris Knyazhevsky</h1>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.hello {
  text-transform: uppercase;

  &__dot {
    color: var(--color-accent);
  }
}
</style>
