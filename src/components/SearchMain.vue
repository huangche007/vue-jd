<template>
	<div class="search_ma">
	<header class="top_bar">
	        <a onclick="window.history.go(-1)" class="icon_back"></a>
	        <form  class="goods_search" v-on:submit.prevent>
	            <input type="saerch" class="goods_search_content" placeholder="搜索" v-model="keyword" @keyup.enter="goSearch($event)">
	        </form>
	        <a href="#" class="icon_menu"></a>
    	</header>
	    <section class="search_condition">
	        <ul>
	            <li>
	                <span class="all">全部</span>
	                <em class="all_icon"></em>
	            </li>
	            <li>
	                <span @click="getbyHot()">销量</span>

	            </li>
	            <li class="p_price">
	                <span>价格</span>
	                <em class="price_up" @click="getByPriceUp()"></em>
	                <em class="price_down" @click="getByPriceDown()"></em>
	            </li>
	            <li>
	                <span>筛选</span>
	                <em class="saixuan"></em>
	            </li>
	        </ul>
	    </section>
		<main class="main_goods_box">
	        <ul>
	            <li class="goods_item" v-for="item in mDatas">
	                <router-link :to="'/detail/'+item.product_id" class="goods_item_link">
	                    <img v-lazy="item.product_img_url" alt="" class="goods_item_pic">
	                    <div class="goods_right">
	                        <div class="pp_name">
	                            <span>
	                                {{item.product_name}}
	                            </span>
	                        </div>
	                        <div class="price_box">
	                            <span>￥</span>
	                            <span>{{item.product_uprice}}</span>
	                            <span>.00</span>
	                        </div>
	                        <div class="pinglun_box">
	                            <span>{{item.product_comment_num}}条评价</span>
	                            <span>{{item.shop_name}}</span>
	                        </div>
	                    </div>
	                </router-link>
	            </li>
	          
	        </ul>
    	</main>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				keyword:'',
				mDatas:[]
			}
		},
		methods:{
			goSearch(event){
				let _this = this;
				if(_this.keyword == ''){
					alert('请输入商品名称');
				}else{
					_this.$http.get('/search',{
						params:{
							kw:_this.keyword,
							hot:'',
							priceUp:'',
							priceDown:''
						}
						}).then((res)=>{
							_this.mDatas = res.data;
							console.log(_this.mDatas);
						},(err)=>{
							console.log(err);
						});
					}
				
				 window.event? window.event.returnValue = false : event.preventDefault();
			},
			getbyHot(){
				let _this = this;
				if(_this.keyword == ''){
					alert('请输入商品名称');
				}else{
					_this.$http.get('/search',{
						params:{
							kw:_this.keyword,
							hot:'hot',
							priceUp:'',
							priceDown:''
						}
						}).then((res)=>{
							_this.mDatas = res.data;
							console.log(_this.mDatas);
						},(err)=>{
							console.log(err);
						});
					}
			},
			getByPriceUp(){
				let _this = this;
				if(_this.keyword == ''){
					alert('请输入商品名称');
				}else{
					_this.$http.get('/search',{
						params:{
							kw:_this.keyword,
							hot:'hot',
							priceUp:'priceUp',
							priceDown:''
						}
						}).then((res)=>{
							_this.mDatas = res.data;
							console.log(_this.mDatas);
						},(err)=>{
							console.log(err);
						});
					}
			},
			getByPriceDown(){
				let _this = this;
				if(_this.keyword == ''){
					alert('请输入商品名称');
				}else{
					_this.$http.get('/search',{
						params:{
							kw:_this.keyword,
							hot:'hot',
							priceUp:'',
							priceDown:'priceDown'
						}
						}).then((res)=>{
							_this.mDatas = res.data;
							console.log(_this.mDatas);
						},(err)=>{
							console.log(err);
						});
					}
			}
		}
	}
</script>