<!--
 * @Author: YOLO-1221 xue864226163@gmail.com
 * @Date: 2022-11-02 17:28:08
 * @LastEditors: YOLO-1221 xue864226163@gmail.com
 * @LastEditTime: 2023-11-02 19:30:45
 * @FilePath: /my-study--uni/src/packageComp/Carousel/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="carousel"
    @mouseenter.prevent="isMouseEnter = true"
    @mouseleave.prevent="isMouseEnter = false"
  >
    <div class="carousel-item" v-for="(item, index) in content" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        "1内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
        "2内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
        "3内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
        "4内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
        "5内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
        "6内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
        "7内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
        "8内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
        "1内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
      ],

      wrapperHeight: 200,
      itemHeight: 100,

      isMouseEnter: false,
    };
  },
  watch: {
    isMouseEnter(v) {
      console.log(v);
    },
  },
  mounted() {
    // setInterval(() => {
    //   this.setScroll();
    // }, 50);
  },

  methods: {
    setScroll() {
      let dom = document.getElementsByClassName("carousel");
      console.log("dom[0].scrollTop", dom[0].scrollTop, dom);

      if (dom[0].scrollTop < 600) {
        dom[0].scrollTop += 10;
      } else {
        dom[0].scrollTop = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100vw;
  height: 200px;

  overflow: auto;
  // scroll-behavior: smooth;
  .carousel-item {
    width: 100%;
    height: 100px;
  }
}
</style>
