<template>
    <RatingTable
    :columns="columns"
    :rows="rows" 
    />
</template>

<style scoped>

</style>

<script>
import RatingTable from 'components/RatingTable.vue';

const columns = [
  { name: 'name', align: 'center', label: 'ФИО', field: 'name', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'disctrict', label: 'Субъект РФ',align: 'center', field: 'district',sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'city', label: 'Город', field: 'city',align: 'center', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)},
  { name: 'school', label: 'Школа', field: 'school',align: 'center', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'rating', label: 'Рейтинг', field: 'rating',align: 'center', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
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
            rows: rows,
            columns:columns,
        };
    },
};


</script>