<template>
  <div class="relative w-full h-full bg-green-100">
    <div class="shadows absolute bottom-0 bg-blue-900">asd</div>
    <button
      class="buttons absolute right-1 text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 mr-3 pl-12"
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
  name: "BoxLeftBottom",
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
