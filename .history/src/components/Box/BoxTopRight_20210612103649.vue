<template>
  <div
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    class="relative w-full h-full"
  >
    <div :class="style.shadow"></div>
    <button :class="style.mainBox">
      <p :class="style.primaryText"> {{primary}} </p>
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
  name: "BoxTopRight",
  props: ['primary', 'secondary', 'tertiary'],
  data() {
    return {
      isActive: false,
      style:{
        shadow:"shadows absolute bottom-0 bg-blue-900",
        mainBox:"buttons absolute right-0 text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 ml-3 px-8",
        primaryText:"text-blue-900 font-bold mb-1",
        secondaryText:"",
        tertiaryText:""
      }
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
