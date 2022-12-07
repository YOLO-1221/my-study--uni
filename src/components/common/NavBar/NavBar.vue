<template>
  <div @touchmove.stop="noop" class="nav-bar__wrapper">
    <!-- ifndef H5 -->
    <!-- 状态栏高度 -->
    <div :style="{ height: statusBarHeight + 'px' }"></div>
    <!-- endif -->

    <div class="nav-bar" :style="{ height: navBarHeight + 'px' }">
      <!-- 左边按钮 -->
      <div :style="[rightBtnStyle, leftBtnStyle]">
        <slot name="leftBtn">
          <i class="iconfont icon-arrow-rightx"></i>
        </slot>
      </div>
      <!-- 中间文字 -->
      <div class="nav-bar__title">
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
export default {
  props: {
    title: {
      type: String,
      default: '标题',
    },
  },
  computed: {
    leftBtnStyle() {
      return {
        paddingTop: this.menuButtonAttr.top - this.statusBarHeight + 'px',
        paddingBottom: this.menuButtonAttr.top - this.statusBarHeight + 'px',
        paddingLeft:
          this.sysInfo.screenWidth - this.menuButtonAttr.right + 'px',
        paddingRight:
          this.sysInfo.screenWidth - this.menuButtonAttr.right + 'px',
        boxSizing: 'border-box',
      }
    },
    rightBtnStyle() {
      return {
        width:
          this.menuButtonAttr.width +
          (this.screenWidth - this.menuButtonAttr.right) * 2 +
          'px',
        height: this.navBarHeight + 'px',
      }
    },
  },

  created() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
.nav-bar__wrapper {
  .nav-bar {
    display: flex;
    .nav-bar__title {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
