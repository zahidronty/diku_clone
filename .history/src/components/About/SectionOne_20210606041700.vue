<template>
  <div class="h-screen pt-12 pl-24 pb-32 sectionOne">
    <div class="h-full flex flex-col justify-between">
      <Header class="pr-24" @modal="modal"/>
      <div class="text-5xl font-semibold ">
        <p class="text-blue-900 mb-4">About Diku</p>
        <p class="text-secondary">Norwegian Agency for International Cooperation and Quality Enhancement in Higher Education</p>
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
.sectionOne {
  background-color: #FFFFFF;
}
</style>
