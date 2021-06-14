<template>
 <div class="relative px-24 pt-12 bg-gray-100 h-full flex">
  <div class="w-1/3 flex flex-col">
   <p class="text-xl font-semibold text-blue-900 border-b-4 py-6 border-blue-900 mb-4">Who Can Apply? <i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
  </div>
  <div class="w-full ml-12">
   <div>
    <p class="text-3xl text-blue-900">Who can apply?</p>
   </div>
  </div>
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
