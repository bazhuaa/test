<template>
  <div class="roll">
    <div class="page-wrapper">
      <div class="item-wrapper" @click="rollPage" ref="itemBox">
        <div class="item" v-for="i in 10" :key="i" ref="item">
          <img class="img-box" src="./assets/images/mainpic.jpg" alt="">
          <div class="text">
            <span class="title">基于LNMP的测试工具环境部署</span>
            <span class="brief">初级|961人在学</span>
            <!-- <span class="price">免费</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      currentPage:0,
      itemNum:0
    };
  },
  watch:{
    currentPage(val){
      console.log(this.itemWidth)
       this.itemBox.style.marginLeft = - (this.items[0].offsetWidth+20)*val + 'px'
    }
  },
  mounted() {
    this.$nextTick(() => { 
      this.items = this.$refs['item']
      this.itemBox = this.$refs['itemBox']
      this.itemNum = this.items.length
      this.itemWidth = this.items[0].offsetWidth
      this.pageNum = this.itemNum / 4
      console.log(this.pageNum);
    })
  },
  methods: {
    rollPage(){
      // if()
     
      this.currentPage ++;

    }
  }
};
</script>

<style scoped lang='scss'>
.roll {
  .page-wrapper {
    margin: 30px;
    // padding: 10px 0;
    overflow: scroll;
    background-color: #e0e0e0;
    .item-wrapper {
      height: 500px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      transition: all 2s;
      .item {
        display: flex;
        margin-bottom: 40px;
        width: 310px;
        padding-right: 20px;
        .img-box {
          flex: 0 0 1.88rem;
          display: block;
          width: 2.4rem;
          height: 1.72rem;
          border-radius: 0.08rem;
          margin-right: 30px;
        }
        .text {
          flex: 1;
          span {
            display: block;
          }
          .title {
            font-size: 15px;
            color: #2b333b;
            line-height: 0.53333333rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            word-wrap: break-word;
          }
          .brief {
            font-size: 12px;
            color: #71777d;
            line-height: 0.37333333rem;
            margin-top: 0.21333333rem;
          }
          .price {
            font-size: 12px;
            line-height: 0.37333333rem;
            margin-top: 0.21333333rem;
            color: #2b333b;
          }
        }
      }
    }
  }
}
</style>