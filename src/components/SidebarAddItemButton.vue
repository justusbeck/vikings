<script setup lang="ts">
const props = defineProps<{
  buttonText: string
}>()
</script>

<template>
  <button>
    <span class="material-symbols-rounded"> add </span>
    {{ props.buttonText }}
  </button>
</template>

<style scoped>
button {
  display: flex;
  width: 100%;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 100px;

  /* label */
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background: var(--light);
  border: none;
  outline: none;
  box-shadow: none;
}

.material-symbols-rounded {
  font-variation-settings:
    'FILL' 0,
    'wght' 700,
    'GRAD' 0,
    'opsz' 24;
}
</style>
