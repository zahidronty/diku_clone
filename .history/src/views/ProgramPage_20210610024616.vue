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
    name: "ProgramPage",
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
        title:this.$route.params.title,
        data:[],
        programData:[],
        nameOutput:''
      }
    },
    created() {
      for (var i = 0; i < this.title.length; i++) {
      (this.title[i] == "-" ?
        this.nameOutput += " " : this.nameOutput += this.title[i]
      )
    }  
      this.programData = this.data.find(element => element.title === this.nameOutput)
      console.log(this.nameOutput)
    },

    mounted(){
      fetch('https://api.npoint.io/6e3818d3fae2f180e31e')
      .then(res => res.json())
      .then(data => console.log(data))
      .then(j=> console.log(j))
      .catch(err => console.log(err.message))
    },
    
    methods:{
      modal(x){
        this.show = x;
      },
    }
  };
</script>
