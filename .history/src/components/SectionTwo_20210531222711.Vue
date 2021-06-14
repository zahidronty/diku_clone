<template>
  <div class="h-screen pt-24 px-24 flex flex-col bg-red-50">
    <div class="w-1/2 h-1/2">
      <Box />
    </div>
  </div>
</template>

<script>
import Box from "@/components/Box.vue";
export default {
  name: "SectionTwo",
  components: {
    Box,
  },
};
</script>

<style>
.secondaryColor {
  color: #0f5b7d;
}
</style>
