<script setup>
import { ref } from 'vue';

const props = defineProps({
  config: Object,
  list: Array
})

const emit = defineEmits(['click'])

const itemsPerPage = ref(props.config.itemsPerPage);

function handleClick (row, item) {
  emit('click', item.item);
}

</script>

<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    height="70vh"
    :headers="config.headers"
    :items="list"
    item-value="name"
    class="elevation-1"
    @click:row="handleClick"
  >
  <template v-slot:no-data>
      <p class="no-data" v-if="config.search">{{ $vuetify.defaults.VDataTable.noDataText }}</p>
      <div class="loading" v-else>Loading...</div>
  </template>
  </v-data-table>
</template>
