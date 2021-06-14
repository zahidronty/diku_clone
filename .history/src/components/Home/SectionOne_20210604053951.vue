<template>
  <Header/>
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
.sectionOne {
  background-color: #e8eae9;
}

</style>
