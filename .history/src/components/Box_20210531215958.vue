<template>
  <div class="borders relative">
    <button
      class="border text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 mr-3 py-8 px-6"
    >
      <p class="text-blue-900">Programmes</p>
      <p class="secondaryColor">and grants</p>
      <p class="text-xl font-semibold mt-3">Apply for funding</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Box",
};
</script>

<style>
.borders::before {
  content: " ";
  position: absolute;
  z-index: -1;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 5px solid #ffea00;
}
</style>
