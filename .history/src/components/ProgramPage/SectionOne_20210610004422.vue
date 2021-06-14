<template>
 <div class="h-screen relative pt-12 px-24 bg-white ">
    <div class="h-full flex flex-col justify-between">
      <Header class="z-50" @modal="modal"/>
      <div class="flex mb-12 items-end">
       <div class="font-semibold text-5xl mb-36">
        <p class="text-blue-900 mb-3">Programmes</p>
        <p class="text-secondary">and grants </p>
       </div>
       
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
  
</style>
