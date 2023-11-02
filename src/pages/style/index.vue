<template>
  <view class="page">
    <u-cell-group>
      <u-cell title="分段器" url="/packageStyle/Subsection/index"></u-cell>
    </u-cell-group>
  </view>
</template>

<script>
const { exec } = require("child_process");

export default {
  data() {
    return {};
  },
  onLoad() {
    console.log("exec", exec);
    console.log(uni.$u.config.v);
  },
  methods: {},
};
</script>

<style scoped></style>
