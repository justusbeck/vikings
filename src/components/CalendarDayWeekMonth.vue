<script>
import Day from './CalendarDay.vue'
//import Week from './CalendarWeek.vue'
import Month from './CalendarMonthView.vue'
import CalendarDateIndicator from "./CalendarDateIndicator.vue";
import { ref } from 'vue'

const currentTab = ref('Day')
const TABS = {
  Day,
  //Week,
  Month
}

</script>

<template>
  <div class="demo1">
    <a>
      <img href="../assets/login.png">
    </a>

    <h2 class="header">December 2023</h2>

    <div>
      <button class="add">+</button>
    </div>

  </div>

  <div class="demo2">
    <div>
      
    </div> 
  </div>
</template>
  
<style scoped>
.demo1 {
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  color: white;
  border-radius: 25px;
  padding: 10px 10px;
  user-select: none;
  overflow-x: auto;
  background: black;
  margin-bottom: 10px;
  align-items: center;
}

.demo2 {
  font-family: sans-serif;
  color: white;
  border-radius: 25px;
  padding: 10px 10px;
  user-select: none;
  overflow-x: auto;
  background: black;
}
.tab-button, .add {
  color: white;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 15px;
  border: 0px;
  cursor: pointer;
  background: none;
  margin-left: 10px;

}
.tab-button:hover, .tab-button.active {
  background: white;
  color: black;
}

.add:hover {
  background-color: lightsalmon;
  color: black;
}


.body {
  display: grid;
  grid-template-columns: 300px 1fr;
}
div.cal {
  border-color: white;
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  height: 500px;
}
.task {
  color:black;
  font-size: 14px;
  background-color: white;
  border-radius: 15px;
  padding: 6px 10px;
  margin-bottom: 10px;
  width: 200px;
}
</style>
