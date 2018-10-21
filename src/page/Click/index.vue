<template>
    <div class="login" >
        <mt-header title="点击榜">
          <router-link to="/Ranking" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>
        <ul>
                <li class="li"  :key="index" v-for="(card, index) in 10">
                <div class="left">
                    <img src="./dianji.jpg" height="133" width="100" alt="" />
                </div>
                <div class="right">
                <h4>画圣</h4>
                <p>书友夜游神</p>
                <p>命里有时终须有，命里无时要强求！一杆狼毫，画尽天下万物；一世泼墨，叩问大道人心！上苍无道，持笔而起，丹青横空，问心无愧。问道之途，一路荆棘，一笔破开，唯我成圣！</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  }
};
</script>
<style scoped lang="scss">
.li {
  overflow: hidden;
}
.left {
  float: left;
  height: 150px;
  width:40%;
  position: relative;
  img {
    height: 100px;
    width: 100px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
.right {
  float: left;
  height: 150px;
  width: 48%;
  padding-top: 20px;
  position: relative;
  h4{
    height:16px;
    width:100%;
  }
  p {
    font-size: 12px;
    line-height: 12px;
    padding-top: 5px;
    width:100%;
    a {
      color: black;
      margin-left: 5px;
    }
  }
  span {
    position: absolute;
    top: 50%;
    right: 0;
    margin-right: 20px;
    font-size: 20px;
    color: #ccc;
  }
}
</style>