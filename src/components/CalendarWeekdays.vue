<script setup>
	import { computed } from 'vue'
	
	const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
	
	const weekdays = computed(() => {
		return WEEKDAYS;
	})
</script>

<template>
	<ol class="day-of-week">
		<li v-for="weekday in weekdays" :key="weekday">{{ weekday }}</li>
	</ol>
</template>

<style scoped>
	.day-of-week {
	  display: grid;
	  grid-template-columns: repeat(7, 1fr);
	}

	.day-of-week > * {
	  text-align: right;
	  padding-right: 5px;
	}
</style>