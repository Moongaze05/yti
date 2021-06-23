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
  { name: 'name', align: 'center', label: 'ФИО', field: 'name', sortable: true},
  { name: 'disctrict', label: 'Субъект РФ', align: 'center', field: 'district',sortable: true},
  { name: 'city', label: 'Город', field: 'city', align: 'center', sortable: true},
  { name: 'school', label: 'Школа', field: 'school', align: 'center', sortable: true},
  { name: 'rating', label: 'Баллы', field: 'score', sortOrder: 'da', align: 'center', sortable: true , 
  sort:(a, b) => b - a},
];

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
    district: 'Чеченская республика',
    city: 'Грозный',
    school:'Школа Жизни',
    score: 99,
  },
    {
    name: 'Кратов Владислав',
    district: 'Русь-Матушка',
    school:'Питерская школа самбо',
    score: 1,
  },
    {
    name: 'Челов Чел Челович',
    district: 'Республика Карелия',
    city: 'Петрозаводск',
    school:'ШУЕ ППШ',
    score: 32,
    },
    {
    name: 'Ауф Фаина 228',
    district: 'Республика Дагестан',
    city: 'Махачкала',
    school:'Борцовая',
    score: 55,
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