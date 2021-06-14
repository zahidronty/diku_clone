<template>
 <section class="h-screen w-screen bg-blue-900">
   <div class="flex justify-between px-24 py-12 ">
      <img src="@/assets/1negative-logo.png" />
      <div class="flex items-end">
       <button @click="modal(1)" class="mr-8 focus:outline-none hover:text-white text-secondary">
         <i class="fas fa-times text-5xl"></i>
         <h1 class="text-2xl font-bold" >Search</h1>
       </button>
       <button  @click="modal(2)" class="focus:outline-none hover:text-white text-secondary">
         <i class="fa fa-bars text-5xl" aria-hidden="true"></i>
         <h1 class="text-2xl font-bold">Menu</h1>
       </button>
      </div>
    </div>
    <div class="text-center">
      <div class="w-3/4 border-b-4"></div>
    </div>
    </section>
</template>

<script>
export default {
  name:"ModalMenu",
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
