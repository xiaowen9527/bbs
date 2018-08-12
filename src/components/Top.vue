<template>
    <div class="top-header">
        {{this.title}}
    </div>
</template>

<script>
    export default {
        name:"TopBar",
        data() {
            return {
                title: 'Vue社区'
            }
        },
    }
</script>

<style lang="stylus" scoped>
@import '~styles/common.styl';
.top-header
    width 100%
    background $bgColor
    text-align center
    color #ffffff
    font-size .36rem
    line-height 1rem
    position fixed
    top 0
    z-index 999999
</style>
