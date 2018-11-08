<template>
  <div class="menu-bar">
    <transition name="slide-up">
        <div class="menu-wrapper" :class="{'hiden-box-shadow':!ifTitleAndMenuShow || isSettingShow}" v-show="ifTitleAndMenuShow">
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
            <div class="setting-font-size">
              <div class="preview" :style="{fontSize:fontSizeList[0].fontSize+'px'}">A</div>
              <div class="select">
                <div class="select-wrapper" v-for="(item,index) in fontSizeList" :key="index" @click="setFontSize(item.fontSize)">
                  <div class="line"></div>
                  <div class="point-wrapper">
                    <div class="point" v-show="defaultFontSize==item.fontSize">
                      <div class="point-inner"></div>
                    </div>
                  </div>
                  <div class="line"></div>
                </div>
              </div>
              <div class="preview" :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize+'px'}">A</div>
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
    },
    fontSizeList: Array,
    defaultFontSize:Number
  },
  data() {
    return {
      isSettingShow: false
    };
  },
  created() {},
  methods: {
    setFontSize(fontsize){
      this.$emit('setFontSize',fontsize)
    },
    showSetting() {
      this.isSettingShow = true;
    },
    hideSetting() {
      this.isSettingShow = false;
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
        font-size: px2rem(16);
      }
      .icon-liangdu,
      .icon-jindutiao {
        font-size: px2rem(24);
      }
    }
    &.hiden-box-shadow {
      box-shadow: none;
    }
  }
  .setting-wrapper {
    position: absolute;
    z-index: 101;
    bottom: px2rem(48);
    left: 0;
    width: 100%;
    height: px2rem(60);
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    background: white;
    .setting-font-size {
      display: flex;
      height: 100%;
      .preview {
        flex: 0 0 px2rem(40);
        @include center;
      }
      .select {
        flex: 1;
        display: flex;
        .select-wrapper {
          display: flex;
          flex: 1;
          align-items: center;
          &:first-child {
            .line {
              &:first-child {
                border-top: none;
              }
            }
          }
          &:last-child {
            .line {
              &:last-child {
                border-top: none;
              }
            }
          }
          .line {
            flex: 1;
            height: 0;
            border-top: px2rem(1) solid #ccc;
          }
          .point-wrapper {
            flex: 0 0 0;
            height: px2rem(7);
            border-left: px2rem(1) solid #ccc;
            position: relative;
            .point {
              position: absolute;
              background-color: white;
              border: #ccc px2rem(1) solid;
              box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
              border-radius: 50%;
              top: px2rem(-6);
              left: px2rem(-10);
              width: px2rem(16);
              height: px2rem(16);
              @include center;
              .point-inner {
                width: px2rem(3);
                height: px2rem(3);
                border-radius: 50%;
                background-color: black;
              }
            }
          }
        }
      }
    }
  }
}
</style>