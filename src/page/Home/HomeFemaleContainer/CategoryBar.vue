<template>
  <div class="CategoryBar">
    <input />
    <ul class="m-n-channel">
      <li :key="index" v-for="( item, index ) in items">
        <a href="#"><img :src="item.imgUrl" /><span>{{item.title}}</span></a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data(){
    return {
      items: [
        { title: '分类', imgUrl: 'http://pic.motieimg.com/img/148767081007254523_80_80.png', linkUrl: '#'},
        { title: '分类', imgUrl: 'http://pic.motieimg.com/img/148767081007254523_80_80.png', linkUrl: '#'},
        { title: '分类', imgUrl: 'http://pic.motieimg.com/img/148767081007254523_80_80.png', linkUrl: '#'},
        { title: '分类', imgUrl: 'http://pic.motieimg.com/img/148767081007254523_80_80.png', linkUrl: '#'}
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
