<template>
	<div class="search_page">
		<div class="h_layout">
	    	<SearchMainView></SearchMainView>
		</div>
	</div>
</template>
<script>
	import SearchMainView from './SearchMain.vue';
	export default{
		components:{
			SearchMainView
		}
	}
</script>
<style scoped>
	@import '../assets/css/searchpage.css'
</style>