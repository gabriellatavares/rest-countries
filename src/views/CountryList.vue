<script setup>
import { onMounted, ref } from 'vue';
import { useList } from '../composables/useList';
import TableList from '../components/TableList.vue';

const { getCountries, countries } = useList();
const listConfig = ref({
  page: 1,
  itemsPerPage: 15,
  headers: [
    {title: 'Name', align: 'start', sortable: true, key: 'name.common'},
    {title: 'Flag', align: 'end', sortable: false, key: 'flag'},
    {title: 'Continents', align: 'end', sortable: false, key: 'continents'},
    {title: 'Population', align: 'end', sortable: false, key: 'population'}
  ]
});

onMounted(() => {
  getCountries();
})
</script>

<template>
  <TableList :config="listConfig" :list="countries.list"> </TableList>
</template>
