<template>
    <div class="q-pa-md">
        <div class='text-h4'>
        Полезные материалы для школьников и их родителей
        </div>
        <div class='materials'>
    <SharingMaterial
        v-for="material in materials"
          :key="material.id"
          v-bind="material"
    />
    </div>
  </div>
</template>

<style scoped>
.text-h4 {
    text-align:center;
    }
.materials {
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    };


</style>

<script>
import SharingMaterial from 'components/SharingMaterial.vue';

const materialsData = [{
    id: 1,
    title: 'Полезный материал',
    description: 'Прочитайте пожалуйста наш полезный материал',
    link:'#',
},
{
    id: 2,
    title: 'Полезный материал',
    description: 'Прочитайте пожалуйста наш полезный материал',
    link:'#',
},
{
    id: 3,
    title: 'Полезный материал',
    description: 'Прочитайте пожалуйста наш полезный материал',
    link:'#',
},
{
    id: 4,
    title: 'Полезный материал',
    description: 'Прочитайте пожалуйста наш полезный материал',
    link:'#',
},
];

export default {
  name: 'profile',
  components: { SharingMaterial },
  data() {
        return {
            materials: materialsData,
        };
    },
}
</script>
