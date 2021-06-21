<template>
    <q-card class="my-card-material">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">{{ title }}</div>
          <div class="text-subtitle2">{{ description }}</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat class='btn'>Поделиться</q-btn>
        <q-btn flat class='btn'>Подробнее</q-btn>
      </q-card-actions>
    </q-card>
</template>

<style scoped>
.my-card-material {
    min-width:450px;
    padding:10px;
    margin:5px;
}
.btn {
    font-weight:600;
}

@media (max-width: 764px) {
    .my-card-material {
        min-width:350px;
        /* max-width:350px; */
    }
}
</style>

<script>
export default {
  name: 'MaterialComp',
  props: {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },
  }
}
</script>
