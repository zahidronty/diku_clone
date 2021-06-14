<template>
  <div>
    <section v-if="show==0">
      <SectionOne @modal="modal"
        :title="programData.title"
        :info="programData.info"
      />
      
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
    },

    mounted(){
      fetch('https://my.api.mockaroo.com/programme.json?key=c0ffb6b0')
      .then(res => res.json())
      .then(data => data.find(element => element.title == this.nameOutput))
      .then(found => console.log(found))
      .catch(err => console.log(err.message))
    },
    
    methods:{
      modal(x){
        this.show = x;
      },
    }
  };
</script>
