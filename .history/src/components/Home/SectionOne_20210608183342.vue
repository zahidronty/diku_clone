<template>
  <div class="h-screen pt-12 px-24 homeSectionOne">
    <div class="h-full flex flex-col justify-between">
      <Header @modal="modal"/>
      <div class="flex justify-between items-end">
        <div class="pb-24 ml-1">
          <router-link to="/en/about-diko"
            type="button"
            class="bg-blue-900 px-6 py-3 inline-flex items-center justify-center text-xl font-semibold ring-2 ring-blue-900 text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            About Diku
          </router-link>

          <router-link to="/en/about-diko/employees"
            type="button"
            class="bg-white mx-3 px-6 py-3 inline-flex items-center justify-center text-xl font-semibold text-indigo-900 ring-2 ring-blue-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            Employees
          </router-link>
        </div>
        <div><img v-bind:src="require('@/assets/' + canvasImage)"  /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "SectionOne",
  components:{Header},
  data() {
   return {
    canvasImage: "section1.png",
   };
  },
  methods:{
    modal(x){
      this.$emit('modal',x)
    },
  },
};
</script>

<style>
  .homeSectionOne {
    background-color: #e8eae9;
  }
</style>
