<template>
    <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-md">
            <q-table
                title="Рейтинг"
                dense
                :data="rowsData"
                :columns="columnsData"
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
        rowsData: {
            type: Array,
            required: true,
        },
        columnsData: {
            type: Array,
            required: true,
        }
    },
}
</script>
