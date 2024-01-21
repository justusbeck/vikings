<script setup>
	import { ref } from 'vue'
	import { computed } from 'vue'
  
	import dayjs from "dayjs"
	import weekday from "dayjs/plugin/weekday";
	import weekOfYear from "dayjs/plugin/weekOfYear";
	
	import CalendarMonthDayItem from "./CalendarMonthDayItem.vue";
	import CalendarDateIndicator from "./CalendarDateIndicator.vue";
	import CalendarDateSelector from "./CalendarMonthSelector.vue";
	import CalendarWeekdays from "./CalendarWeekdays.vue";

  dayjs.extend(weekday);
  dayjs.extend(weekOfYear);

  const selectedDate = dayjs()
  
  const selectedDte = ref( dayjs() )

  const days = computed(() => {
    return [
      ...this.previousMonthDays,
      ...this.currentMonthDays,
      ...this.nextMonthDays
    ]
  })
  const today = computed(() => {
    return dayjs().format("YYYY-MM-DD");
  })
  const month = computed(() => {
    return Number(this.selectedDate.format("M"));
  })
  const year = computed(() => {
    return Number(this.selectedDate.format("YYYY"));
  })
  const numberOfDaysInMonth = computed(() => {
    return dayjs(this.selectedDate).daysInMonth();
  })
  
  const currentMonthDays = computed(() => {
    return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
            "YYYY-MM-DD"
          ),
          isCurrentMonth: true
        };
    });
  })
  
  const previousMonthDays = computed(() => {
    const firstDayOfTheMonthWeekday = this.getWeekday(
      this.currentMonthDays[0].date
    );
	
    const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(1, "week");
	  
    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
        ? firstDayOfTheMonthWeekday - 1
        : 6;

      const previousMonthLastMondayDayOfMonth = dayjs(this.currentMonthDays[0].date)
      .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
      .date();

      return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
        (day, index) => {
          return {
            date: dayjs(
              `${previousMonth.year()}-${previousMonth.month() +
                1}-${previousMonthLastMondayDayOfMonth + index}`
            ).format("YYYY-MM-DD"),
            isCurrentMonth: false
          };
        }
      );
  })
  
  const nextMonthDays = computed(() => {
    const lastDayOfTheMonthWeekday = this.getWeekday(
       `${this.year}-${this.month}-${this.currentMonthDays.length}`
    );
    const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "week");

    const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
      ? 7 - lastDayOfTheMonthWeekday
      : lastDayOfTheMonthWeekday;

    return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
          date: dayjs(
            `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
          ).format("YYYY-MM-DD"),
          isCurrentMonth: false
        };
    });
  })


  function getWeekday(date) {
    return dayjs(date).weekday();
  }
  function selectDate(newSelectedDate) {
    this.selectedDate = newSelectedDate;
  }
</script>


<template>
    <div class="calendar-month">
    <div class="calendar-month-header">
      <CalendarDateIndicator
        :selected-date="selectedDate"
        class="calendar-month-header-selected-month"
      />

      <CalendarDateSelector
        :current-date="today"
        :selected-date="selectedDate"
        @dateSelected="selectDate"
      />
    </div>

    <CalendarWeekdays/>

    <ol class="days-grid">
      <CalendarMonthDayItem
        v-for="day in days"
        :key="day.date"
        :day="day"
        :is-today="day.date === today"
      />
    </ol>
  </div>
</template>


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
