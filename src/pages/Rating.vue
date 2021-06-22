<template>
    <RatingTable
    :columnsData="columns" 
    :rowsData="rows"
    />
</template>

<style scoped>

</style>

<script>
import RatingTable from 'components/RatingTable.vue';

const columnsData = [
  { name: 'name', align: 'center', label: 'ФИО', field: 'name', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'disctrict', label: 'Субъект РФ', field: 'district',sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'city', label: 'Город', field: 'city', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)},
  { name: 'school', label: 'Школа', field: 'school', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'rating', label: 'Рейтинг', field: 'rating', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rowsData = [
  {
    name: 'Пупкин Василий Васильевич',
    district: 'Московская область',
    city: 'Москва',
    school:'СОШ №1337',
    score: 15,
  },
  {
    name: 'Чечен Рамзан Ахматович',
    district: 'Республика Чечня',
    city: 'Грозный',
    school:'Школа Жизни',
    score: 999,
  },
    {
    name: 'Пупин Владислав',
    district: 'Русь-Матушка',
    school:'Питерская школа самбо',
    score: 1,
  },
];



export default {
  name: 'Rating',
  components: { RatingTable },
  data() {
    return {
            rows: rowsData,
            columns:columnsData,
        };
    },
};


</script>