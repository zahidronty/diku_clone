<template>
  <div>
    <section v-if="show==0">
      <SectionOne @modal="modal"/>
     
      <Footer/>
    </section>
    <ModalSearch @modal="modal" v-if="show==1"/>
    <ModalMenu @modal="modal" v-if="show==2"/>
  </div>
</template>

<script>
// @ is an alias to /src
  import SectionOne from "@/components/Employee/SectionOne.vue";
  
  import Footer from "@/components/Footer.vue";
  import ModalSearch from "@/components/ModalSearch.vue";
  import ModalMenu from "@/components/ModalMenu.vue";

  export default {
    name: "Home",
    components: {
      SectionOne,
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
