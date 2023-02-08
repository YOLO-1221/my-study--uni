// 屏幕边界
let sysInfo = uni.getSystemInfoSync()
/**
 * safeAreaInsets 安全区域（整屏除去状态栏、底部安全距离），单位：像素
    - left	Number	安全区域左侧插入位置
    - right	Number	安全区域右侧插入位置
    - top	Number	安全区顶部插入位置，数值等于statusBarHeight高度
    - bottom	Number	安全区域底部插入位置，数值等于底部
 * statusBarHeight 状态栏高度
 * screenWidth 屏幕宽度
 * screenHeight 整屏高度
 */
let { statusBarHeight, safeAreaInsets, screenWidth, screenHeight, theme } = sysInfo
// 底部安全距离
let safeBottom = safeAreaInsets ? safeAreaInsets.bottom : 0
// 主内容高度，整屏除去状态栏高度、底部安全距离
let mainHeight = (screenHeight - statusBarHeight - safeBottom) || 667

// 获取胶囊信息
let menuButtonInfo = uni.getMenuButtonBoundingClientRect() || {}
let menuButtonAttr = {}
menuButtonAttr.width = menuButtonInfo.width || 87
menuButtonAttr.height = menuButtonInfo.height || 32
menuButtonAttr.top = menuButtonInfo.top || 8 + statusBarHeight
menuButtonAttr.right = menuButtonInfo.right || 368
menuButtonAttr.left = menuButtonInfo.left || 281

// 设计固定的自定义导航栏高度
let navBarHeight = menuButtonInfo.height + (menuButtonInfo.top - statusBarHeight) * 2 || 44

const px2rpx = (px, direct = false, useUnit = true) => {
  let r = direct ? parseFloat(px) : (750 * parseFloat(px)) / screenWidth
  return useUnit ? r + 'rpx' : r
}
const rpx2px = (rpx, direct = false, useUnit = true) => {
  let r = direct ? parseFloat(rpx) : (parseFloat(rpx) * screenWidth) / 750
  return useUnit ? r + 'px' : r
}

export const TAB_PATHS = []

export default {
  data() {
    return {
      sysInfo,
      statusBarHeight,
      safeAreaInsets,
      screenWidth,
      screenHeight,
      theme,
      safeBottom,
      mainHeight,
      menuButtonAttr,
      navBarHeight,
      TAB_PATHS
    }
  },
  computed: {},
  methods: {
    noop() { },
    /**
     * @description: 后退 
     * @param {*} delta | 后退几层
     * @return {*}
     */
    back(delta) {
      this.navBack(delta)
    },
    navBack(delta = 1) {
      let pages = getCurrentPages()
      if (pages.length === 1) return
      wx.navigateBack({ delta })
    },
    /**
     * @description: 调转
     * @param {*} path 目标页面
     * @param {*} type | redirect 关闭当前页面，跳转到应用内的某个页面
     * @return {*}
     */
    navTo(path, type) {
      this.nav(path, type)
    },
    nav(path, type) {
      if (!path) return
      let p = path.slice(1)
      p = p.split('?')[0]
      if (this.TAB_PATHS.indexOf(p) >= 0) {
        return uni.switchTab({ url: path })
      }
      if (typeof type === 'string' && type === 'redirect') {
        return uni.redirectTo({
          url: path
        })
      }
      // 防止当前页面栈超过10无响应
      let pages = getCurrentPages()
      if (pages.length >= 10) {
        return uni.redirectTo({
          url: path
        })
      }
      uni.navigateTo({ url: path })
    },
    /**
     * @description: 滚动到对应元素
     * @param {*} selector 目标元素
     * @param {*} top 距离顶部高度
     * @param {*} opt | duration 滚动延时 | isComponent 是否是组件 | isNeed 是否需要滚动到该位置
     * @return {*}
     */
    scrollToSelector(selector, top = 0, opt = {}) {
      let duration = opt.duration || 100
      let isComponent = opt.isComponent || true
      let isNeed = opt.isNeed || true
      const query = wx.createSelectorQuery()
      if (isComponent) {
        // 组件需要深度查询
        query.select(`.page >>> ${selector}`).boundingClientRect()
      } else {
        query.select(`.page ${selector}`).boundingClientRect()
      }
      query.selectViewport().scrollOffset()
      query.exec(res => {
        if (!res || !res.length || !res[0]) return
        if (res[0].top > 0 && !isNeed) return
        wx.pageScrollTo({
          scrollTop: res[1].scrollTop + (res[0].top || 0) - top,
          duration
        })
      })
    },
    // 单位转换
    px2rpx,
    rpx2px,
  }
}
