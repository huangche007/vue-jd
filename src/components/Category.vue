<template>
	<div id="category">
		<CategoryHeadView></CategoryHeadView>
	    <CategoryMainView></CategoryMainView>
	</div>
</template>
<script>
	import {myMoveScroll} from '../assets/js/category.js'
	import CategoryHeadView from './CategoryHead.vue';
	import CategoryMainView from './CategoryMain.vue';
	export default{
		components:{
			CategoryHeadView,
			CategoryMainView
		},
		mounted(){
			myMoveScroll();
		}

	}
</script>

<style> 
@import '../assets/css/category.css';
</style>