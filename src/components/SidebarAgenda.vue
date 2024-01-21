<script setup lang="ts">
import { ref } from 'vue'
import { useItemStore } from '@/stores/ItemStore'
import ItemCard from '@/components/ItemCard.vue'
import SidebarAddItemButton from '@/components/SidebarAddItemButton.vue'
import ItemForm from '@/components/ItemForm.vue'

const store = useItemStore()

// defaults to ItemForm modal not showing
const showItemForm = ref(false)
</script>

<template>
  <div class="agenda-layout">
    <div class="title">agenda <span class="material-symbols-rounded"> arrow_forward </span></div>
    <ItemCard v-for="item in store.Items" :key="item.id" :name="item.name" :status="item.status" />
    <SidebarAddItemButton @click="showItemForm = true" button-text="add item" />

    <Teleport to="body">
      <ItemForm :show="showItemForm" @close="showItemForm = false" />
    </Teleport>
  </div>
</template>

<style scoped>
.agenda-layout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.title {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;

  font-size: 1.5rem;
  font-weight: 800;
  color: var(--light);
}

.material-symbols-rounded {
  font-variation-settings:
    'FILL' 0,
    'wght' 800,
    'GRAD' 0,
    'opsz' 24;
}
</style>
