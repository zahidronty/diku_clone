<template>
 <div class="relative">
  <div class="bg-blue-900"></div>
  <div class="bg-white p-4 ring-4 ring-blue-900">
    <p class="text-xl font-regular"> 
      <p class="font-semibold text-xl mb-4 ">Rights of Appeal</p>
      <p>{{jobs}}</p>
    </p>
  </div>
 </div>
</template>

<script>
export default {
 name:'Box',
 props:['jobs']
}
</script>

<style scoped>

</style>

