<template>
	
		<main class="category_content">
	       <CategoryLeftView></CategoryLeftView>
	       <CategoryRightView></CategoryRightView> 
	    </main>
	
</template>
<script>
	import CategoryLeftView from './CategoryLeft.vue';
	import CategoryRightView from './CategoryRight.vue';
	export default{
		components:{
			CategoryLeftView,
			CategoryRightView
		}
	}
</script>