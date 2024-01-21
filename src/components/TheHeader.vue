<script setup lang="ts"></script>

<template>
  <div class="header-layout">
    <div class="title">CALENDAR</div>
    <span class="material-symbols-rounded"> account_circle </span>
  </div>
</template>

<style scoped>
.header-layout {
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
}

.title {
  color: var(--light);
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 800;
}

.material-symbols-rounded {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  color: var(--light);
  font-size: 2.5rem;
}
</style>
