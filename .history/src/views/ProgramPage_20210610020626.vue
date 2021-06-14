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
  import SectionOne from "@/components/ProgramPage/SectionOne.vue";
  import SectionTwo from "@/components/Programmes/SectionTwo.vue";
  import SectionThree from "@/components/Home/SectionThree.vue";
  import Footer from "@/components/Footer.vue";
  import ModalSearch from "@/components/ModalSearch.vue";
  import ModalMenu from "@/components/ModalMenu.vue";

  export default {
    name: "Home",
    components: {
      SectionOne,
      SectionTwo,
      SectionThree,
      Footer,
      ModalSearch,
      ModalMenu,
    },
    
    data(){
      return{
        show:0,
        id:'',
      }
    },
    created() {
      
      console.log(this.$routes.params.id)
    },

    methods:{
      modal(x){
        this.show = x;
      },
    }
  };
</script>
