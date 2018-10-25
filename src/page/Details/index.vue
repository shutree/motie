<template>
  <div class="details" >
    <mt-header title="作品详情" :style='{background:"#fff",color:"#000"}'>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="shows = !shows">
      </mt-button>
    </mt-header>
    <div class="shadow" v-show="shows"></div>

    <transition
      enter-active-class="animated slideInDown faster"
      leave-active-class="animated slideOutUp faster"
    >
      <div class="menu" v-show="shows">
        <ul class="support sl">
          <li>
            <font-awesome-icon icon="home" />
            <span>首页</span>
          </li>
          <li>
            <font-awesome-icon icon="list-alt" />
            <span>分类</span>
          </li>
          <li>
            <font-awesome-icon icon="book" />
            <span>完本</span>
          </li>
          <li>
            <font-awesome-icon icon="sort-amount-up" />
            <span>排行</span>
          </li>
          <li>
            <font-awesome-icon icon="shopping-basket" />
            <span>免费</span>
          </li>
          <li>
            <font-awesome-icon icon="server" />
            <span>书架</span>
          </li>
          <li>
            <font-awesome-icon icon="book-reader" />
            <span>账户</span>
          </li>
        </ul>
      </div>
    </transition>

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
                <font-awesome-icon icon="coins" />
                <span>磨铁币</span>
              </li>
              <li>
                <font-awesome-icon icon="certificate" />
                <span>鲜花</span>
              </li>
              <li>
                <font-awesome-icon icon="coffee" />
                <span>美酒</span>
              </li>
              <li>
                <font-awesome-icon icon="award" />
                <span>钻石</span>
              </li>
              <li>
                <font-awesome-icon icon="chess-queen" />
                <span>皇冠</span>
              </li>
              <li>
                <font-awesome-icon icon="truck-pickup" />
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
import { Header } from "mint-ui";
export default {
  data() {
    return {
      msg: "",
      display: true,
      shows: false
    };
  },
  methods: {
    showMenu() {
      console.log(111);
      this.shows = !this.shows;
      console.log(this.shows);
    }
  }
};
</script>

<style scoped lang="scss">
.mint-header {
  z-index: 300;
}

.details {
  position: relative;
  .shadow {
    // display:none;
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    opacity: 0.4;
  }
  .support {
    li:nth-child(1) {
      svg {
        color: #cc3333;
      }
    }
    li:nth-child(2) {
      svg {
        color: #bb8c44;
      }
    }
    li:nth-child(3) {
      svg {
        color: #2bd5b3;
      }
    }
    li:nth-child(4) {
      svg {
        color: #e6e61a;
      }
    }
    li:nth-child(5) {
      svg {
        color: #91d52b;
      }
    }
    li:nth-child(6) {
      svg {
        color: #44bbbb;
      }
    }
    li:nth-child(7) {
      svg {
        color: #6f2bd5;
      }
    }
  }
  .menu {
    // display:none;
    background-color: #fff;
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 200;
    width: 100%;

    ul {
      border-top: 3px solid #999;
      overflow: hidden;
      li {
        margin: 20px 0;
        float: left;
        width: 25%;
        text-align: center;
        line-height: 30px;
        span {
          display: block;
          text-align: center;
        }
      }
    }
  }
}
.book_mod {
  padding-bottom: 10px;
  background: #fff;
  position: relative;
  width: 100%;
  height: 120px;
  z-index: 0;
  .cover {
    position: absolute;
    height: 120px;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
  }
  .shadow {
    background: #000;
    opacity: 0.8;
    width: 100%;
    height: 120px;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
  }
  .dl_a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
  }
  .detail_table {
    padding: 20px 10px 0 20px;
    border: none;
    overflow: hidden;
    dt {
      width: 80px;
      height: 112px;
      padding-right: 12px;
      position: relative;
      float: left;
      span {
        border-radius: 15px 0 0 0;
        display: block;
        color: #fff !important;
        text-align: center;
        right: 12px;
        bottom: 0;
        position: absolute;
        width: 50px;
        letter-spacing: 1px;
        padding-left: 2px;
        height: 18px;
        line-height: 18px;
        font-size: 10px;
      }
    }
  }
  .detail_table dd {
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
    box-flex: 1;
    color: #999;
    word-wrap: break-word;
    font-size: 12px;
    h1 {
      padding-bottom: 5px;
      color: #000;
      font-size: 16px;
    }
    p span {
      display: block;
      line-height: 20px;
    }
    p span.cc {
      color: #ccc;
      padding-top: 3px;
    }
    p b {
      display: block;
      position: absolute;
      bottom: 20px;
      right: 0;
      font-weight: normal;
      i {
        font-style: normal;
        display: inline-block;
        margin-right: 6px;
        border-radius: 10px;
        color: #fff;
        padding: 0 5px;
        line-height: 20px;
        text-align: center;
        font-size: 10px;
      }
      .xuanhuan {
        background: #72a0ff !important;
      }
      .dushi {
        background: #6fd2cf !important;
      }
    }
  }
}

