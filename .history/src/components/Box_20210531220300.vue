<template>
  <button
    class="borders relative text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 mr-3 py-8 px-6"
  >
    <p class="text-blue-900">Programmes</p>
    <p class="secondaryColor">and grants</p>
    <p class="text-xl font-semibold mt-3">Apply for funding</p>
  </button>
</template>

<script>
export default {
  name: "Box",
};
</script>

<style>
.borders {
  border: 5px solid blue;
  margin: 20px;
}

.borders:after {
  content: "";
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  background: red;
  z-index: -1;
}
</style>
