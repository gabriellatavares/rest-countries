<script setup>
import { computed } from 'vue';

const props = defineProps({
  options: Array,
  label: String,
  selected: String
})

const emit = defineEmits(['update'])

const value = computed({
  get() {
    return props.selected
  },
  set(value) {
    emit('update', value)
  }
})

</script>
<template>
  <v-select
  v-model="value"
  clearable
  :label="props.label"
  :items="props.options"
  variant="solo"
  ></v-select>
</template>
