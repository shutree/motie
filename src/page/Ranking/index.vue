
<template>
    <div class="login" >
        <mt-header class="mtheader" title="排行榜" >
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button  icon="more" slot="right" @click="more">
          </mt-button>
          <ul class="more"></ul>
        </mt-header>
        <ul>
                <li class="li"  :key="index" v-for="(card, index) in 6">
                    <div class="left">
                        <img src="./paihang.jpg" height="172" width="240" alt="" />
                    </div>
                    <div class="right">
                        <p><font-awesome-icon icon="coffee" /><a href=" ">画圣 </a></p>
                        <p><font-awesome-icon icon="coffee" /><a href=" ">1314便利店 </a></p>
                        <p><font-awesome-icon icon="coffee" /><a href=" ">龙王妻 </a></p>
                        <span @click="click">></span>
                        
                    </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:''
            }
        },
        methods:{
            click(){
                this.$router.push({ path: '/Click' })
            },
            more(){

            }
        }
    }
</script>
<style scoped lang="scss">
.li{
    overflow:hidden;
    border-top:10px solid #ccc;
}
.left{
    float:left;
    height:150px;
    width:40%;
    position:relative;
        img{
             height:100px;
             width:100px;
             display:block;
             position:absolute;
             top:0;
             left:0;
             right:0;
             bottom:0;
             margin:auto;
        }
}
.right{
    float:left;
    height:150px;
    width:40%;
    position:relative;
        p{
            padding-top:20px;
            font-size:12px;
            line-height:12px;
            a{
                color:black;
                margin-left:5px;
            }
        }
        span{
            position:absolute;
            top:36%;
            right:0;
            font-size:20px;
            color:#ccc;
        }

}
.mtheader{
        ul{
        width:200px;
        height:200px;
        background-color:pink;
}
}
</style>