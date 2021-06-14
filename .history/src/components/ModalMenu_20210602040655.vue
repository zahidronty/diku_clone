<template>
 <section class="h-screen w-screen bg-blue-900">
   <div class="flex justify-between px-24 py-12 ">
      <img src="@/assets/1negative-logo.png" />
      <div class="flex items-end">
       <button @click="modalSearch" class="mr-8 focus:outline-none hover:text-white text-secondary">
         <i class="fas fa-times text-5xl"></i>
         <h1 class="text-2xl font-bold" >Search</h1>
       </button>
       <button  @click="modalMenu" class="focus:outline-none hover:text-white text-secondary">
         <i class="fa fa-bars text-5xl" aria-hidden="true"></i>
         <h1 class="text-2xl font-bold">Menu</h1>
       </button>
      </div>
    </div>
    </section>
</template>

<script>
export default {
 name:"ModalMenu",
 data(){
    return{
      showSearch:false,
      showMenu:false,
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
