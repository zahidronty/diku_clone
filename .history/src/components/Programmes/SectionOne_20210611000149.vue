<template>
 <div :class="style.main">
    <div class="h-full flex flex-col justify-between">
      <Header class="z-50" @modal="modal"/>
      <div class="flex mb-12 items-end">
       <div class="font-semibold text-5xl mb-36">
        <p class="text-blue-900 mb-3">Programmes</p>
        <p class="text-secondary">and grants </p>
       </div>
       <div class="w-full h-full absolute bottom-8 right-6">
         <img class="w-full h-full" v-bind:src="require('@/assets/' + canvasImage)"  />
       </div>
        </div>
    </div>
    <img class="absolute right-3 bottom-6 img" :src="require('@/assets/' + additionalImage)"/>
  </div>  
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "SectionOne",
  components:{Header},
  data() {
   return {
    canvasImage: "Programmes.png",
    additionalImage: "1.jpg",
    style:{
      main:"h-screen relative pt-12 px-24 homeSectionOne "
    }
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
    background-color: #FAFAFC;
  }
</style>
