<template>
  <div :class="style.main">
   <img :class="style.img" :src="require('@/assets/' + canvasImage)"  />
   <Header :class="style.header" @modal="modal"/>
   <div :class="style.info">
     <p :class="style.primary">Reports</p>
     <p :class="style.secondary">and Pubications</p>
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
      main:"h-screen flex flex-col justify-around ",
      img:"w-screen h-screen absolute",
      header:"z-20 relative px-24 py-12",
      info:"relative z-20",
      primary:"text",
      secondary:"",
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
