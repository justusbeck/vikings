<script setup lang="ts">
import { useItemStore } from '@/stores/ItemStore'
import { Item } from '@/models/Item'

const store = useItemStore()

const props = defineProps({
  show: Boolean
})

function createItem() {
  if (store.newItem) {
    store.Items.push({
      id: Date.now(),
      name: store.newItem.name,
      tag: store.newItem.tag,
      time: store.newItem.time,
      status: false
    })
  }
  store.newItem = Item.createEmpty()
}
</script>

<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal">
      <form @submit.prevent="createItem">
        <input v-model.trim="store.newItem.name" placeholder="task name" class="text" />
        <input v-model.trim="store.newItem.tag" placeholder="tag" class="text" />
        <input v-model.trim="store.newItem.time" placeholder="time estimate" class="text" />
        <div class="buttons">
          <button @click="$emit('close')" type="reset" class="cancel">cancel</button>
          <button @click="$emit('close')" type="submit" class="add">save</button>
        </div>
      </form>
    </div>
  </Transition>
</template>

<style scoped></style>
