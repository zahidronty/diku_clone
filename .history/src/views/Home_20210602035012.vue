<template>
  <div>
    <SectionOne @modalSearch="modalSearch"  @modalMenu="modalMenu" v-if="!showSearch || !showMenu" />
    <SectionTwo v-if="show==0" />
    <SectionThree v-if="show==0" />
    <SectionFour v-if="show==0"/>
    <ModalSearch @modalSearch="modalSearch" v-if="show==1"/>
    <ModalMenu @modalMenu="modalMenu" v-if="show==2"/>
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
      show:0,
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
