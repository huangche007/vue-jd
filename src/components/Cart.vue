<template>
	<div id="my_cart">
		
		<CartHeaderView></CartHeaderView>
		<CartMainView></CartMainView>
		<CartFooterView></CartFooterView>
		<div class="pop" style="display: none">
		    <div class="pop_box">
		        <div class="del_info">
		            确定要删除该商品吗？
		        </div>
		        <div class="del_cancel">
		            取消
		        </div>
		        <div class="del_ok">
		            确定
		        </div>
		    </div>
		</div>
	</div>
</template>
<script>
 import {check,animatDelBox} from '../assets/js/cart.js'	
 import CartHeaderView from './CartHeader.vue';
 import CartMainView from './CartMain.vue';
 import CartFooterView from './CartFooter.vue';

 export default{
 	components:{
 		CartHeaderView,
 		CartMainView,
 		CartFooterView
 	},
 	mounted(){
 		check();
 		animatDelBox();
 	}
 }
</script>
<style>
@import '../assets/css/cart.css';
</style>
