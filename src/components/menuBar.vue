<template>
  <div class="menu-bar">
    <transition name="slide-up">
        <div class="menu-wrapper" v-show="ifTitleAndMenuShow">
            <div class="icon-wrapper">
                <div class="iconfont icon-zonghe icon"></div>
            </div>
            <div class="icon-wrapper">
                <div class="iconfont icon-jindutiao icon"></div>
            </div>
            <div class="icon-wrapper">
                <div class="iconfont icon-liangdu icon"></div>
            </div>
            <div class="icon-wrapper">
                <div class="iconfont icon-a icon" @click="showSetting">A</div>
            </div>
        </div>
    </transition>
    <transition name="slide-up">
        <div class="setting-wrapper" v-show="isSettingShow">
            <div class="setting-font-size"></div>
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
    return {
        isSettingShow:false
    };
  },
  created() {},
  methods: {
    showSetting(){
        this.isSettingShow=true
    },
    hideSetting(){
        this.isSettingShow=false
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../assets/styles/global";
.menu-bar {
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    display: flex;
    height: px2rem(48);
    background-color: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    .icon-wrapper {
      flex: 1;
      @include center;
      .icon-a {
        cursor: default;
        font-size: px2rem(16)
      }
      .icon-liangdu,.icon-jindutiao{
        font-size: px2rem(24)
      }
    }
  }
  .setting-wrapper{
      position: absolute;
      bottom: px2rem(48);
      left: 0;
      width:100%;
      height: px2rem(60);
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
      background: white;
      .setting-font-size{

      }
  }
}
</style>