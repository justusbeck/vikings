<template>
    <div class="calendar-date-selector">
      <span @click="selectPrevious">-</span>
      <span @click="selectCurrent">Today</span>
      <span @click="selectNext">+</span>
    </div>
  </template>
  
  <script>
  import dayjs from "dayjs";
  
  export default {
    name: "CalendarModeSelector",
  
    props: {
      currentDate: {
        type: String,
        required: true
      },
  
      selectedDate: {
        type: Object,
        required: true
      }
    },
  
    methods: {
      selectPrevious() {
        let newSelectedMonth = dayjs(this.selectedDate).subtract(1, "month");
        this.$emit("dateSelected", newSelectedMonth);
      },
  
      selectCurrent() {
        let newSelectedMonth = dayjs(this.currentDate);
        this.$emit("dateSelected", newSelectedMonth);
      },
  
      selectNext() {
        let newSelectedMonth = dayjs(this.selectedDate).add(1, "month");
        this.$emit("dateSelected", newSelectedMonth);
      }
    }
  };
  </script>
  
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
  