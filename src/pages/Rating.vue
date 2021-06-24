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
  { id: 'f1019a8d-43d3-4863-80e5-63fe78973854', name: 'name', align: 'center', label: 'ФИО', field: 'name', sortable: true},
  { id: '83c787bf-6886-4ce9-a181-d24b3f8a4523', name: 'disctrict', label: 'Субъект РФ', align: 'center', field: 'district',sortable: true},
  { id: '6b5bf0ca-7b7a-4cf9-a347-0933530634cb', name: 'city', label: 'Город', field: 'city', align: 'center', sortable: true},
  { id: '36543e61-8b9b-42ce-a59a-a2fd5bacdf7d', name: 'school', label: 'Школа', field: 'school', align: 'center', sortable: true},
  { id: 'acfe075e-c268-4dc7-a97e-266fe949f9a1', name: 'score', label: 'Баллы', field: 'score', align: 'center', sortable: true ,
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
    name: 'Пупкин Василий Васильевич',
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
    },{
    name: 'фупфцурЦ',
    district: 'Московская область',
    city: 'Москва',
    school:'СОШ №1337',
    score: 16,
  },{
    name: 'Пупкин Василий Васильевич',
    district: 'Московская область',
    city: 'Москва',
    school:'СОШ №1337',
    score: 13,
  },{
    name: 'прокорз',
    district: 'Московская область',
    city: 'Москва',
    school:'СОШ №1337',
    score: 22,
  },{
    name: 'фххцвххцфаю',
    district: 'Московская область',
    city: 'Москва',
    school:'СОШ №1337',
    score: 33,
  },{
    name: 'кхзпукрлзук',
    district: 'Московская область',
    city: 'Москва',
    school:'СОШ №1337',
    score: 35,
  },{
    name: 'фжцвьжфцд',
    district: 'Московская область',
    city: 'Москва',
    school:'СОШ №1337',
    score: 55,
  },{
    name: 'фвцждь фцжвдфж',
    district: 'Московская область',
    city: 'Москва',
    school:'СОШ №1337',
    score: 23,
  },{
    name: 'оттищытищы',
    district: 'Московская область',
    city: 'Москва',
    school:'СОШ №1337',
    score: 77,
  },{
    name: 'Пупкин Василий Васильевич',
    district: 'Московская область',
    city: 'Москва',
    school:'СОШ №1337',
    score: 11,
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
