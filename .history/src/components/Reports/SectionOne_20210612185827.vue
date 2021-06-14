<template>
  <div :class="style.main">
   <img :class="style.img" :src="require('@/assets/' + canvasImage)"  />
   <Header :class="style.header" @modal="modal"/>
    <div :class="style.info">
      
        
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
    canvasImage: "ReportImage.jpg",
    style:{
      main:"h-screen flex flex-col justify-between",
      img:"w-screen h-screen absolute",
      header:"z-20 relative p-24",
      button1:"bg-blue-900 px-6 py-3 inline-flex items-center justify-center text-xl font-semibold ring-2 ring-blue-900 text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
      button2:"bg-white mx-3 px-6 py-3 inline-flex items-center justify-center text-xl font-semibold text-indigo-900 ring-2 ring-blue-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
    }
   };
  },
  methods:{
    modal(x){this.$emit('modal',x)},
  },
};
</script>

<style>
  .homeSectionOne {
    background-color: #e8eae9;
  }
</style>
