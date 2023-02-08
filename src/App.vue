<script>
export default {
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show', this.theme)
    if (this.theme === 'light') {
      uni.$u.mainColor = 'black'
    }
    if (this.theme === 'dark') {
      uni.$u.mainColor = 'white'
    }
  },
  onHide() {
    console.log('App Hide')
  },
  onThemeChange(obj) {
    theme = obj.theme
    this.theme = theme
    if (theme === 'light') {
      uni.$u.mainColor = 'black'
    }
    if (theme === 'dark') {
      uni.$u.mainColor = 'white'
    }
  },
}
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-ui/index.scss';
.cell-hover-class {
  background-color: rgb(235, 237, 238);
}

/* 或者单是设置透明度 */
.cell-hover-class {
  opacity: 0.5;
}
/*每个页面公共css */
/* 引入iconfont */
</style>
