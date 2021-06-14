<template>
  <div class="h-screen pt-24 pb-24 px-24 flex flex-col bg-red-50">
    <div class="h-1/2 flex mb-3">
      <BoxTopLeft class="mr-4"/>
      <BoxLeftBottom />
    </div>
    <div class="h-1/2 flex">
      <BoxRightTop class="mr-4"/>
      <BoxBottomLeft />
    </div>
  </div>
</template>

<script>
import BoxTopLeft from "@/components/Box/BoxTopLeft.vue";
import BoxLeftBottom from "@/components/Box/BoxLeftBottom.vue";
import BoxBottomLeft from "@/components/Box/BoxBottomLeft.vue";
import BoxRightTop from "@/components/Box/BoxRightTop.vue";
export default {
  name: "SectionTwo",
  components: {
    BoxTopLeft,
    BoxLeftBottom,
    BoxBottomLeft,
    BoxRightTop,
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
