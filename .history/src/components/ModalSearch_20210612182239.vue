<template>
  <section :class="style.main">
    <HeaderTwo @modal="modal"/>
    <div :class="style.searchContainer">
      <input :class="style.inputBox" placeholder="Search on Diku.no">
      <span class="text-xl mr-2">Search</span><i class="fas fa-search text-5xl"></i>
      <div class="w-3/4 border-b-4"></div>
     
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
          searchContainer:"px-28 w-2/3",
          inputBox:"focus:outline-none form-input text-3xl font-semibold text-white placeholder-red-300 bg-blue-900",
        }
      }
    },
  methods:{
    modal(x){
        x==1 ? x=0 : x=1;
        this.$emit('modal',x);
      }
  },
}

</script>

<style>

</style>
