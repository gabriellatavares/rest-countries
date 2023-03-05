<script setup>
import { ref } from 'vue';

const props = defineProps({
  config: Object,
  list: Array
})

const itemsPerPage = ref(props.config.itemsPerPage);

</script>

<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="config.headers"
    :items="list"
    item-value="name"
    class="elevation-1"
  ></v-data-table>
</template>