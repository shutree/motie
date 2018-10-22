<template>
  <div class="CategoryBar">
    <input type="text">
    <ul class="m-n-channel">
      <li :key="index" v-for="( item, index ) in items">
        <router-link :to="item.to">
          <img :src="item.imgUrl" /><span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data(){
    return {
      items: [
        { title: '分类', imgUrl: 'http://pic.motieimg.com/img/148767081007254523_80_80.png', to: '/Acc'},
        { title: '排行', imgUrl: 'http://pic.motieimg.com/img/148767081007254523_80_80.png', to: '/Ranking'},
        { title: '完本', imgUrl: 'http://pic.motieimg.com/img/148767081007254523_80_80.png', to: '/Finished'},
        { title: '免费', imgUrl: 'http://pic.motieimg.com/img/148767081007254523_80_80.png', to: '/Free'}
      ]
    }
  }
};
</script>

<style lang="scss">
  .CategoryBar{
    text-align: center;
    padding: 20px;
    ul{
      display: flex;
      justify-content: space-between;
      li{
        a{
          display: flex;
          flex-direction: column;
          img{
            width: 60px;
          }
        }
      }

    }
  }
</style>
