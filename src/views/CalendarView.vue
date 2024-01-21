<script setup lang="ts">
import SidebarAgenda from '@/components/SidebarAgenda.vue'
import CalendarBase from '@/components/CalendarBase.vue'
</script>

<template>
  <div class="view-layout">
    <div class="content">
      <SidebarAgenda />
      <main>
        <!-- <CalendarBase /> -->
      </main>
    </div>
  </div>
</template>

<style scoped>
.view-layout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding-top: 2rem;
}

.content {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  flex: 1 0 0;
  align-self: stretch;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}
</style>
