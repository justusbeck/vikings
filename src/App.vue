<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <TheHeader />
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700;800&display=swap');

body {
  padding: 2rem;

  background-color: var(--dark);

  font-family:
    Work Sans,
    sans-serif;

  --dark: #090909;
  --light: #ebebeb;
  --accent: #47ba91;
}

button {
  border: none;
  outline: none;
  box-shadow: none;
}

/* body {
  font-family: sans-serif;
  font-weight: 100;
  --grey-100: #e4e9f0;
  --grey-200: #cfd7e3;
  --grey-300: #b5c0cd;
  --grey-800: #3e4e63;
  --grid-gap: 1px;
  --day-label-size: 20px;
} */

ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.calendar-month-header {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
}
</style>
