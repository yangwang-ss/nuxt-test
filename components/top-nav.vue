<template>
<div class="container">
  <header class="header-wrap flex-y-center flex-x-between">
      <div class="logo"></div>
    <nav>
      <ul class="flex-x-between ul-wrap">
        <li>
          <nuxt-link to="/guides">
            发现音乐
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/study-guide">我的音乐</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/API">朋友</nuxt-link>
        </li>
        <li><nuxt-link to="/cases">商城</nuxt-link></li>
        <li><nuxt-link to="/common-problem">音乐人</nuxt-link></li>
        <li><nuxt-link to="/blog">下载客户端</nuxt-link></li>
      </ul>
    </nav>
    <div class="search-box flex-y-center">
      <input class="input-search" placeholder="音乐/视频/电台/用户"/>
    </div>
    <div class="btn">创者中心</div>
  </header>
</div>
  
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
.nuxt-link-active{
  position: relative;
  color: #fff !important;
  background: #000;
  height: 70px;
}
.container{
  background-color: #242424;
  border-bottom: 1px solid #000;
}
.header-wrap {
  height: 70px;
    width: 1100px;
    min-width: 1100px;
    margin: 0 auto;
  display: flex;
  .logo {
    width: 176px;
    height: 69px;
    background-position: 0 0;
   background: url('http://s2.music.126.net/style/web2/img/frame/topbar.png?0ec1da8037a5d2865d288d1578b3abfa');
  }
  .ul-wrap {
    font-size: 16px;
    & > li {
      cursor: pointer;
      &>a{
        display: block;
        height: 70px;
        line-height: 70px;
        padding: 0 19px;
         color: #ccc;
         &:hover {
         color: #fff !important;
  background: #000;
  height: 70px;
      }
      }
      
    }
  }
  .search-box {
    width: 158px;
    height: 32px;
    border-radius: 20px;
    background-color: #edf2f7;
    .input-search {
      width: 115px;
      height: 32px;
      margin-left: 28px;
      border: none;
      background-color: #edf2f7;
    }
  }
  .btn{
    width: 90px;
    height: 32px;
    margin: 0 0 0 12px;
    box-sizing: border-box;
    padding-left: 16px;
    border: 1px solid #4F4F4F;
    background-position: 0 -140px;
    line-height: 33px;
    color: #ccc;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
    color: #fff;
    text-decoration: none;
    border: 1px solid #ccc;
    }
  }
}
</style>