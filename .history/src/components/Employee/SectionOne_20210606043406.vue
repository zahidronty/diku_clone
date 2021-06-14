<template>
  <div class="h-screen pt-12 px-24 homeSectionOne">
    <div class="h-full flex flex-col justify-between">
      <Header @modal="modal"/>
      <div class="flex justify-between items-end">
        Employee
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
