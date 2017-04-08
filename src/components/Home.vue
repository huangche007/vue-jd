<template>
	<div class="home">
		<div class="m_layout">
            <!-- 头部区 -->
           <HomeHeaderView></HomeHeaderView>
            <!-- 轮播图-->
            <HomeBannerView></HomeBannerView>
            <!--导航-->
            <HomeNavView></HomeNavView>
            <!--商品区-->
            <HomeMainView></HomeMainView>
        </div>
	</div>
</template>
 <script>
    
    import HomeHeaderView from './HomeHeader.vue';
    import HomeBannerView from './HomeBanner.vue';
    import HomeNavView from './HomeNav.vue';
    import HomeMainView from './HomeMain.vue';
    import {bindEvent,scrollPic} from '../assets/js/index.js'
    export default{
       components:{
        HomeHeaderView,
        HomeBannerView,
        HomeNavView,
        HomeMainView
       },
       mounted(){
        bindEvent();
        scrollPic();
       }
    }
</script>
<style>
@import '../assets/css/index.css';
</style>