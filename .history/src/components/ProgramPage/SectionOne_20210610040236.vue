<template>
 <div class="h-screen relative pt-12 px-24 bg-white ">
    <div class="h-full flex flex-col justify-between">
      <Header class="z-50" @modal="modal"/>
        <p class="font-semibold text-5xl text-blue-900 mb-3"> {{title}} </p>
        <p class="mb-24 text-2xl leading-relaxed font-normal tracking-wider w-2/3"> {{info}} </p>
        <p :class="{slash:isOver}" class="text-xl text-blue-900 font-semibold"> Application deadline: <span class="text-black"> {{moment(deadline).format("MMMM DD, YYYY")}} within 12:00 PM </span> </p>
    </div>
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
    }},

    created(){
      this.moment = moment;
      moment(deadline).isAfter(new Date()) ? this.isOver=true : this.isOver=false;  
      console.log(this.isOver)
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
