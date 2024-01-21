import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { Item } from '@/models/Item'

export const useItemStore = defineStore('item-store', () => {
  const newItem = ref(Item.createEmpty())
  const STORAGE_KEY = 'nodeplanner'
  const Items = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))

  // persist state
  watchEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Items.value))
  })

  return { newItem, Items }
})
