<template>
    <div class="calendar-week">
      <div class="calendar-week-header">
        <CalendarDateIndicator
          :selected-date="selectedDate"
          class="calendar-week-header-selected-week"
        />
  
        <CalendarDateSelector
          :current-date="today"
          :selected-date="selectedDate"
          @dateSelected="selectDate"
        />
      </div>
  
      <CalendarWeekdays />
  
      <ol class="days-grid">
        <CalendarMonthDayItem
          v-for="day in week"
          :key="day.date"
          :day="day"
          :is-today="day.date === today"
        />
      </ol>
    </div>
  </template>
  
  <script>
  import dayjs from "dayjs";
  import weekday from "dayjs/plugin/weekday";
  import CalendarMonthDayItem from "./CalendarMonthDayItem.vue";
  import CalendarDateIndicator from "./CalendarDateIndicator.vue";
  import CalendarDateSelector from "./CalendarWeekSelector.vue";
  import CalendarWeekdays from "./CalendarWeekdays.vue";
  
  dayjs.extend(weekday);
  
  export default {
    name: "CalendarWeek",
  
    components: {
      CalendarMonthDayItem,
      CalendarDateIndicator,
      CalendarDateSelector,
      CalendarWeekdays
    },
  
    data() {
      return {
        selectedDate: dayjs().startOf('week'),
        week: [],
        today: dayjs().format("YYYY-MM-DD")
      };
    },
  
    methods: {
      selectDate(newSelectedDate) {
        this.selectedDate = newSelectedDate.startOf('week');
        this.generateWeek();
      },
  
      generateWeek() {
        const startDate = dayjs(this.selectedDate).startOf('week');
        const endDate = dayjs(this.selectedDate).endOf('week');
        const days = [];
  
        let currentDate = startDate;
  
        while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
          days.push({
            date: currentDate.format("YYYY-MM-DD"),
            isCurrentMonth: currentDate.isSame(this.selectedDate, 'month')
          });
  
          currentDate = currentDate.add(1, 'day');
        }
  
        this.week = days;
      }
    },
  
    mounted() {
      this.generateWeek();
    }
  };
  </script>
  
  
  
<style scoped>
.calendar-month {
  position: relative;
  background-color: var(--grey-200);
  border: solid 1px var(--grey-300);
}

.day-of-week {
  color: var(--grey-800);
  font-size: 18px;
  background: #090909;
  padding-bottom: 5px;
  padding-top: 10px;
}

.day-of-week,
.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day-of-week > * {
  text-align: right;
  padding-right: 5px;
}

.days-grid {
  height: 100%;
  position: relative;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
  border-top: solid 1px var(--grey-200);
}
</style>
