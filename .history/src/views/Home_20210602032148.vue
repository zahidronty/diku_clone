<template>
  <div>
    <SectionOne @modal="modal" v-if="!show" />
    <SectionTwo v-if="!show" />
    <SectionThree v-if="!show" />
    <SectionFour v-if="!show"/>
    <transition name="fade">
      <ModalSearch @modal="modal" v-if="show"/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionOne from "@/components/SectionOne.vue";
import SectionTwo from "@/components/SectionTwo.vue";
import SectionThree from "@/components/SectionThree.vue";
import SectionFour from "@/components/SectionFour.vue";
import ModalSearch from "@/components/ModalSearch.vue";
import ModalMenu from "@/components/ModalSearch.vue";

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
