<template>
  <div class="h-screen pt-12 px-24 homeSectionOne">
    
      <Header @modal="modal"/>
      
        Employees
     
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "SectionOne",
  components:{Header},
  data() {
   return {
    canvasImage: "section1.png",
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
    background-color: #e8eae9;
  }
</style>
