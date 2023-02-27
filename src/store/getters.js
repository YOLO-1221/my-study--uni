import state from "./state";

let light = {
  navBgColor: "#f8f8f8",
  navTxtStyle: "black",
  bgColor: "#ffffff",
  bgTxtStyle: "light",
  bgColorTop: "#eeeeee",
  bgColorBottom: "#efefef",
  tabFontColor: "#000000",
  tabSelectedColor: "#3cc51f",
  tabBgColor: "#ffffff",
  tabBorderStyle: "black",

  btnBgColor: "#e2e6eb",
  boxShadowA: "#f5f9fd",
  boxShadowB: "#d8dbe5",
};

let dark = {
  navBgColor: "#292929",
  navTxtStyle: "white",
  bgColor: "#1f1f1f",
  bgTxtStyle: "dark",
  bgColorTop: "#292929",
  bgColorBottom: "#1f1f1f",
  tabFontColor: "#ffffff",
  tabSelectedColor: "#51a937",
  tabBgColor: "#292929",
  tabBorderStyle: "white",

  btnBgColor: "#FFFFFF",
  boxShadowA: "#919191",
  boxShadowB: "#C6C6C6",
};

export default {
  curMode: (state) => state.curMode,

  curTheme: (state) => {
    switch (state.curMode) {
      case "light":
        return light;

      case "dark":
        return dark;

      default:
        return light;
    }
  },
};
