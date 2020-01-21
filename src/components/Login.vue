<template>
    <div class="main">
    <van-image
        round
        width="6rem"
        height="6rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <input class="field" v-model="userName" type="text" placeholder="请输入用户名"/>
    <input class="field" v-model="password" type="password" placeholder="请输入密码"/>
    <van-button class="login" @click="login" round :loading="loading" type="info" loading-text="登录中...">登录</van-button>
    </div>
</template>

<script>
import Api from '../api'
export default {
    name:'Login',
    data(){
        return{
            loading:false,
            userName:'',
            password:''
        }
    },
    methods:{
        login(){
            this.loading = true
            Api.login(this.userName,this.password)
            .then(data =>{
                console.log(data)
                this.loading = false
                if(!data){
                    this.$toast('用户名或密码错误');
                }else{
                    this.$emit('login')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin-top: 6rem;
    .field{
        border: none;
        text-align: center;
        font-size: 12px;
        padding: 4px;
        width: 240px;
        margin-top: 30px;
        border-bottom: 1px solid #eee;
        &:hover{
            border-bottom: 1px solid #1989fa;
        }

    }
    .login{
        margin-top: 30px;
        width: 240px;
    }
}
</style>