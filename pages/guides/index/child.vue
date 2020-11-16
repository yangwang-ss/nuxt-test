<template>
  <div class="">
    <div class="carousewrap">
      <div class="carousel-insider">
        <Carousel autoplay v-model="value1" loop class="carouselbox">
          <CarouselItem v-for="(item, index) in banimgs" :key="index">
            <div class="demo-carousel">
              <img :src="item" alt="" class="banimg" />
            </div>
          </CarouselItem>
        </Carousel>
        <div class="rightdownload">
          <span class="shadow"></span>
          <span class="shadowr"></span>
        </div>
      </div>
    </div>
    <!-- {{result}} -->
    <section class="flex-row content-wd">
      <div class="left-wrap">
        <nav class="flex-x-between nav-wrap">
          <div class="flex-row">
            <div class="big-size first">热门推荐</div>
            <div class="nav-link">华语</div>
            <div class="nav-link">流行</div>
            <div class="nav-link">摇滚</div>
            <div class="nav-link">民谣</div>
            <div class="nav-link">电子</div>
          </div>
          <div>更多</div>
        </nav>
        <ul class="card-list flex-x-between">
          <li>
            <div class="img-cover">
              <img src="http://p2.music.126.net/xTCLqndLmGzab5g8NPs1LQ==/109951165460660364.jpg?param=140y140" alt="" class="img">
              <div class="black-bar"></div>
            </div>
            <p class="bottom-text">布鲁斯|趁阳光正好开车去旅行</p>
          </li>
          <li>
             <div class="img-cover">
              <img src="http://p2.music.126.net/nKjlWu5DHes8Ek0qafzjOQ==/109951165106188472.jpg?param=140y140" alt="" class="img">
              <div class="black-bar"></div>
            </div>
            <p class="bottom-text">国内独立｜不清醒的白日梦</p>
          </li>
          <li>
             <div class="img-cover">
              <img src="http://p2.music.126.net/DmDyZumGVjTVUNipcO98gQ==/109951165170421159.jpg?param=140y140" alt="" class="img">
              <div class="black-bar"></div>
            </div>
            <p class="bottom-text">熬不完的夜和听不完的网易云·</p>
          </li>
          <li>
             <div class="img-cover">
              <img src="http://p2.music.126.net/I_SYMxuMZFMbPSQPRZXesA==/109951165461787199.jpg?param=140y140" alt="" class="img">
              <div class="black-bar"></div>
            </div>
            <p class="bottom-text">歌手加制作人？一个奇怪的组合</p>
          </li>
           <li>
             <div class="img-cover">
              <img src="http://p2.music.126.net/1uwhOK1xgEsVXywVcySFAQ==/109951165420393839.jpg?param=140y140" alt="" class="img">
              <div class="black-bar"></div>
            </div>
            <p class="bottom-text">[聚精会神] 学习工作必备的背景音乐</p>
          </li>
           <li>
             <div class="img-cover">
              <img src="http://p2.music.126.net/8cfRahYjoSlsABQY76IEbA==/109951165422490662.jpg?param=140y140" alt="" class="img">
              <div class="black-bar"></div>
            </div>
            <p class="bottom-text"> 我的女朋友是不是假名媛？</p>
          </li>
           <li>
             <div class="img-cover">
              <img src="http://p2.music.126.net/M2mxcI3F6fu3XkBJsiHHKQ==/109951164991116806.jpg?param=140y140" alt="" class="img">
              <div class="black-bar"></div>
            </div>
            <p class="bottom-text">爱上你，需要踏遍山河的勇气</p>
          </li>
           <li>
             <div class="img-cover">
              <img src="http://p2.music.126.net/BqHM3hlDz3uZvCDs9ZlCPQ==/109951164082360408.jpg?param=140y140" alt="" class="img">
              <div class="black-bar"></div>
            </div>
            <p class="bottom-text"> 《云与海》王巨星 （阿yueyue）</p>
          </li>
        </ul>
        
      </div>
      <div class="right-wrap">
        <div class="login-box">
          <p class="content">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <div class="login-btn">用户登录</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
        let data = {
            type:'song',
            id:'1303019276',
            br:'128000'
        }
        
 let res = await $axios.get(`https://api.imjad.cn/cloudmusic/`,{
      params:data
  }) 

  return {result:res.data.data}
 },
  components: {},
  data() {
    return {
      value1: 0,
      banimgs: [
        "http://p1.music.126.net/iMyuFc1CrrK4s-ZcdHWsrQ==/109951165463973503.jpg?imageView&quality=89",
        "http://p1.music.126.net/njTBRAP6gEihLNz4g6eTlA==/109951165465108146.jpg?imageView&quality=89",
        "http://p1.music.126.net/3E1RMmo9v_9Slrzk-Ml6xA==/109951165464003384.jpg?imageView&quality=89",
        "http://p1.music.126.net/JNfHCPcqSVKncs_9rGWIdg==/109951165463963936.jpg?imageView&quality=89",
        "http://p1.music.126.net/NKdRi1g76hQhU39RYiH1fg==/109951165464012797.jpg?imageView&quality=89",
        "http://p1.music.126.net/e8dcov4M06dna586kk-SPw==/109951165464030310.jpg?imageView&quality=89",
        "http://p1.music.126.net/uu4lMH6e3Hlc1PhLi6oNPA==/109951165463964091.jpg?imageView&quality=89",
      ],
    };
  },
  methods: {
  
  },
  created() {
      // console.log("this.result",this.result);
      // this.fetchData()
  },
};
</script>
<style lang='scss' scoped>
.carousewrap {
  height: 285px;
  width: 100%;
  background-size: 6000px;
  background-position: center center;
  background: url("http://p1.music.126.net/3E1RMmo9v_9Slrzk-Ml6xA==/109951165464003384.jpg?imageView&blur=40x20");
}
.carousel-insider {
  position: relative;
  width: 982px;
  height: 285px;
  margin: 0 auto;
  .carouselbox {
    .banimg {
      width: 730px;
      height: 285px;
    }
  }
  .rightdownload {
    position: absolute;
    right: 0;
    top: 0;
    width: 254px;
    height: 285px;
    z-index: 200;
    background: url("http://s2.music.126.net/style/web2/img/index/download.png?96594927964b661ff457d63376527ffc");
    .shadow {
      display: block;
      position: absolute;
      top: 0;
      left: -20px;
      width: 20px;
      height: 285px;
      background-position: -1px 0;
      background: url("http://s2.music.126.net/style/web2/img/index/banner.png?0235af1c954accd7feed54560d900f9d");
    }
    .shadowr {
      display: block;
      position: absolute;
      top: 0;
      left: auto;
      right: -2px;
      background-position: -20px 0;
      width: 20px;
      height: 285px;
      background-position: -1px 0;
      background: url("http://s2.music.126.net/style/web2/img/index/banner.png?0235af1c954accd7feed54560d900f9d");
    }
  }
}
.content-wd {
  width: 980px;
  margin: 0 auto;
  .left-wrap {
    width: 729px;
    padding: 20px 20px 40px;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    .nav-wrap{
       height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
    }
    .big-size{
        font-size: 20px;
        line-height: 28px;
        color: #333;
    }
    .first{
        margin-left: 10px;
    }
    .nav-link{
        position: relative;
        margin:5px  20px 0 20px;
        height: 16px;
        cursor: pointer;
        &::before{
            position: absolute;
            content: "";
            display: block;
            height: 12px;
    right: -15px;
    top: 2px;
            width: 1px;
            background: #ccc;
        }

    }
    .card-list{
      margin: 20px 0 0 0;
      flex-wrap: wrap;
      li{
        width: 140px;
    height: 204px;
    
    .img-cover{
      position: relative;
      width: 140px;
      height: 140px;
      .black-bar{
        position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
   background: rgba($color: #000000, $alpha: 0.6);
    color: #ccc;
      }
      .img{
        width: 100%;
        height: 100%;
      }
    }
    .bottom-text{
      margin: 8px 0 3px;
    font-size: 14px;
    }
      }
    }
  }
  .right-wrap{
    width: 250px;
    border-right: 1px solid #d3d3d3;
    .login-box{
      background: #d3d3d3;
      height: 126px;
      .content{
        width: 205px;
        line-height: 22px;
        padding: 16px 0;
        margin: 0 auto;
      }
      .login-btn{
        display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    background-color: tomato;
    border-radius:5px;
    text-shadow: 0 1px 0 #8a060b;
    margin: 0 auto;
    margin-bottom: 20px;
      }
    }
  }
}

/deep/.ivu-carousel-arrow.left {
  left: -64px;
}
/deep/.ivu-carousel-arrow.right {
  right: -64px;
}
</style>
