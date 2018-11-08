<template>
  <div class="ebook">
      <title-bar :ifTitleAndMenuShow='ifTitleAndMenuShow'></title-bar>
      <div class="read-wrapper">
          <div id="read"></div>
          <div class="mask">
              <div class="left" @click="pagePrev"></div>
              <div class="center" @click="toggleTitleAndMenu"></div>
              <div class="right" @click="pageNext"></div>
          </div>
      </div>
      <menu-bar :ifTitleAndMenuShow='ifTitleAndMenuShow' ref="menuBar"></menu-bar>
  </div>
</template>

<script>
import Epub from "epubjs";
import titleBar from "@/components/titleBar";
import menuBar from "@/components/menuBar";
const DOWNLOAD_URL = "/static/1365.epub";
global.epub = Epub;
export default {
  name: "index",
  components: {
    titleBar,
    menuBar
  },
  data() {
    return {
      ifTitleAndMenuShow: true
    };
  },
  created() {
    this.showEpub();
  },
  methods: {
    toggleTitleAndMenu() {
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow;
      this.$refs.menuBar.hideSetting()
    },
    showEpub() {
      //生成电子书
      this.book = new Epub(DOWNLOAD_URL);
      //生成Rendition对象
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight
      });
      //通过Rendition.display渲染电子书
      this.rendition.display();
    },
    pagePrev() {
      this.rendition.prev();
    },
    pageNext() {
      this.rendition.next();
    }
  }
};
</script>

<style scoped lang='scss'>
@import "assets/styles/global";
.ebook {
  position: relative;
  .read-wrapper {
    .mask {
      position: absolute;
      display: flex;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      .left {
        flex: 0 0 px2rem(100);
        cursor: pointer;
      }
      .center {
        flex: 1;
      }
      .right {
        flex: 0 0 px2rem(100);
        cursor: pointer;
      }
    }
  }
}
</style>