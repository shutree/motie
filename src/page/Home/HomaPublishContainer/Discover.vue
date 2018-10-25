<template>
  <div class="Discover">
    <h4><span>发现好书</span></h4>
    <div class="sh">
      <li :key="index" v-for="(card, index) in 6">
        <img  src="https://cdn.motieimg.com/book/0011/111365/1.jpg?" />
        医品尖兵
      </li>
    </div>
    <div class="erwei">
    <h6>关注官方微信公众号【磨铁小说】，方便下次阅读</h6>
    <div class="erweima">
        <img src="https://cdn.motieimg.com/book/0011/111365/1.jpg?" />
        <p>--微信内可长按识别--</p>
    </div>
    </div>
    <div class="big">
        <ul  class="links">
            <li><a>首页</a></li>
            <li><a>充值</a></li>
            <li><a>客户端</a></li>
            <li><a class="a4">版权合作</a></li>
        </ul>
    </div>
    <div class="copy">@2018磨铁阅读</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
h4 {
  height: 30px;
  margin: 10px 5px 5px 5px;
  span {
    border-bottom: 2px solid red;
  }
}
.sh {
  width: 100%;
  overflow: hidden;
  li {
    width: 120px;
    height: 150px;
    margin: 0 0 25px 5px;
    float: left;
    img {
      width: 120px;
      height: 150px;
    }
  }
}
.erwei {
  height: 230px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
  h6 {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }
}
.Discover {
  position: relative;
}
.erweima {
  height: 180px;
  width: 150px;
  position: absolute;
  top: 450px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  img {
    height: 150px;
    width: 150px;
  }
  p {
    font-size: 14px;
    text-align: center;
    color: #ccc;
  }
}
.big {
  position: relative;
  height: 30px;
  .links {
    height: 20px;
    width: 300px;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    li {
      text-align: center;
      float: left;
      flex: 1;
      line-height: 20px;
      font-size: 12px;
      a {
        border-right: 1px solid #ccc;
        padding-right: 17px;
      }
      .a4 {
        border-right: 1px solid #fff;
      }
    }
  }
}
.copy {
  text-align: center;
  margin: 20px 0;
  font-size: 12px;
  color: #ccc;
}
</style>
