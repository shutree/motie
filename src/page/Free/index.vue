
<template>
    <div class="Free" >
        <mt-header class="mtheader" title="免费专区" >
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button  icon="more" slot="right" @click="more">
          </mt-button>
          <ul class="more"></ul>
        </mt-header>
        <h4><span>精品免费</span></h4>
        <div class="sh">
        <li :key="index" v-for="(card, index) in 3">
            <img  src="./wanben.jpg" />
            医品尖兵
        </li>
        </div>
        <h4><span>免费新书</span></h4>
        <ul>
                <li class="li"  :key="index" v-for="(card, index) in 3">
                    <div class="left">
                        <img src="./wanben.jpg" height="172" width="240" alt="" />
                    </div>
                    <div class="right">
                        <p><font-awesome-icon icon="coffee" /><a href=" ">画圣 </a></p>
                        <p><font-awesome-icon icon="coffee" /><a href=" ">1314便利店 </a></p>
                        <p><font-awesome-icon icon="coffee" /><a href=" ">龙王妻 </a></p>
                        <span @click="click">></span>
                        
                    </div>
            </li>
        </ul>
        <h4><span>热门免费</span></h4>
        <ul>
                <li class="li"  :key="index" v-for="(card, index) in 3">
                    <div class="left">
                        <img src="./wanben.jpg" height="172" width="240" alt="" />
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
h4{
    height:30px;
    margin:10px 5px 5px 5px;
    span{
       border-bottom:2px solid red;
    }
  }
  .sh{
      width:100%;
      overflow: hidden;
      li{
        width:120px;
        height:150px;
        margin:0 0 25px 5px;
        float:left;
        img{
          width:120px;
          height:150px;
        }
      }
  }
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