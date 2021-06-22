<template>
    <div class="q-pa-md">
        <div class='text-h4'>
        Полезные материалы для школьников и их родителей
        </div>
        <div class='materials'>
    <SharingMaterial
        v-for="material in materials"
          :key="material.title"
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
    title: 'Полезный материал',
    description: 'Прочитайте пожалуйста наш полезный материал',
    link:'#',
},
{
    title: 'Полезный материал',
    description: 'Прочитайте пожалуйста наш полезный материал',
    link:'#',
},
{
    title: 'Полезный материал',
    description: 'Прочитайте пожалуйста наш полезный материал',
    link:'#',
},
{
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
