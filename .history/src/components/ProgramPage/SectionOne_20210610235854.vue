<template>
  <div :class="style.main">
    <Header :class="style.head" @modal="modal"/>
    <p :class="style.back"><i :class="style.icon"></i>Programmes</p>
    <p :class="style.title"> {{title}} </p>
    <p :class="style.info"> {{info}} </p>
    <p :class="[style.deadline,{slash:isOver}]"> Application deadline: <span class="text-black"> {{moment(deadline).format("MMMM DD, YYYY")}} within 12:00 PM </span> </p>
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
          main:"pt-12 bg-white flex flex-col justify-between",
          back:"hover:text-blue-900 my-12 px-12 text-2xl text-secondary font-bold",
          icon:"mr-4 fas fa-chevron-left",
          head:"px-24",
          title:"px-24 mt-8 font-semibold text-5xl text-blue-900 mb-3",
          info:"px-24 mb-24 text-2xl leading-relaxed font-normal tracking-wider w-2/3"

          
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
