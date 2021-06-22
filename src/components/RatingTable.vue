<template>
    <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-md">
            <q-table
                title="Рейтинг"
                dense
                :data="rows"
                :columns="columns"
                row-key="name">
            </q-table>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'RatingTable',
    props:{
        rows: {
            type: Array,
            required: true,
        },
        columns: {
            type: Array,
            required: true,
        },
    },
}
</script>
