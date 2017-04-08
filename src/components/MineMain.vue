<template>
	<div class="mine_mm">
	<main class="mine_layout">
	    <section class="mine_infos clearfix">
	        <div class="mmm_info">
	            <div class="user_icon">
	                <img src="../assets/images/my_icon.jpg" alt="">
	            </div>
	            <div class="user_detal">
	                <p class="user_name">{{uInfs.user_name}}</p>
	                <div class="reg">
	                    <a href="#" class="reg_link">注册会员</a>
	                    <div class="vip">
	                    <span class="vip_icon">
	                        <img src="../assets/images/vip.png" alt="">
	                    </span>
	                        <a href="#">
	                            立享PLUS特权 >
	                        </a>
	                    </div>
	                </div>
	            </div>
	            <div class="manage_account">
	                <span>
	                    账户管理 >
	                </span>
	            </div>
	        </div>
	        <div class="yguanzhu_box">
	            <ul class="gunzhuf">
	                <li class="item">
	                    <a href="" class="item_link">
	                        <span>0</span>
	                        <span>关注的商品</span>
	                    </a>
	                </li>
	                <li class="item">
	                    <a href="" class="item_link">
	                        <span>0</span>
	                        <span>关注的店铺</span>
	                    </a>
	                </li>
	                <li class="item">
	                    <a href="" class="item_link">
	                        <span>8</span>
	                        <span>浏览记录</span>
	                    </a>
	                </li>
	            </ul>
	        </div>
	    </section>
	    <section class="my_order_box">
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/my_order_icon.png" alt="">
	                <span>我的订单</span>
	            </div>
	            <div class="order_right">
	                <span>全部订单></span>
	            </div>
	        </div>
	        <div class="order_bottom_box">
	            <ul>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <img src="../assets/images/waitpay.png" alt="" class="order_item_pic">
	                        <span class="order_item_pay">待付款</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <img src="../assets/images/wuliu.png" alt="" class="order_item_pic">
	                        <span class="order_item_pay">待收货</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <img src="../assets/images/tuihuan.png" alt="" class="order_item_pic">
	                        <span class="order_item_pay">退换/售后</span>
	                    </a>
	                </li>
	            </ul>
	        </div>
	    </section>
	    <section class="my_order_box">
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/mypackage.png" alt="">
	                <span>我的钱包</span>
	            </div>
	            <div class="order_right">
	                <span>></span>
	            </div>
	        </div>
	        <div class="order_bottom_box">
	            <ul>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <span style="margin-top: -5px;display: block">0</span>
	                        <span class="order_item_pay">账户余额</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <span style="margin-top: -6px;display: block">0</span>
	                        <span class="order_item_pay">优惠券</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <span style="margin-top: -6px;display: block">0</span>
	                        <span class="order_item_pay">京豆</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <span style="margin-top: -6px;display: block">0</span>
	                        <span class="order_item_pay">京东卡/E卡</span>
	                    </a>
	                </li>
	            </ul>
	        </div>
	    </section>
	    <section class="my_order_box my_b_info">
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/baitiao1.png" alt="">
	                <span>京东白条</span>
	            </div>
	            <div class="order_right">
	                <span>白条还款、激活获礼包></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/baitiao2.png" alt="">
	                <span>客户服务</span>
	            </div>
	            <div class="order_right">
	                <span>返修/退换货、在线客服></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/bai3.png" alt="">
	                <span>会员plus</span>
	            </div>
	            <div class="order_right">
	                <span>PLUS绝密攻略></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/bai4.png" alt="">
	                <span>京东会员</span>
	            </div>
	            <div class="order_right">
	                <span>会员俱乐部></span>
	            </div>
	        </div>
	    </section>
	    <section class="my_order_box my_b_info">
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/huo1.png" alt="">
	                <span>京东火车票</span>
	            </div>
	            <div class="order_right">
	                <span>来京东轻松抢票></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/huo2.png" alt="">
	                <span>1元抢宝</span>
	            </div>
	            <div class="order_right">
	                <span>1元成就梦想></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/huo3.png" alt="">
	                <span>我的预约</span>
	            </div>
	            <div class="order_right">
	                <span>></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/huo4.png" alt="">
	                <span>我的必购码</span>
	            </div>
	            <div class="order_right">
	                <span>></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/huo5.jpg" alt="">
	                <span>应用推荐</span>
	            </div>
	            <div class="order_right">
	                <span>></span>
	            </div>
	        </div>
	    </section>
	</main>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				uInfs:{}
			}
		},
		mounted(){
			this.getUDatas();
		},
		methods:{
			getUDatas(){
				let _this = this;
				let uObj ={};
				if(window.sessionStorage.userInfo){
					let uObj = JSON.parse(window.sessionStorage.userInfo);
					let useId = uObj.user_id;
					_this.$http.get('/userinfo',{
						params:{
							uId:useId
						}
					}).then((res)=>{
						_this.uInfs = res.data;
						console.log(_this.uInfs);
					},(err)=>{
						console.log(err);
					});
				}else{
					_this.$router.push({
						path:'/login',
					})
				}
			}
		}
	}
</script>