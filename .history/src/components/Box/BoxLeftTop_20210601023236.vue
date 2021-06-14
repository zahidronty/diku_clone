<template>
  <div @mouseover="isActive = true" @mouseout="hoverOff" class="relative w-full h-full">
    <div class="shadows absolute bg-blue-900"></div>
    <button
      class="buttons absolute bottom-0 right-0 text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 ml-3 pl-12"
    >
      <p class="text-blue-900 font-bold mb-1">Resources and</p>
      <p class="secondaryColor font-bold">tools</p>
      <p class="text-xl font-semibold mt-4 inline">
        <i class="fas fa-arrow-right text-sm" :class="{ mouseOver: isActive }"></i>
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: "BoxLeftTop",
  computed: {
    isActive: false,
  },
  data() {
    return {
      mouseOver: "transition duration-500 ease-in-out transform hover:translate-x-1",
      isActive: false,
    };
  },

  methods: {
    hoverOn() {
      console.log("HoverOn");
    },
    hoverOff() {
      console.log("Hoveroff");
    },
  },
};
</script>

<style>
.buttons {
  width: 98%;
  height: 96%;
}
.shadows {
  width: 90%;
  height: 90%;
}
</style>
