<template>
 <section class="h-screen w-screen bg-blue-900">
    <div class="flex justify-between px-24 py-12 ">
      <img src="@/assets/1negative-logo.png" />
      <div class="flex items-end">
       <button @click="modal(1)" class="mr-8 focus:outline-none hover:text-white text-secondary">
         <i class="fas fa-times text-5xl"></i>
         <h1 class="text-2xl font-bold" >Search</h1>
       </button>
       <button @click="modal(2)" class="focus:outline-none hover:text-white text-secondary">
         <i class="fa fa-bars text-5xl" aria-hidden="true"></i>
         <h1 class="text-2xl font-bold">Menu</h1>
       </button>
      </div>
    </div>
    <div class="px-28 w-2/3">
     <div >
      <input class="focus:outline-none form-input text-3xl font-semibold text-white placeholder-red-300 bg-blue-900" placeholder="Search on Diku.no">
      <span class="text-xl mr-2">Search</span><i class="fas fa-search text-5xl"></i>
      <div class="w-3/4 border-b-4"></div>
     </div>
    </div>
 </section>
</template>

<script>
export default {
  name:"ModalSearch",
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
          firstCol:"w-1/3",
          content:"w-1/3 flex flex-col text-2xl font-semibold leading-relaxed text-white",
          border:"mb-4 border-b-4 border-blue-500",
          mainMenuText:"hover:text-blue-500",
          secondaryMenu:"text-xl mt-6 text-blue-500",
          secondaryaryMenuText:"hover:text-white"
        }
      }
    },
  methods:{
    modal(x){
      x==1 ? x=0 : x=2;
      this.$emit('modal',x);
    }
  },
}

</script>

<style>

</style>
