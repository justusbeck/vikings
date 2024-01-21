<script setup lang="ts">
import dayjs from 'dayjs';
import { defineProps, ref } from'vue';

interface CalendarDateSelectorProps {
  currentData: string;
  selectedDate: dayjs.Dayjs;
  onDateSelected: (date: dayjs.Dayjs) => void;
}

const props = defineProps<CalendarDateSelectorProps>();

function selectPrevious(this: any) {
  let newSelectedWeek = dayjs(this.selectedDate).subtract(1, 'week')
  this.$emit('dateSelected', newSelectedWeek)
}
function selectCurrent(this: any) {
  let newSelectedWeek = dayjs(this.currentDate)
  this.$emit('dateSelected', newSelectedWeek)
}
function selectNext(this: any) {
  let newSelectedWeek = dayjs(this.selectedDate).add(1, 'week')
  this.$emit('dateSelected', newSelectedWeek)
}
</script>

<template>
  <div class="calendar-date-selector">
    <span @click="selectPrevious">-</span>
    <span @click="selectCurrent">Today</span>
    <span @click="selectNext">+</span>
  </div>
</template>

<style scoped>
.calendar-date-selector {
  display: flex;
  justify-content: space-between;
  width: 80px;
  color: var(--grey-800);
}

.calendar-date-selector > * {
  cursor: pointer;
  user-select: none;
}
</style>
