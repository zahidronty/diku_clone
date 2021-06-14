<template>
  <div>
    <SectionOne @modalSearch="modalSearch"  @modalMenu="modalMenu" v-if="!showSearch || !showMenu" />
    <SectionTwo v-if="!showSearch || !showMenu" />
    <SectionThree v-if="!showSearch || !showMenu" />
    <SectionFour v-if="!showSearch || !showMenu"/>
    <ModalSearch @modalSearch="modalSearch" v-if="showSearch || !showMenu"/>
    <ModalMenu @modalMenu="modalMenu" v-if="showMenu || !showSearch"/>
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
      showSearch:false,
      showMenu:false,
    }
  },
  methods:{
    modalSearch(x){
      this.showSearch = x;
    },
    modalMenu(x){
      this.showMenu = x;
    }
  }
};

</script>
