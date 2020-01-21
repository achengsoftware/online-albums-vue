<template>
  <div id="app">
      <van-nav-bar class="nav"  fixed>
        <van-icon name="add-o"  size="1.5rem" color="#151515" slot="right" />
        <span class="title" slot="left">家庭相册</span>
      </van-nav-bar>
      <router-view/>
      <van-tabbar class="footer"
        active-color="#1989fa"
        inactive-color="#292929"
        route>
        <van-tabbar-item to="/home" icon="photo">照片</van-tabbar-item>
        <van-tabbar-item to="/search" icon="wap-home">相册</van-tabbar-item>
        <van-tabbar-item to="/setting" icon="manager">我</van-tabbar-item>
      </van-tabbar>

      <van-popup v-model="show"
        :close-on-click-overlay='false'
        :style="{ width: '100%',height:'100%' }"
      >
       <Login @login="onLongin"></Login>
      </van-popup>
  </div>
</template>

<script>
import Login from './components/Login'
export default {
  name: 'App',
  components:{
    Login
  },
  data(){
    return {
      show:true,
      username:'',
      password:''
    }
  },
  methods:{
    onLongin(){
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 650px;
  min-width: 320px;
}
.nav{
  background-color: #ededed;
  color: #212121;
}
.footer{
  background-color: #f7f7f7;
}
.title{
  color: #212121;
  font-size: 1.2rem;
}
</style>
