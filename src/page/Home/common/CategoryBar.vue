<template>
  <div class="CategoryBar cbig">
    <!-- <mt-search
      cancel-text="取消"
      placeholder="搜索"
      class="seach"
      >
    </mt-search> -->
    <ul>
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
        { title: '分类', imgUrl: 'http://pic.motieimg.com/img/148767081007254523_80_80.png', to: '/acc'},
        { title: '排行', imgUrl: 'http://pic.motieimg.com/img/14876708477472149_80_80.png', to: '/ranking'},
        { title: '完本', imgUrl: 'http://pic.motieimg.com/img/14876708378230165_80_80.png', to: '/finished'},
        { title: '免费', imgUrl: 'http://pic.motieimg.com/img/148767081416604324_80_80.png', to: '/free'}
      ]
    }
  }
};
</script>

<style lang="scss">
  .CategoryBar{
    text-align: center;
    padding: 10px;
    .seach{
      height:60px;
    }
    ul{
      display: flex;
      margin-top:10px;
      justify-content: space-around;
      li{
        a{
          display: flex;
          flex-direction: column;
          img{
            width: 40px;
          }
        }
      }
    }
  }
</style>
