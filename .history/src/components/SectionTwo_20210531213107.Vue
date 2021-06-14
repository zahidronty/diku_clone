<template>
  <div class="h-screen pt-12 px-24 flex flex-col bg-red-50">
    <div class="w-full h-1/2">
      <div class="w-1/2">
        <Box />
        <div class="h-full bg-red w-full">s</div>
        <button
          class="w-full text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 mr-3 py-8 px-6"
        >
          <p class="text-blue-900">Programmes</p>
          <p class="secondaryColor">and grants</p>
          <p class="text-xl font-semibold mt-3">Apply for funding</p>
        </button>
      </div>
      <button class="w-1/2 bg-white ring-4 ring-blue-900">
        <p class="font-Karla">Programmes</p>
        <p>and grants</p>
        <p>Apply for funding</p>
      </button>
    </div>
  </div>
</template>

<script>
import Box from "@/components/Box.vue";
export default {
  name: "SectionTwo",
  component: {},
};
</script>

<style>
.secondaryColor {
  color: #0f5b7d;
}
</style>
