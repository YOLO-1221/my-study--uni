<template>
  <div>
    <ComNavBar title="分段器"></ComNavBar>
    <div class="wrapper">
      <div id="btnWrapper" :style="[btnWrapperStyle]">
        <div
          class="btn"
          :class="{ active: btnStatus === 'open' }"
          @click="btnClick('open')"
        >
          开灯
        </div>
        <div
          class="btn"
          :class="{ active: btnStatus === 'close' }"
          @click="btnClick('close')"
        >
          关灯
        </div>
        <div class="btn-active" :style="[btnActiveStyle]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnStatus: "open",

      btnWrapperStyle: {
        origin: "",
        transform: "",
      },
      btnActiveStyle: {
        left: "12rpx",
      },
    };
  },
  methods: {
    btnClick(btnStatus) {
      if (btnStatus === "open") {
        this.btnActiveStyle.left = "12rpx";

        this.btnWrapperStyle.transform = "rotateY(-8deg)";
        this.btnWrapperStyle.origin = "80% top";
      } else {
        this.btnActiveStyle.left = "202rpx";

        this.btnWrapperStyle.transform = "rotateY(8deg)";
        this.btnWrapperStyle.origin = "20% top";
      }

      setTimeout(() => {
        this.resetBtnWrapperStyle();
      }, 550);

      setTimeout(() => {
        this.btnStatus = btnStatus;
      }, 500);
    },

    resetBtnWrapperStyle() {
      this.btnWrapperStyle = {
        origin: "",
        transform: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  perspective: 5cm; // 添加透视
}

#btnWrapper {
  width: 380rpx;
  height: 80rpx;

  margin: 0 auto;
  margin-top: 10rpx;

  border-radius: 12rpx; // 圆角
  background-color: #e2e6eb; // 背景色
  box-shadow: -10rpx -10rpx 15rpx #f5f9fd, 10rpx 10rpx 15rpx #d8dbe5; // 阴影（阴影可以添加多条，别告诉我你不知道！！）

  position: relative;
  overflow: hidden; // 超出隐藏

  display: flex;
  align-items: center;
  justify-content: space-around;

  transform-origin: center; // 添加转换原点
  transition: transform 0.4s cubic-bezier(0, 0, 0.48, 1); // 添加过渡效果

  .btn {
    width: 166rpx;
    height: 56rpx;

    color: #aaa; // 默认文字颜色是灰色，随便选了个色号
    cursor: pointer; // 鼠标经过图标为小手

    display: flex;
    align-items: center;
    justify-content: center;

    transition: color 0.4s linear; // 添加文字颜色过渡效果
    animation: txtOutScale 0.6s linear; // 添加按钮未选中动画，注意时间
  }

  .active {
    color: #111; // 选中颜色
    transform: scale(1.1); // 修改选中状态原始缩放为1.1
    animation: txtEnterScale 0.4s linear; // 添加按钮选中动画，注意时间
  }

  /* 按钮选中缩放动画 */
  @keyframes txtEnterScale {
    0% {
      transform: scale(1);
    }

    80% {
      transform: scale(1.15);
    }

    100% {
      transform: scale(1.1);
    }
  }
  /* 按钮未选中缩放动画 */
  @keyframes txtOutScale {
    0% {
      transform: scale(1.1);
    }

    80% {
      transform: scale(0.95);
    }

    100% {
      transform: scale(1);
    }
  }

  .btn-active {
    position: absolute;
    left: var(--groove-left); // 要考虑到父盒子的内边距
    top: 12rpx; // 同上
    width: calc(50% - 16rpx - 8rpx);
    height: calc(100% - 24rpx);
    border-radius: 12rpx;
    box-shadow: inset 8rpx 8rpx 6rpx #d9dce6, inset -5rpx -5rpx 15rpx #f5f9fd,
      inset -5rpx -5rpx 15rpx #f5f9fd, inset 7rpx 7rpx 6rpx #d9dce6;

    transition: left 1s cubic-bezier(0.82, 0.12, 0.18, 0.88); // 添加过渡效果，贝塞尔曲线

    pointer-events: none;
  }
}

.rotateWrap {
  transform: rotateY(var(--rotate)); // 添加Y轴旋转
}
</style>
