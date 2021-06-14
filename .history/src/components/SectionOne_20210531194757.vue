<template>
  <div class="h-screen pt-12 px-24 sectionOne">
    <div class="flex justify-between">
      <img src="@/assets/logo.svg" />
      <div>
        <i class="fas fa-search"></i>
      </div>
    </div>
    <div>
      <button
        type="button"
        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-expanded="false"
      >
        About Us
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionOne",
  components: {},
};
</script>

<style>
.sectionOne {
  background-color: #e8eae9;
}
</style>
