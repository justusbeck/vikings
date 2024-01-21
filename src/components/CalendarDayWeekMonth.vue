<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <button class="tab-button">Day</button>
      <button class="tab-button">Week</button>
      <button class="tab-button">Month</button>
    </div>
  </div>
</template>

<style scoped>
.tab-button {
  padding: 4px 16px;
  border-radius: 15px;
  border: 0px;
  cursor: pointer;
  background: var(--light);
  margin-left: 10px;

  font-family: Work Sans;
  font-weight: 700;
  font-size: 1.5rem;
}
.tab-button:hover,
.tab-button.active {
  background: var(--accent);
}
</style>
