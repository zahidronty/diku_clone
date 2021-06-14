<template>
 <div class="relative pt-12 bg-white ">
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
