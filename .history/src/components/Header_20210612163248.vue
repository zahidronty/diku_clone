<template>
  <div :class="style.main">
    <img src="@/assets/logo.svg" />
    <div :class="style.contents">
      <button @click="modal(1)" :class="style.search">
        <i class="fas fa-search text-5xl"></i>
        <h1 class="text-xl font-bold" >Search</h1>
      </button>
      <button @click="modal(2)" :class="style.menu">
        <i class="fa fa-bars text-5xl" aria-hidden="true"></i>
        <h1 class="text-xl font-bold">Menu</h1>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
   return {
    canvasImage: "section1.png",
    
        style:{
          main:"flex justify-between",
          contents:"flex",
          search:"mr-8 focus:outline-none text-blue-900 hover:text-secondary",
          menu:"text-blue-900 focus:outline-none hover:text-secondary"

        }
      
    }
  },
  
  methods:{
    modal(x){
      this.$emit('modal',x)
    },
  },
};
</script>

<style>
.sectionOne {
  background-color: #e8eae9;
}

</style>
