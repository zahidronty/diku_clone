<template>
  <div>
    <SectionOne @modal="modal" />
    <SectionTwo />
    <SectionThree />
    <SectionFour/>
    <ModalSearch/>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionOne from "@/components/SectionOne.vue";
import SectionTwo from "@/components/SectionTwo.vue";
import SectionThree from "@/components/SectionThree.vue";
import SectionFour from "@/components/SectionFour.vue";
import ModalSearch from "@/components/ModalSearch.vue";

export default {
  name: "Home",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    ModalSearch,
  },
  
  data(){
    return{
      show:false,
    }
  },
  methods:{
    modal(x){
      this.show = x;
      console.log(x)
    }
  }
};

</script>
