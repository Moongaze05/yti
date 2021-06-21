<template>
<div>
    <q-carousel
      animated
      v-model="slide"
      arrows
      infinite
      swipeable
      :autoplay='5000'
      class="carousel"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Челлендж</div>
          <div class="text-subtitle1">Станьте участниками челленджа #ЮИДМЫМОЛОДЫ</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Челлендж</div>
          <div class="text-subtitle1">Станьте участниками челленджа #ЮИДМЫМОЛОДЫ</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Челлендж</div>
          <div class="text-subtitle1">Станьте участниками челленджа #ЮИДМЫМОЛОДЫ</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Челлендж</div>
          <div class="text-subtitle1">Станьте участниками челленджа #ЮИДМЫМОЛОДЫ</div>
        </div>
      </q-carousel-slide>

    </q-carousel>

  <div>
    <div class='text-h4'>Квесты, конкурсы, задания</div>
    <div class='quests'>
      <MainQuests
      v-for="quest in quests"
      :key="quest.title"
      v-bind="quest" />
    </div>
  </div>
</div>

</template>
<style scoped>

.quests {
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  }

.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
  }

.text-h4 {
padding:15px 10px 0px;
text-align:center;
  }

.carousel {
  height:50vh;
  }

  @media (max-width:764px) {
    .carousel {
    height:30vh;
    }
    .text-h2 {
      font-size:32px;
      font-weight: 600;
    }
  }
</style>

<script>
import MainQuests from 'components/MainQuests.vue';

const questsData = [{
    naming:'Квест',
    title:'Первый квест',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dolor?',
  },
{
    naming: 'Конкурс',
    title:'Второй конкурс',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dolor?',
  },
  {
    naming: 'Задание',
    title:'Третье задание',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dolor?',
  },
];

export default {
  name: 'PageIndex',
  components: { MainQuests },
  data () {
    return {
      slide: 1,
      quests: questsData,
    }
  }
}
</script>
