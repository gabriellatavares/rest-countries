<script setup>
import { computed } from 'vue';

const props = defineProps({searchProp: String})
const emit = defineEmits(['update'])

const value = computed({
  get() {
    return props.searchProp
  },
  set(value) {
    emit('update', value)
  }
})

</script>

<template>
  <v-text-field
    v-model="value"
    prepend-icon="mdi-magnify"
    label="Search"
    clearable
    variant="solo"
  ></v-text-field>
</template>