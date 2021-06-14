<template>
 <div class="relative px-24 pt-12 bg-gray-100 h-full flex pb-24">
  <div class="w-2/5 flex flex-col text-xl font-semibold text-blue-900 border-b-4 py-2 border-blue-900 mb-4">
   <p class="">What can you apply for?<i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
   <p class="text-xl font-semibold text-blue-900 border-b-4 py-2 border-blue-900 mb-4">Who Can Apply? <i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
   <p class="text-xl font-semibold text-blue-900 border-b-4 py-2 border-blue-900 mb-4">Who Can Apply? <i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
   <p class="text-xl font-semibold text-blue-900 border-b-4 py-2 border-blue-900 mb-4">Who Can Apply? <i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
   <p class="text-xl font-semibold text-blue-900 border-b-4 py-2 border-blue-900 mb-4">Who Can Apply? <i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
  
  </div>
  <div class="w-full ml-8 mt-5">
   <div>
    <p class="text-4xl text-blue-900 font-semibold mb-6">Who can apply?</p>
    <p class="text-xl font-regular"> {{ whoCanApply }} </p>
   </div>
   <div>
    <p class="text-4xl text-blue-900 font-semibold mb-6">Who can apply?</p>
    <p class="text-xl font-regular"> {{ whoCanApply }} </p>
   </div>
   <div>
    <p class="text-4xl text-blue-900 font-semibold mb-6">Who can apply?</p>
    <p class="text-xl font-regular"> {{ whoCanApply }} </p>
   </div>
   <div>
    <p class="text-4xl text-blue-900 font-semibold mb-6">Who can apply?</p>
    <p class="text-xl font-regular"> {{ whoCanApply }} </p>
   </div>
  </div>
  </div>  
</template>

<script>

  
  export default {
    name: "SectionTwo",
    components:{},
    props:['whoCanApply', 'info', 'deadline'],
    data(){ return{
        isOver: false,
        deadline: this.deadline
    }},
  };
</script>

<style scoped>
  
</style>
