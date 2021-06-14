<template>
 <section class="h-screen w-screen bg-blue-900">
   <div class="flex justify-between p-24">
      <img src="@/assets/1negative-logo.png" />
      <div class="flex">bjhhjjh
       <button @click="modal" class="mr-8 focus:outline-none  text-secondary">
         <i class="fas fa-search text-5xl"></i>
         <h1 class="text-xl font-bold" >Search</h1>
       </button>
       <div class="text-blue-900 focus:outline-none hover:text-secondary">
         <i class="fa fa-bars text-5xl" aria-hidden="true"></i>
         <h1 class="text-xl font-bold">Menu</h1>
       </div>
      </div>
    </div>
 </section>
</template>

<script>
export default {
 name:"ModalSearch",
}
</script>

<style>

</style>
