export default {
  SET_CUR_MODE(state, payload) {
    state.curMode = payload;
    console.log("SET_CUR_MODE", state.curMode);
  },
};
