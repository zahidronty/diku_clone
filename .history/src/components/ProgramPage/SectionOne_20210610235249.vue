<template>
 <div :class="style.sectionOne.main ">
    
      <Header class="z-50 px-24" @modal="modal"/>
        <p class="hover:text-blue-900 my-12 px-12 text-2xl text-secondary font-bold"><i class=" mr-4 fas fa-chevron-left"></i>Programmes</p>
        <p class="px-24 mt-8 font-semibold text-5xl text-blue-900 mb-3"> {{title}} </p>
        <p class="px-24 mb-24 text-2xl leading-relaxed font-normal tracking-wider w-2/3"> {{info}} </p>
        <p :class="{slash:isOver}" class="mb-12 px-24 text-xl text-blue-900 font-semibold"> Application deadline: <span class="text-black"> {{moment(deadline).format("MMMM DD, YYYY")}} within 12:00 PM </span> </p>
  </div>  
</template>

<script>

  import Header from "@/components/Header.vue";
  import moment from 'moment';
  export default {
    name: "SectionOne",
    components:{Header},
    props:['title', 'info', 'deadline'],
    data(){ return{
        isOver: false,
        deadline: this.deadline,
        style:{
          sectionOne:{
            main:"pt-12 bg-white flex flex-col justify-between"
          }
        }
    }},

    created(){
      this.moment = moment;
      moment(this.deadline).isAfter(new Date()) ? this.isOver=false : this.isOver=true;  
    },
    
    methods:{
      modal(x){
        this.$emit('modal',x)
      },
    },
  };
</script>

<style scoped>
  .slash{
    text-decoration: line-through;
  }
</style>
