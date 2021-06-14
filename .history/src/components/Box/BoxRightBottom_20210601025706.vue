<template>
  <div class="relative w-full h-full">
    <div class="shadows absolute right-0 bottom-0 bg-blue-900"></div>
    <button
      class="buttons absolute text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 mr-3 pl-12"
    >
      <p class="text-blue-900 font-bold mb-1">Programmes</p>
      <p class="secondaryColor font-bold">and grants</p>
      <p class="text-xl font-semibold mt-4 inline">
        Apply for funding
        <i
          class="fas fa-arrow-right text-sm transition duration-500 ease-in-out transform hover:translate-x-1"
        ></i>
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: "BoxRightBottom",

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
  position: absolute;
}

.move {
  transform: translateX(30px);
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
</style>
