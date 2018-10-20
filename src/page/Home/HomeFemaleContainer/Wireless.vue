<template>
  <div class="Wireless">
    <h4><span>无线风向榜</span></h4>
    <ul class="shc">
      <li :key="index" v-for="(card, index) in 3">
        <img src="./shc.jpg" />
        医品尖兵
      </li>
    </ul>
    	<mt-button class="bt" size="large">查看人气前100名>></mt-button>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss">
  .k{
    background-color: #fff;
    color:red;
  }
  h4{
    height:30px;
    span{
       border-bottom:2px solid red;
    }
  }
  .shc{
      display:flex;
      li{
        flex:1;
        img{
          width:120px;
          height:150px;
        }
      }
  }
</style>
