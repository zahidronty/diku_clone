<template>
  <div>
    <SectionOne @modalSearch="modalSearch" v-if="!showSearch" />
    <SectionTwo v-if="!showSearch" />
    <SectionThree v-if="!showSearch" />
    <SectionFour v-if="!showSearch"/>
    <transition name="fade">
      <ModalSearch @modal="modal" v-if="showSearch"/>
      <ModalMenu @modalMenu= "modalMenu" v-if="showMenu"/>
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
import ModalMenu from "@/components/ModalMenu.vue";

export default {
  name: "Home",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    ModalSearch,
    ModalMenu,
  },
  
  data(){
    return{
      show:false,
    }
  },
  methods:{
    modalSearch(x){
      this.showSearch = x;
      console.log(x)
    },
    modalMenu(x){
      this.showMenu = x;
    }
  }
};

</script>
