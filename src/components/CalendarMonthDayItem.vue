<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  day: {
    type: Object,
    required: true
  },
  isCurrentMonth: {
    type: Boolean,
    default: false
  },
  isToday: {
    type: Boolean,
    default: false
  }
})

const label = computed(() => {
  return dayjs(props.day.date).format('D')
})
</script>

<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday
    }"
  >
    <span>{{ label }}</span>
  </li>
</template>

<style scoped>
.calendar-day {
  position: relative;
  min-height: 100px;
  font-size: 16px;
  background: #090909;
  color: #ffffff;

  padding: 5px;
}

.calendar-day > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  width: var(--day-label-size);
  height: var(--day-label-size);
}

.calendar-day--not-current {
  background: #090909;
  color: #ffffff;
}

.calendar-day--today {
  padding-top: 4px;
}

.calendar-day--today > span {
  color: #fff;
  border-radius: 9999px;
  background-color: var(--grey-800);
}
</style>
