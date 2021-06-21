<template>
    <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      swipeable
      :autoplay='5000'
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <q-card class="card" >
            <div class="text-h6">
              Станьте участниками челленджа #ЮИДМЫМОЛОДЫ
            </div>
        </q-card>
      </q-carousel-slide>

      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <q-card class="card" >
            <div class="text-h6">
              Станьте участниками челленджа #ЮИДМЫМОЛОДЫ
            </div>
        </q-card>
      </q-carousel-slide>

      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <q-card class="card" >
            <div class="text-h6">
              Станьте участниками челленджа #ЮИДМЫМОЛОДЫ
            </div>
        </q-card>
      </q-carousel-slide>

      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg">
        <q-card class="card" >
            <div class="text-h6">
              Станьте участниками челленджа #ЮИДМЫМОЛОДЫ
            </div>
        </q-card>
      </q-carousel-slide>

    </q-carousel>

  </div>
</template>
<style scoped>
.card {

  height:100px;

  }
</style>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
