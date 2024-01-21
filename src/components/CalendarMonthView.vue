<script lang="ts">
import CalComp from '@/components/CalendarMonth.vue'
</script>

<template>
  <div class="body">
    <div class="calcomp">
      <CalComp />
    </div>

    <p style="font-weight: 600">Tasks</p>

    <div class="task">Abgabe - AVG</div>
    <div class="task">Abgabe - CA</div>
    <div class="task">Code Review - PBO</div>
  </div>

  <div class="cal">
    <p>Overview</p>
  </div>
</template>

<style>
.calcomp {
  height: 300px;
  width: 300px;
}
</style>
