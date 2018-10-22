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
        <span class="readnow">立即阅读</span>
        <span>投票</span>
        <span>加入书架</span>
      </p>
      <p class="read_txt_dels">山村小农民，偶然获得龙王传承，从此翻身做主人！养猪养到美利坚，种地种到外太空，坐拥八百当大王。</p>
    </div>
    <div class="del_btm">
      <div class="del-list">
        <ul>
          <li class="del_one">
            <span class="del_txt_title">目录</span>
            <span>最近更新一百六十八章...</span>
            <span class="title_time">2018-10-19 > </span>
          </li>
          <li class="del_two">
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
          <li class="del_three">
            <h3>
              <span class="del_txt_title">评论</span>
              <span>5人评论</span>
              <span>+写评论</span>
            </h3>
            <ul class="comments">
              <li>
                <div class="customer-img">
                  <img src="https://cdn.motieimg.com/people/0585/5850204/5.jpg?x-oss-process=image/resize,m_lfit,h_140,w_100" />
                </div>
                <div class="customer-comments">
                  <div class="cus-del">
                    <p class="user-name">虎木</p>
                    <p class="time" >2018-09-28</p>
                    <p>有意思加油更新</p>
                  </div>
                  <div class="con_num" >
                    <font-awesome-icon icon="coffee" />
                    <span>(0)</span>
                  </div>
                </div>
              </li>
            </ul>
            <a>去书评区逛逛</a>
          </li>
          <li class="same-book">
            <h3>
              <span class="del_txt_title s1">喜欢这本书的人还喜欢</span>
            </h3>
            <ul class="same-book-img">
              <li>
                <a href="#"><img src="https://cdn.motieimg.com/book/0009/98923/9.jpg?x-oss-process=image/resize,m_lfit,h_140,w_100" border="0">
                </a>
                <h4>交齐米兔</h4>
              </li>
              <li>
                <a href="#"><img src="https://cdn.motieimg.com/book/0009/98923/9.jpg?x-oss-process=image/resize,m_lfit,h_140,w_100" border="0">
                </a>
                <h4>交齐米兔</h4>
              </li>
              <li>
                <a href="#"><img src="https://cdn.motieimg.com/book/0009/98923/9.jpg?x-oss-process=image/resize,m_lfit,h_140,w_100" border="0">
                </a>
                <h4>交齐米兔</h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="bot_ecode">
        <span class="ecot_t1">关注官方微信公众号【磨铁小说】，方便下次阅读</span>
        <img src="http://pic.motieimg.com/img/152638451755094592_258_258.jpg" border="0">
        <em class="ecot_t2">— 微信内可长按识别 —</em>
      </div>
    </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import './details.scss'
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