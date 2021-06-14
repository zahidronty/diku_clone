<template>
 <div class="relative px-24 pt-12 bg-gray-100 h-full flex">
  <div class="w-1/3 flex flex-col">
   <p class="text-xl">Who Can Apply? <i class="fa fa-arrow-right" aria-hidden="true"></i></p>
  </div>
  <div class="w-full">asd</div>
  </div>  
</template>

<script>

  
  export default {
    name: "SectionTwo",
    components:{},
    props:['title', 'info', 'deadline'],
    data(){ return{
        isOver: false,
        deadline: this.deadline
    }},
  };
</script>

<style scoped>
  
</style>
