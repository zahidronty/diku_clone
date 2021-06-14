<template>
  <div>
    <SectionOne show=show />
    <SectionTwo />
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
};

</script>
