<template>
 <section :class="style.main">
   <div :class="style.header">
      <img src="@/assets/1negative-logo.png" />
      <div :class="style.iconsContainer">
       <button @click="modal(1)" :class="style.iconContainer">
         <i :class="['fas fa-search',style.icon]"></i>
        <h1 :class="style.text" >Search</h1>
       </button>
       <button  @click="modal(2)" :class="style.iconContainer">
         <i :class="['fa fa-bars',style.icon]" aria-hidden="true"></i>
        <h1 :class="style.text" >Menu</h1>
       </button>
      </div>
    </div>
    <div :class="style.lists">
      <div class="w-1/3"></div>
      <div class="w-1/3 flex flex-col text-2xl font-semibold leading-relaxed text-white">
        <div class="mb-4 border-b-4 border-blue-500 "></div>
          <p class="hover:text-blue-500">Programmes and grants</p>
          <p class="hover:text-blue-500">Events</p>
          <p class="hover:text-blue-500">Reports and publications</p>
          <p class="hover:text-blue-500">Resources and tools</p>
          <div class="mt-4 border-b-4 border-blue-500"></div>
          <div class="text-xl mt-6 text-blue-500">
            <p class="hover:text-white">Employees</p>
            <p class="hover:text-white">Contact</p>
            <p class="hover:text-white">News</p>
            <p class="text-white hover:text-blue-500">Norsk</p>
          </div>
      </div>
    </div>
    </section>
</template>

<script>
export default {
  name:"ModalMenu",
  data(){
    return{
      style:{
        main:"h-screen w-screen bg-blue-900",
        header:"flex justify-between px-24 py-12",
        iconsContainer:"flex items-end",
        iconContainer:"mr-8 focus:outline-none hover:text-white text-secondary",
        icon:"text-5xl",
        text:"text-xl font-bold",
        lists:"flex",
        



      }
    }
  },
  methods:{
    modal(x){
      x==2 ? x=0 : x=1;
      this.$emit('modal',x);
    }
  },
}
</script>

<style>

</style>
