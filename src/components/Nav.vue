<template>
    <div class="nav-bar">
        <ul>
            <li class="item-li">
                <router-link to="/" class="item" tag="a">首页</router-link>
            </li>
            <li class="item-li">
                <router-link to="/1" class="item" tag="a">消息</router-link>
            </li>
            <li class="item-li">
                <router-link to="/2" class="item" tag="a">我的</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl'
.nav-bar
    position fixed
    bottom 0
    left 0
    height 1rem
    background $bgNav
    width 100%
    .item-li
        width 33.33%
        float left
        text-align center
        .item
            color #ffffff
            font-size 0.28rem
            width 100%
            line-height 1rem
            display block
        .active
            color $bgColor
</style>
