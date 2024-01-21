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
  padding: 6px 10px;
  border-radius: 15px;
  border: 0px;
  cursor: pointer;
  background: white;
  margin-left: 10px;
}
.tab-button:hover,
.tab-button.active {
  background: lightsalmon;
}
.task {
  color: black;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  margin-top: 0px;
}
</style>
