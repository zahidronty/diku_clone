<template>
 <div class="h-screen relative pt-12 px-24 bg-white ">
    <div class="h-full flex flex-col justify-between">
      <Header class="z-50" @modal="modal"/>
        <p class="font-semibold text-5xl text-blue-900 mb-3"> {{title}} </p>
        <p class="mb-24 text-2xl leading-loose

 w-2/3"> {{info}} </p>
    </div>
        
    
      </div>  
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "SectionOne",
  components:{Header},
  props:['title', 'info'],
  
  methods:{
    modal(x){
      this.$emit('modal',x)
    },
  },
};
</script>

<style>
  
</style>
