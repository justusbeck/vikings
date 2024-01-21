<script setup lang="ts">
import { useItemStore } from '@/stores/ItemStore'

const props = defineProps({
  name: String,
  status: Boolean,
  item: Number,
  tag: String,
  time: String
})

const store = useItemStore()

function remove(item: any) {
  const itemIndex = store.Items.indexOf(item)
  if (itemIndex !== -1) {
    store.Items.splice(itemIndex, 1)
  }
}
</script>

<template>
  <div class="item-card">
    <div class="color-bar"></div>

    <div class="body">
      <label class="item-name">
        <input type="checkbox" />
        {{ props.name }}
      </label>
      <div class="time" v-if="props.time">{{ props.time }}</div>
      <div class="tag-wrapper" v-if="props.tag">
        <div class="tag">#{{ props.tag }}</div>
      </div>
    </div>

    <div class="menu">
      <button @click="remove(item)">
        <span class="material-symbols-rounded"> delete </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;

  border-radius: 8px;
  overflow: hidden;
  background: var(--light);
}

.color-bar {
  width: 8px;
  align-self: stretch;

  background: var(--accent);
}
.body {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;

  color: var(--dark);
}

.item-name {
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;

  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

/* input[type='checkbox'] {
  font: inherit;
  width: 1.25em;
  height: 1.25em;
  border: 0.125em solid var(--dark);
  border-radius: 0.125em;

  display: grid;
  place-content: center;
} */
.time {
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.tag-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
}
.tag {
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 100px;
  background: var(--dark);

  color: var(--light);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.menu {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  align-self: stretch;
}

button {
  border: none;
  outline: none;
  box-shadow: none;
}
</style>
