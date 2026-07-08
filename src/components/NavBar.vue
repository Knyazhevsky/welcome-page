<template>
  <header class="hdr">
    <nav class="navbar">
      <ul class="navbar__links text-body">
        <li class="navbar__link"><a href="#">About</a></li>
        <li class="navbar__link"><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.hdr {
  padding-inline: var(--spacing-96);
}

.navbar {
  margin-left: auto;
  height: var(--navbar-height);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__links {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: var(--spacing-8);
  }

  &__link {
    a {
      color: var(--color-text-primary);

      &:hover {
        color: var(--color-accent);
      }
    }
  }
}
</style>
