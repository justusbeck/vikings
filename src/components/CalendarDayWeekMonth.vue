<script>
  import Day from "./CalendarDay.vue"
  import Week from "./CalenderWeek.vue"
  import Month from "./CalenderMonth.vue"
  import { ref } from 'vue'

  const currentTab = ref('Month');
  const tabs = {
    Day,
    Week,
    Month
  }

</script>

<template>
  <div>
    <div>
      <component :is="tabs[currentTab]" ></component>
    </div>
    <div>
      <button
      v-for="(_, tab) in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab">

        {{ tab }}
      </button>
    </div>
  </div>
</template>
  
<style scoped>
.tab-button {
  padding: 6px 10px;
  border-radius: 15px;
  border: 0px;
  cursor: pointer;
  background: white;
  margin-left: 10px;
}
.tab-button:hover, .tab-button.active {
  background: lightsalmon;
}
.task {
  color:black;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  margin-top: 0px;
}
</style>