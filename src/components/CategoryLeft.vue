<template>
	<div id="cate_left">
		 <div class="category_left">
	            <ul class="childbox">
	                <li class="" v-for="item in leftDatas">
	                	<router-link :to="'/catgory/'+item.category_id">
	                	{{item.category_name}}
	                	</router-link>
	                </li>
	               
	            </ul>
	        </div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			leftDatas:[]
		}
	},
	mounted(){
		this.getLeftDatas();
	},
	methods:{
		getLeftDatas(){
			let _this = this;
			_this.$http.get('/category').then((res)=>{
				_this.leftDatas = res.data;
			},(err)=>{
				console.log(err);
			})
		},
	}
}
</script>