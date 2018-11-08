<template>
  <div class="title-bar">
    <transition name="slide-down">
        <div class="title-wrapper" v-show="ifTitleAndMenuShow">
            <div class="left">
                <span class="iconfont icon-xitongfanhui icon"></span>
            </div>
            <div class="right">
                <div class="icon-wrapper">
                    <span class="iconfont icon-shoucang icon"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="iconfont icon-geren icon"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="iconfont icon-xitongcaidan icon"></span>
                </div>
            </div>
        </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    ifTitleAndMenuShow: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang='scss'>
@import "../assets/styles/global";
.title-bar {
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    display: flex;
    height: px2rem(48);
    background-color: white;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
    .left {
      @include center;
      flex: 0 0 px2rem(60);
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(40);
        @include center;
      }
    }
  }
}
</style>