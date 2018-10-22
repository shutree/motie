<template>
  <div class="Quality">
    <h4><span>完本精品</span></h4>
    <ul>
      <li class="li" :key="index" v-for="(book, index) in books">
        <div class="left">
          <img :src='book.imgUrl' height="133" width="100" alt=""/>
        </div>
        <div class="right">
          <h4>{{book.name}}</h4>
          <p>{{book.author}}</p>
          <p>{{book.brief}}
            <mt-button class="liji" size="small">立即阅读</mt-button>
          </p>
          <p>
            <mt-button class="btn" type="danger" size="small">丧尸</mt-button>
            <mt-button class="btn" type="primary" size="small">爽文</mt-button>
          </p>
        </div>
      </li>
    </ul>
    <mt-button class="bt" size="large">进入完本频道></mt-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        books: [
          {
            name: '丧尸爆发之全家求生路',
            author: '神爱朵朵',
            brief: '十七岁那年，爷爷亲手砍掉了我的手指，从此，我便正式成为一名敛骨人',
            imgUrl: 'https://cdn.motieimg.com/book/0003/34295/5.jpg?'
          },
          {
            name: '特种狂兵',
            author: '剑锋同志',
            brief: '十七岁那年，爷爷亲手砍掉了我的手指，从此，我便正式成为一名敛骨人',
            imgUrl: 'https://cdn.motieimg.com/book/0008/85082/2.jpg?'
          },
          {
            name: '黄泉诡局',
            author: '小三胖子',
            brief: '十七岁那年，爷爷亲手砍掉了我的手指，从此，我便正式成为一名敛骨人',
            imgUrl: 'https://cdn.motieimg.com/book/0010/106115/1.jpg?'
          }
        ]
      }
    }
  };
</script>

<style lang="scss">
  .k {
    background-color: #fff;
    color: red;
  }

  h4 {
    height: 30px;
    span {
      border-bottom: 2px solid red;
    }
  }

  .shc {
    display: flex;
    li {
      flex: 1;
      img {
        width: 130px;
        height: 150px;
      }
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
    padding: 20px 20px 0 0;
    position: relative;
    p {
      font-size: 12px;
      line-height: 12px;
      padding: 5px 45px 0 0;
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
      .liji {
        position: absolute;
        top: 50px;
        right:20px;
        background-color: #fff;
        border: 1px solid red;
        color: red;
        height: 20px;
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

  .bt {
    color: red;
  }
</style>
