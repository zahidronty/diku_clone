<template>
  <div class="h-screen pt-24 pb-24 px-24 flex flex-col bg-red-50">
    <div class="h-1/2 flex mb-3">
      <BoxRightBottom class="mr-4"/>
      <BoxLeftBottom />
    </div>
    <div class="h-1/2 flex">
      <BoxRightTop class="mr-4"/>
      <BoxLeftTop />
    </div>
  </div>
</template>

<script>
import BoxRightBottom from "@/components/Box/BoxRightBottom.vue";
import BoxLeftBottom from "@/components/Box/BoxLeftBottom.vue";
import BoxLeftTop from "@/components/Box/BoxLeftTop.vue";
import BoxRightTop from "@/components/Box/BoxRightTop.vue";
export default {
  name: "SectionTwo",
  components: {
    BoxRightBottom,
    BoxLeftBottom,
    BoxLeftTop,
    BoxRightTop,
  },
};
</script>

<style>
.secondaryColor {
  color: #0f5b7d;
}
</style>
