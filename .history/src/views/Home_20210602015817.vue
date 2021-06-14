<template>
  <div>
    <SectionOne @modal="modal" />
    <SectionTwo v-if="!show" />
    <SectionThree />
    <SectionFour/>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionOne from "@/components/SectionOne.vue";
import SectionTwo from "@/components/SectionTwo.vue";
import SectionThree from "@/components/SectionThree.vue";
import SectionFour from "@/components/SectionFour.vue";

export default {
  name: "Home",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
  },
  
  data(){
    return{
      show:false,
    }
  },
  methods:{
    modal(){
      console.log(show)
    }
  }
};

</script>
