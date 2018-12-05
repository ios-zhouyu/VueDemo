<template>
    <div class="listView">
        <ListCell v-for="(item, index) in lists" :key="index" :index="index" :item="item"/>
    </div>
</template>

<script>
    import ListCell from './MineListCell'
    
	export default {
		name: "MineListView",
        props: {
	        lists: Array
        },
        components: {
	        ListCell
        }
	}
</script>

<style scoped>
    .listView {
        margin-top: 10px;
        background-color: #ededed;
    }
</style>
