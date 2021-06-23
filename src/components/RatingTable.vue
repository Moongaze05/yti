<template>
    <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-md">
            <q-table
            style="height: 75vh;"
                title="Рейтинг"
                dense
                :data="rows"
                :columns="columns"
                row-key="name"
                binary-state-sort
                sortBy='score'
                descending
                table-header-style="backgroundColor:lightBlue"
                title-class="title"
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
    background-color:gold;
}
tbody>tr:nth-child(2) {
    background-color:silver;
}
tbody>tr:nth-child(3) {
    background-color:rgb(211, 143, 17);
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
    },
}
</script>
