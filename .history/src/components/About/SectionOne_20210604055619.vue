<template>
  <div class="h-screen pt-12 px-24 sectionOne">
    <div class="h-full flex flex-col justify-between">
      <Header @modal="modal"/>
      <div>
        <p class="text-2xl">About Diku</p>
        <p>Norwegian Agency for International Cooperation and Quality Enhancement in Higher Education</p>
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
