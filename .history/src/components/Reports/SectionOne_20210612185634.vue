<template>
  <div :class="style.main">
   <img :class="style.img" :src="require('@/assets/' + canvasImage)"/>
   <div :class="style.header">
   <Header  @modal="modal"/>
    <div :class="style.info">
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
    canvasImage: "ReportImage.jpg",
    style:{
      main:"h-screen flex flex-col justify-between",
      img:"w-screen h-screen absolute",
      header:"relative z-20",
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
