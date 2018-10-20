<template>
		<div class="details">
		<mt-header class="mtheader" title="分类">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right">
			</mt-button>
		</mt-header>
		<div class="btns">
			分类
			<mt-button type="danger" size="normal">全部</mt-button>
			<mt-button size="normal">都市</mt-button>
			<mt-button size="normal">悬疑</mt-button>
			<mt-button size="normal">科幻</mt-button>
			<mt-button class="btn5" size="normal">奇幻</mt-button>
			<mt-button size="normal">言情</mt-button>
			<mt-button size="normal">历史</mt-button>
			<mt-button size="normal">玄幻</mt-button>

		</div>
		<div class="btns">
			状态
			<mt-button type="danger" size="normal">全部</mt-button>
			<mt-button size="normal">连载</mt-button>
			<mt-button size="normal">完结</mt-button>
		</div>
		<div class="btns">
			价格
			<mt-button type="danger" size="normal">全部</mt-button>
			<mt-button size="normal">免费</mt-button>
			<mt-button size="normal">付费</mt-button>
		</div>
		<div class="div4 btns">
			<mt-button class="comit" size="normal" type="danger">确定</mt-button>
		</div>
		<ul>
			<li class="li" :key="index" v-for="(card, index) in 10">
				<div class="left">
					<img src="./acc.jpg" height="133" width="100" alt="" />
				</div>
				<div class="right">
					<h4>娇妻如云</h4>
					<p>兰泽</p>
					<p>萌软小娘子和威武大夫君的故事。姚芸儿从没想过自己会嫁给一个屠夫，而且还比她年长十多岁</p>
					<p>

							<mt-button class="btn" type="danger" size="small">架空</mt-button>
							<mt-button class="btn" type="primary" size="small">种田</mt-button>
							<mt-button class="btn" size="small">甜宠</mt-button>
						
					</p>
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
.btns {
  margin-top: 5px;
  padding-left: 20px;
  button {
    margin: 0 0 5px 10px;
    height: 20px;
    font-size: 14px;
  }
  .btn5 {
    margin-left: 47px;
  }
}
.div4 {
  margin-left: 80px;
  .comit {
    padding: 0 20px;
    width: 150px;
  }
}
.li {
  overflow: hidden;
}
.left {
  float: left;
  height: 160px;
  width: 30%;
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
  width: 60%;
  padding-top: 20px;
  position: relative;
  p {
    font-size: 12px;
    line-height: 12px;
    padding-top: 5px;
    a {
      color: black;
      margin-left: 5px;
    }
    .btn {
      float: left;
      margin-left: 5px;
      width: 55px;
      height: 25px;
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