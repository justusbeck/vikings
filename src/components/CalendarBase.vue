<script setup lang="ts">
import CalendarMonth from '@/components/CalendarMonth.vue'
import CalendarDWM from '@/components/CalendarDayWeekMonth.vue'
</script>

<template>
  <div class="cal-layout"><!--<CalendarMonth /><CalendarDWM />--></div>
</template>

<style scoped>
.cal-layout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
  align-self: stretch;

  width: 100%;
}
</style>
