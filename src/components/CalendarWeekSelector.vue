<script setup lang="ts">
import dayjs from 'dayjs'

const props = defineProps({
  currentData: {
    type: String,
    required: true
  },
  selectedDate: {
    type: Object,
    required: true
  }
})

function selectPrevious() {
  let newSelectedWeek = dayjs(this.selectedDate).subtract(1, 'week')
  this.$emit('dateSelected', newSelectedWeek)
}
function selectCurrent() {
  let newSelectedWeek = dayjs(this.currentDate)
  this.$emit('dateSelected', newSelectedWeek)
}
function selectNext() {
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
