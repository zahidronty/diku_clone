<template>
  <div class="h-screen pt-24 pb-24 px-24 flex flex-col bg-red-50">
    <div class="h-1/2 flex mb-3">
      <BoxTopLeft class="mr-4"/>
      <BoxLeftBottom />
    </div>
    <div class="h-1/2 flex">
      <BoxRightTop class="mr-4"/>
      <BoxLeftTop />
    </div>
  </div>
</template>

<script>
import BoxTopLeft from "@/components/Box/BoxTopLeft.vue";
import BoxTopRight.vue from "@/components/Box/BoxTopRight.vue.vue";
import BoxLeftTop from "@/components/Box/BoxLeftTop.vue";
import BoxBottomLeft from "@/components/Box/BoxBottomLeft.vue";
export default {
  name: "SectionTwo",
  components: {
    BoxTopLeft,
    BoxLeftBottom,
    BoxLeftTop,
    BoxBottomLeft,
  },
  data() {
    return{
      primary:""
    }
  }
};
</script>

<style>
.secondaryColor {
  color: #0f5b7d;
}
</style>
