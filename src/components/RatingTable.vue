<template>
    <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-md">
            <q-table
            style="height: 75vh;"
                title="Рейтинг"
                dense
                :data="rows"
                :columns="columns"
                row-key="id"
                binary-state-sort
                descending
                table-header-style="backgroundColor:#40DBFF"
                title-class="title"
                :rows-per-page-options="[]"
                :pagination="pagination"
                >
            </q-table>
        </div>
    </div>
</template>

<style>
.title {
    color:white;
}

.q-table__top {
    background-color: #1976D2
}

tbody>tr:nth-child(1) {
    background-color:rgb(255, 230, 0);
}
tbody>tr:nth-child(2) {
    background-color:rgb(184, 184, 184);
}
tbody>tr:nth-child(3) {
    background-color:#d77f15;
}
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
        pagination: {
            type: Object,
        },
    },
}
</script>
