<template>
  <div id="app">
    <CalendarMonth/>
  </div>
</template>

<script>
import CalendarMonth from "./components/CalendarMonth.vue";

export default {
  name: "App",

  components: {
    CalendarMonth
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}

body {
  font-family: sans-serif;
  font-weight: 100;
  color: #ffffff;
  --grid-gap: 1px;
  --day-label-size: 20px;
}

ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.calendar-month-header {
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  padding: 10px;
}
</style>
