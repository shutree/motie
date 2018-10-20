<template>
  <div class="details" >
    <mt-header title="作品详情" :style='{background:"#fff",color:"#000"}'>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right">
      </mt-button>
    </mt-header>
    <div class="book_mod">
      <div class="cover"><img src="https://cdn.motieimg.com/book/0011/113477/1.jpg?x-oss-process=image/resize,m_lfit,h_140,w_100">
            </div>
      <div class="shadow"></div>
      <a href="javascript:;" class="dl_a">
        <dl class="detail_table" style="border-bottom:1px solid transparent">
          <dt>
            <img src="https://cdn.motieimg.com/book/0011/113477/1.jpg?x-oss-process=image/resize,m_lfit,h_140,w_100" alt="" width="80" height="112">
            <span class="other_l_col">连载中</span>
            </dt>
          <dd>
            <h1>妙手村医</h1>
            <p>
              <span>作者：我不是橘子</span>
              <span>字数：347692</span>
              <span class="cc">11126书友正在看</span>
              <b class="tag">
                <i class="xuanhuan">都市</i>
                  <i class="dushi">种田</i>
                  </b>
            </p>
          </dd>
      </dl>
      </a>
    </div>
    <div class="read_txt">
      <p>
        <span>立即阅读</span>
        <span>投票</span>
        <span>加入书架</span>
      </p>
      <p>山村小农民，偶然获得龙王传承，从此翻身做主人！养猪养到美利坚，种地种到外太空，坐拥八百当大王。</p>
    </div>
    <div class="del-list">
      <ul>
        <li>
          <span class="del_txt_title">目录</span>
          <span>最近更新一百六十八章</span>
          <span>2018-10-19 > </span>
        </li>
        <li>
          <h3>
            <span class="del_txt_title">捧场</span>
            <span>我要捧场</span>
          </h3>
          <ul class="support">
            <li>
              <font-awesome-icon icon="coffee" />
              <span>磨铁币</span>
            </li>
            <li>
              <font-awesome-icon icon="coffee" />
              <span>鲜花</span>
            </li>
            <li>
              <font-awesome-icon icon="coffee" />
              <span>美酒</span>
            </li>
            <li>
              <font-awesome-icon icon="coffee" />
              <span>钻石</span>
            </li>
            <li>
              <font-awesome-icon icon="coffee" />
              <span>皇冠</span>
            </li>
            <li>
              <font-awesome-icon icon="coffee" />
              <span>跑车</span>
            </li>
            <li>
              <font-awesome-icon icon="coffee" />
              <span>别墅</span>
            </li>
          </ul>
        </li>
        <li>
          <h3>
            <span class="del_txt_title">评论</span>
            <span>5人评论</span>
            <span>+写评论</span>
          </h3>
          <ul class="comments">
            <li>
              <div></div>
            </li>
          </ul>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import '../sass/details.scss'

  export default {
    data(){
        return {
            msg:''
        }
    }
  }
</script>
<style lang="scss">

</style>