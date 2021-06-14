<template>
  <div class="h-screen pt-12 px-24 sectionOne">
    <div class="h-full flex flex-col justify-between bg-red-50">
      <div class="flex justify-between">
        <img src="@/assets/logo.svg" />
        <div>
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div>
        <button
          type="button"
          class="bg-blue-900 px-6 py-3 inline-flex items-center justify-center text-xl font-semibold ring-2 ring-blue-900 text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
        >
          About Diku
        </button>

        <button
          type="button"
          class="bg-white mx-3 px-6 py-3 inline-flex items-center justify-center text-xl font-semibold text-indigo-900 ring-2 ring-blue-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
        >
          Employees
        </button>
      </div>
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
