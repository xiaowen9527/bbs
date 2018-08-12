<template>
    <div class="theme-list">
    <van-tabs v-model="active" swipeable @click="handleClick">
        <van-tab v-for="item in theme_menu" :title="item.name" :key="item.tab">

                    <ul class="data-list">
                        <li class="list" v-for="(item,index) in list" :key="index">
                            <div class="list-top">
                                <img class="list-img" :src="item.author.avatar_url">
                                <h2 class="list-title">{{item.title}}</h2>
                                <div class="list-tab"  :class="{'top':item.top}">{{tagDeal(item.tab,item.top)}}</div>
                            </div>
                            <div class="list-option">
                                <div class="list-option-l">
                                    <span>{{item.author.loginname}}</span>
                                </div>
                                <div class="list-option-r">
                                    <span>回复：{{item.reply_count}}</span>
                                    <span>浏览：{{item.visit_count}}</span>
                                </div>
                            </div>
                        </li>
                        <p v-show='more' class="more" @click="handleClickMore">点击加载更多</p>
                        <p v-show='onMore' class="more">正在加载。。。</p>
                        <p v-show='noMore' class="more">暂无更多数据</p>
                    </ul>



        </van-tab>
    </van-tabs>
    </div>
</template>

<script>
export default {
  name: "ThemeList",
  data() {
    return {
      active: 0,
      index:0,
      tab: "all",
      page: 1,
      more: false,
      onMore:false,
      noMore:false,
      limit: 10,
      list: [],
      theme_menu: [
        { name: "全部", tab: "all" },
        { name: "精华", tab: "good" },
        { name: "分享", tab: "share" },
        { name: "问答", tab: "ask" },
        { name: "weex", tab: "weex" },
        { name: "招聘", tab: "job" }
      ]
    };
  },
  mounted() {
    this.onMore = true
    this.getDataList();
  },
  methods: {
    handleClick(index) {
      if (index != this.index) {
        this.page = 1;
        this.list = [];
        this.tab = this.theme_menu[index].tab;
        this.more = false
        this.onMore = true
        this.noMore = false
        this.getDataList();
        this.index = index
      }
    },
    getDataList() {
      this.$axios
        .get("/api/v1/topics", {
          params: {
            tab: this.tab,
            page: this.page,
            limit: this.limit
          }
        })
        .then(res => {
          if (res.status && res.data) {
            const data = res.data.data;
            this.list = this.list.concat(data);
            if(data.length<10){
                this.more = false
                this.noMore = true
            }else{
                this.more = true
            }
          }
          this.onMore = false
          console.log(this.more);
        });
    },
    tagDeal(data, top) {
      switch (data) {
        case "share":
          if (top) {
            return "置顶";
          } else {
            return "分享";
          }
          break;
        case "job":
          return "招聘";
          break;
        case "weex":
          return "weex";
          break;
        case "ask":
          return "问答";
          break;
      }
    },
    handleClickMore(){
        this.page++
        this.more = false
        this.onMore = true
        this.getDataList()      
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl'
.theme-list>>>.van-tabs__line
    background $bgColor
.theme-list>>>.van-tab--active
    color $bgColor
.theme-list>>>.van-tabs__wrap
    position fixed
    top 1rem
.theme-list
    padding 1rem 0
    .more
        text-align center
        line-height .8rem
        color #c6c6c6
    .list
        padding 0.2rem
        border-bottom 1px solid #ccc
        .list-top
            height 1rem
            .list-img
                width 0.8rem
                height 0.8rem
                margin-right 0.2rem
                float left
            .list-title
                width 60vw
                line-height 0.4rem
                height 0.8rem
                overflow hidden
                font-size 0.28rem
                float left
            .list-tab
                float right
                margin-top 0.2rem
                font-size 0.24rem
                padding 0.15rem
                border-radius 0.1rem
                color #ffffff
                background $bgColor
            .top
                background red
        .list-option
            width 100%
            color #666
            line-height 0.4rem
            height 0.4rem
            .list-option-l
                float left
            .list-option-r
                float right
</style>
