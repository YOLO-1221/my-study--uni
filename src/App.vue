<script>
import { mapMutations } from "vuex";

export default {
  onLaunch() {
    console.log("App Launch");
  },

  onShow() {
    let curMode = uni.getSystemInfoSync().theme;
    this.SET_CUR_MODE(curMode);
    console.log("onShow", curMode);
  },

  onThemeChange(e) {
    let curMode = e.theme;
    this.SET_CUR_MODE(curMode);
  },
  methods: {
    ...mapMutations(["SET_CUR_MODE"]),
  },
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "uview-ui/index.scss";

@import "./static/iconfont.css";

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