.details {
  .read_txt {
    text-align: center;
    font-size: 14px;
    margin: 10px 0;
    span {
      display: inline-block;
      border: 1px solid #fd6974;
      color: #fd6974;
      width: 100px;
      height: 35px;
      line-height: 35px;
      text-align: center;
    }
    span.readnow {
      background: #fd6974;
      color: #fff;
    }
    .read_txt_dels {
      margin: 10px 0;
      color: #666;
      line-height: 20px;
      height: 55px;
      text-indent: 2em;
    }
  }
  .del_btm {
    background-color: #eee;
  }
  .del-list {
    padding: 10px 0;
    ul > li {
      background: #fff;
      margin-bottom: 10px;
      .del_txt_title {
        padding-left: 10px;
        font-size: 16px;
        color: #333;
        padding-left: 0;
        height: 40px;
        line-height: 40px;
      }
      span {
        color: #999;
        font-size: 12px;
        padding-left: 5px;
      }
      .title_time {
        float: right;
        height: 40px;
        line-height: 40px;
      }
      h3 {
        border-bottom: 1px solid #999;
        span:first-child {
          padding-left: 10px;
        }
        span:last-child {
          float: right;
          height: 40px;
          line-height: 40px;
          padding-right: 10px;
        }
      }
    }
    ul > li.del_one {
      border-top: 1px solid #666;
      padding: 0 10px;
    }
    ul .del_two ul {
      overflow: hidden;
      li {
        margin: 10px 0;
        float: left;
        width: 25%;
        text-align: center;
        line-height: 20px;
        span {
          display: block;
          text-align: center;
        }
      }
    }
    ul .del_three {
      li {
        overflow: hidden;
        margin: 30px 0;
        .customer-img {
          width: 50px;
          float: left;
          padding: 0 10px 10px;
          height: 110px;
          overflow: hidden;
          img {
            width: 30px;
            height: 30px;
            border-radius: 20px;
          }
        }
        .customer-comments {
          overflow: hidden;
          margin-right: 10px;
          padding-bottom: 30px;
          border-bottom: 1px solid #ddd;
          .cus-del {
            float: left;
            p {
              font-size: 14px;
              color: #333;
              line-height: 22px;
              margin-bottom: 8px;
              position: relative;
              white-space: nowrap;
              border-bottom: none;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .con_num {
            float: right;
          }
        }
      }
      a {
        display: block;
        text-align: center;
        border-top: solid 1px #ccc;
        height: 32px;
        line-height: 32px;
      }
    }
    ul .same-book {
      .s1 {
        float: none;
      }
      ul {
        overflow: hidden;
        li {
          float: left;
          margin: 10px 12px;
        }
      }
    }
  }
  .bot_ecode {
    padding: 30px 0;
    text-align: center;
    width: 100%;
    .bot_ecode .ecot_t1 {
      margin-bottom: 15px;
      font-size: 16px;
      color: #333;
    }
    img {
      width: 110px;
      height: 110px;
      margin: 0 auto;
      text-align: center;
      border: 1px solid #ddd;
      margin: 7px;
      clear: both;
    }
    .ecot_t2 {
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>