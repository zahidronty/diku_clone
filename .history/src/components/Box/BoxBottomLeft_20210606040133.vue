<template>
  <div
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    class="relative w-full h-full"
  >
    <div class="shadows absolute right-0 bg-blue-900"></div>
    <button class="buttons absolute bottom-0 text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 mr-3 px-8">
      <p class="text-blue-900 font-bold mb-1"> {{primary}} </p>
      <p class="secondaryColor font-bold"> {{secondary}} </p>
      <p class="text-xl font-normal mt-4 inline">
        {{tertiary}}
        <i class="fas fa-arrow-right text-md" :class="{ move: isActive }"></i>
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: "BoxBottomLeft",
  props: ['primary', 'secondary', 'tertiary'],
  data() {
    return {
      isActive: false,
    };
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

.move {
  transform: translateX(30px);
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
</style>
