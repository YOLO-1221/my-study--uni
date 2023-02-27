<template>
  <div
    @touchmove.stop="noop"
    class="nav-bar__wrapper"
    :style="{
      backgroundColor: curTheme.navBgColor,
    }"
  >
    <!-- ifndef H5 -->
    <!-- 状态栏高度 -->
    <div :style="{ height: statusBarHeight + 'px' }"></div>
    <!-- endif -->

    <div class="nav-bar" :style="{ height: navBarHeight + 'px' }">
      <!-- 左边按钮 -->
      <div :style="[rightBtnStyle, leftBtnStyle]">
        <slot name="leftBtn">
          <div
            v-if="pageStack.length >= 2"
            class="nav-bar__btns"
            :style="{
              borderRadius: `${(this.menuButtonAttr.height / 2).toFixed()}px ${(
                this.menuButtonAttr.height / 2
              ).toFixed()}px`,
              color: curTheme.navTxtStyle,
            }"
          >
            <i class="iconfont icon-arrow-left" @click="navBack"></i>
            <i
              class="iconfont icon-upright"
              style="margin-left: 5px; margin-right: 5px"
            ></i>
            <i
              class="iconfont icon-home"
              @click="navTo('/pages/style/index')"
            ></i>
          </div>
        </slot>
      </div>
      <!-- 中间文字 -->
      <div
        class="nav-bar__title"
        :style="{
          color: curTheme.navTxtStyle,
        }"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <!-- 右边胶囊 -->
      <div :style="[rightBtnStyle]"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },

  data() {
    return {
      pageStack: [],
    };
  },

  computed: {
    ...mapGetters(["curTheme"]),

    leftBtnStyle() {
      return {
        paddingTop: this.menuButtonAttr.top - this.statusBarHeight + "px",
        paddingBottom: this.menuButtonAttr.top - this.statusBarHeight + "px",
        paddingLeft:
          this.sysInfo.screenWidth - this.menuButtonAttr.right + "px",
        paddingRight:
          this.sysInfo.screenWidth - this.menuButtonAttr.right + "px",
        boxSizing: "border-box",
      };
    },
    rightBtnStyle() {
      return {
        width:
          this.menuButtonAttr.width +
          (this.screenWidth - this.menuButtonAttr.right) * 2 +
          "px",
        height: this.navBarHeight + "px",
      };
    },
  },

  created() {
    this.getStack();
  },

  methods: {
    getStack() {
      this.pageStack = getCurrentPages();
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar__wrapper {
  .nav-bar {
    display: flex;

    .nav-bar__btns {
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #e8e8e8;
      box-sizing: border-box;
    }
    .nav-bar__title {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
