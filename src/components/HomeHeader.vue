<template>
	<div class="home_h">
		 <header class="m_header">
                <div class="m_header_box" id="my_search">
                    <a href="#" class="icon_logo"></a>
                    <form action="#">
                        <span class="icon_search"></span>
                        <input type="search" class="search" placeholder="点击搜索" @click="goSearch($event)">
                    </form>
                    <router-link to="/login" class="logo_btn">登录</router-link>
                </div>
            </header>
	</div>
</template>
<script>
    export default{
        methods:{
            goSearch(event){
                this.$router.push('/search');
                window.event? window.event.returnValue = false : event.preventDefault();
            }
        }
    }
</script>