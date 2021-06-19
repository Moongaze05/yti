<template>
    <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1">
       <q-card class="card" style='max-height:200px'>
          <q-img style="height:100px"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            basic>
            <div class="text-h6">
              Станьте участниками челленджа #ЮИДМЫМОЛОДЫ
            </div>
          </q-img>
       </q-card>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolore nesciunt quae reprehenderit quia!</q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolore nesciunt quae reprehenderit quia!</q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dolore nesciunt quae reprehenderit quia!</q-carousel-slide>
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
