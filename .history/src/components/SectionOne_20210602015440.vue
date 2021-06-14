<template>
  <div class="h-screen pt-12 px-24 sectionOne">
    <transition name="fade">
    <p v-if="show">hello</p>
  </transition>

    <div class="h-full flex flex-col justify-between">
      <div class="flex justify-between">
        <img src="@/assets/logo.svg" />
        <div class="flex">
          <button @click="modal" class="mr-8 text-blue-900 hover:text-secondary">
            <i class="fas fa-search text-5xl"></i>
            <h1 class="text-xl font-bold" >Search</h1>
          </button>
          <div class="text-blue-900 hover:text-secondary">
            <i class="fa fa-bars text-5xl" aria-hidden="true"></i>
            <h1 class="text-xl font-bold">Menu</h1>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-end">
        <div class="pb-24 ml-1">
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
        <div><img src="@/assets/section1.png" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionOne",
  data(){
    return{
      show:false,
    }  
  }

  methods:{
    modal(){
      this.show=!this.show;
    }
  },
};
</script>

<style>
.sectionOne {
  background-color: #e8eae9;
}

</style>
