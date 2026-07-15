<template>
  <section aria-labelledby="currently-title" class="currently">
    <div class="currently__heading">
      <h2 id="currently-title" class="currently__title">Currently</h2>
      <span aria-hidden="true" class="currently__line"></span>
    </div>

    <ul class="currently__list">
      <li v-for="item in items" :key="item.title" class="currently__item">
        <AppIcon class="currently__icon" :name="item.icon" :size="28" />
        <h3 class="currently__item-title">{{ item.title }}</h3>
        <p class="currently__description">{{ item.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import AppIcon from './AppIcon.vue'

const items = [
  {
    icon: 'monitor-cog',
    title: 'Building ATM software',
    description: 'Building Angular interfaces and .NET backend services in a fintech product team.',
  },
  {
    icon: 'container',
    title: 'Learning deployment',
    description: 'Learning Docker, application delivery and how production environments fit together.',
  },
  {
    icon: 'server',
    title: 'Self-hosting',
    description: 'Setting up my own domain, server and this website from the ground up.',
  },
  {
    icon: 'bot',
    title: 'Working with agents',
    description: 'Exploring Claude, GitHub Copilot and Codex as part of my development workflow.',
  },
] as const
</script>

<style lang="scss" scoped>
.currently {
  padding-bottom: var(--spacing-96);

  &__heading {
    align-items: center;
    display: flex;
    gap: var(--spacing-34);
    margin-bottom: var(--spacing-48);
  }

  &__title {
    flex-shrink: 0;
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-body);
    line-height: var(--line-height-body);
  }

  &__line {
    border-top: var(--main-border);
    width: 100%;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    border-right: var(--main-border);
    min-width: 0;
    padding-inline: var(--spacing-16);

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      border-right: 0;
      padding-right: 0;
    }
  }

  &__icon {
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-16);
  }

  &__item-title {
    margin-bottom: var(--spacing-8);
    min-height: calc(2 * var(--line-height-h3));
  }

  &__description {
    color: var(--color-text-secondary);
    font-size: var(--font-size-small);
    line-height: var(--line-height-small);
  }
}
</style>
