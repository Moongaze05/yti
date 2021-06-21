<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      ></q-img>

      <q-card-section>
        <div class="text-overline text-orange-9">{{ naming }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
        <div class="text-caption text-grey">
          {{ description }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Поделиться"></q-btn>
        <q-btn flat color="primary" label="Подробнее"></q-btn>

        <q-space></q-space>
      </q-card-actions>

      
    </q-card>
</div>
</template>

<style scoped>
</style>

<script>
export default {
    name: 'MainQuests',
    props: {
        naming: {
            type: String,
            required: true,
            },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default:'',
        },
    }
}
</script>