<template>
  <div>
    <nav class="nav-wrap">
      <div class="nav-wd">
        <ul class="nav-list flex-row flex-y-center">
          <li class="list-item">
            <nuxt-link class="navLink" to="/guides/child">推荐</nuxt-link>
          </li>
          <li class="list-item">
            <nuxt-link class="navLink" to="/guides/child1">排行榜</nuxt-link>
          </li>
          <li class="list-item">
            <nuxt-link class="navLink" to="/guides/child2">歌单</nuxt-link>
          </li>
          <li class="list-item">
            <nuxt-link class="navLink" to="/guides/child3">推荐</nuxt-link>
          </li>
          <li class="list-item">
            <nuxt-link class="navLink" to="/guides/child4">歌手</nuxt-link>
          </li>
          <li class="list-item">
            <nuxt-link class="navLink" to="/guides/child5">新碟上架</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- <aside>
        <menu>
            <menuitem class="">
            <nuxt-link to="/guides/child">123</nuxt-link>
            </menuitem>
            <menuitem>22</menuitem>
            <menuitem>33</menuitem>
        </menu>
    </aside> -->
    <section>
      <nuxt-child></nuxt-child>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$router.push("/guides/child");
  },
};
</script>
<style lang='scss' scoped>
.nuxt-link-active{
 background: #9B0909;
}
.nav-wrap {
  height: 35px;
  box-sizing: border-box;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;
  .nav-wd {
    width: 1100px;
    height: 35px;
    margin: 0 auto;
  }
  .nav-list {
    padding-left: 215px;
    
    height: 34px;
    color: #fff;
    .list-item {
         min-width: 85px;
    text-align: center;
      padding: 0 13px;
      .navLink {
        color: #fff;
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        border-radius: 20px;
        line-height: 21px;
        &:hover {
          background: #9B0909;
        }
      }
    }
  }
}
</style>