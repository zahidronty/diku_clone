<template>
 <div class="relative px-24 pt-12 bg-gray-100 ">
    <div class="h-full flex flex-col justify-between">
       Jihiuhsuida
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
