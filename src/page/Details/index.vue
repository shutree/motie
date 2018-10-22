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
            <img :src="this.data.pic" alt="" width="80" height="112">
            <span class="other_l_col">连载中</span>
            </dt>
          <dd>
            <h1>{{this.data.title}}</h1>
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
      <p class="read_txt_dels">{{this.data.content}}</p>
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
import { Header } from "mint-ui";
import "./details.scss";

export default {
  data() {
    return {
      msg: "",
      data: []
    };
  },
  methods: {},
  created() {
    this.$axios
      .post(
        "/api/ajax/get/weixinSign?url=http%3A%2F%2Fm.motie.com%2Fwechat%2Fbook%2F114141&title=%E6%89%A7%E5%AE%AB&content=%E6%AF%8D%E4%BA%B2%E6%83%A8%E6%AD%BB%EF%BC%8C%E5%90%8D%E8%AA%89%E6%89%AB%E5%9C%B0%E3%80%82%E5%A5%B9%E8%BF%99%E4%B8%AA%E5%A0%82%E5%A0%82%E6%AD%A3%E6%AD%A3%E7%9A%84%E5%AB%A1%E5%8D%83%E9%87%91%EF%BC%8C%E4%B8%80%E5%A4%95%E9%97%B4%E6%B2%A6%E4%B8%BA%E2%80%9C%E9%87%8E%E7%A7%8D%E2%80%9D%EF%BC%8C%E5%87%A0%E4%B9%8E%E9%80%81%E5%91%BD%E3%80%82%E9%83%BD%E8%AF%B4%E7%91%9E%E6%98%8E%E7%8E%8B%E6%98%AF%E7%9A%87%E5%9F%8E%E9%87%8C%E4%BB%A4%E4%BA%BA%E9%97%BB%E9%A3%8E%E4%B8%A7%E8%83%86%E7%9A%84%E9%98%8E%E7%8E%8B%EF%BC%8C%E5%8F%AF%E5%AF%B9%E5%B2%91%E6%85%95%E5%87%9D%E6%9D%A5%E8%AF%B4%EF%BC%8C%E4%BB%96%E6%98%AF%E5%8A%A9%E5%A5%B9%E6%91%86%E8%84%B1%E6%9E%B7%E9%94%81%E5%A4%8D%E4%BB%87%E7%9A%84%E9%98%B6%E6%A2%AF%E3%80%82%E8%AF%95%E8%BF%87%E7%8C%AE%E5%AA%9A%E9%80%A2%E8%BF%8E%EF%BC%8C%E7%94%A8%E8%BF%87%E9%98%B4%E8%B0%8B%E8%AF%A1%E8%AE%A1%EF%BC%8C%E5%A5%B9%E5%8A%AA%E5%8A%9B%E5%9C%A8%E4%BB%96%E8%BA%AB%E8%BE%B9%E6%B4%BB%E4%B8%8B%E5%8E%BB%E3%80%82%E5%A5%B9%E5%87%AD%E5%80%9F%E8%81%AA%E6%85%A7%EF%BC%8C%E6%8A%BD%E4%B8%9D%E5%89%A5%E8%8C%A7%EF%BC%8C%E7%A6%BB%E7%9C%9F%E7%9B%B8%E8%B6%8A%E8%BF%91%E5%8F%8D%E8%80%8C%E8%B6%8A%E5%B0%8F%E5%BF%83%E7%BF%BC%E7%BF%BC%E3%80%82%E4%BB%8E%E7%8E%8B%E5%BA%9C%E5%88%B0%E6%B7%B1%E5%AE%AB%EF%BC%8C%E5%A5%B9%E6%9C%BA%E5%85%B3%E7%AE%97%E5%B0%BD%EF%BC%8C%E6%AE%8A%E4%B8%8D%E7%9F%A5%EF%BC%8C%E6%89%93%E4%BB%8E%E5%BC%80%E5%A7%8B%E5%A5%B9%E5%B0%B1%E6%98%AF%E4%BB%96%E8%BF%90%E7%AD%B9%E5%B8%B7%E5%B9%84%E7%9A%84%E4%B8%80%E6%AD%A5%E6%A3%8B%E3%80%82%E5%85%A5%E5%BA%9C%E5%89%8D%EF%BC%8C%E4%BB%96%E7%BB%99%E5%A5%B9%E6%AF%92%E8%8D%AF%E5%BD%93%E5%81%9A%E8%81%98%E7%A4%BC%E3%80%82%E6%98%AF%E5%A4%9A%E4%B8%80%E4%BD%8D%E7%8E%8B%E5%A6%83%E8%BF%98%E6%98%AF%E5%A4%9A%E4%B8%80%E5%9D%97%E7%A5%9E%E4%B8%BB%E7%89%8C%EF%BC%8C%E4%BB%96%E4%B8%8D%E5%9C%A8%E6%84%8F%E3%80%82%E5%85%A5%E5%AE%AB%E5%90%8E%EF%BC%8C%E4%BB%96%E5%86%8C%E5%A5%B9%E4%B8%BA%E5%90%8E%E5%8D%B4%E4%B8%8D%E4%B8%93%E4%B8%80%E3%80%82%E5%A5%B9%E8%BD%BB%E8%BD%BB%E4%B8%80%E7%AC%91%E4%BA%91%E6%B7%A1%E9%A3%8E%E8%BD%BB%EF%BC%8C%E5%8F%AA%E6%9C%89%E6%88%91%E6%89%8D%E8%83%BD%E5%8A%A9%E4%BD%A0%E5%BD%93%E4%B8%AA%E5%A5%BD%E7%9A%87%E5%B8%9D%EF%BC%81&pic=https://cdn.motieimg.com/book/0011/114141/1.jpg?x-oss-process=image/resize,m_lfit,h_560,w_400"
      )
      .then(res => {
        this.data = res.data;
        console.log(this.data);
      });
  }
};
</script>
<style lang="scss">
</style>