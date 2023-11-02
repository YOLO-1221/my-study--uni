<template>
  <view class="page">
    <u-cell-group>
      <u-cell title="走马灯" url="/packageComp/Carousel/index"></u-cell>
    </u-cell-group>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    console.log(uni.$u.config.v);
  },
  methods: {},
};
</script>

<style scoped></style>
