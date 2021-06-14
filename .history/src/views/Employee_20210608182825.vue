<template>
  <div @click="isSearch=false">
    <section v-if="show==0">
      <SectionOne @modal="modal"/>
      <SectionTwo />
      <Footer/>
    </section>
    <ModalSearch @modal="modal" v-if="show==1"/>
    <ModalMenu @modal="modal" v-if="show==2"/>
  </div>
</template>

<script>
// @ is an alias to /src
  import SectionOne from "@/components/Employee/SectionOne.vue";
  import SectionTwo from "@/components/Employee/SectionTwo.vue";
  import Footer from "@/components/Footer.vue";
  import ModalSearch from "@/components/ModalSearch.vue";
  import ModalMenu from "@/components/ModalMenu.vue";

  export default {
    name: "Home",
    components: {
      SectionOne,
      SectionTwo,
      Footer,
      ModalSearch,
      ModalMenu,
    },
    
    data(){
      return{
        show:0,
      }
    },
    methods:{
      modal(x){
        this.show = x;
      },
    }
  };
</script>
