<template>
  <div class="h-screen pt-36 px-24 flex flex-col bg-red-50">
    <div class="flex">
      <BoxRightBottom />
      <BoxRightBottom />
    </div>
  </div>
</template>

<script>
import BoxRightBottom from "@/components/Box/BoxRightBottom.vue";
export default {
  name: "SectionTwo",
  components: {
    BoxRightBottom,
  },
};
</script>

<style>
.secondaryColor {
  color: #0f5b7d;
}
</style>
