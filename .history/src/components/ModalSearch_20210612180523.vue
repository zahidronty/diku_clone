<template>
 <section class="h-screen w-screen bg-blue-900">
    <HeaderTwo/>
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
import HeaderTwo from "@/components/HeaderTwo.vue"
export default {
  name:"ModalSearch",
  components:{HeaderTwo},
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
