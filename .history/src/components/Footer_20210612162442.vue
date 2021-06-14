<template>
   <div :class="style.main">
      <img src="@/assets/negativeLogo.png"/>
      <div :class="style.address">
         <p> P.O.Box 1093, 5809 Bergen, Norway</p> 
         <p>Phone: +47 55 30 38 00</p> 
         <p> Email: post@diku.no</p>
      </div>

      <div :class="style.bottomTexts">
         <p class="border-b-4 border-blue-500"> Privacy policy</p>
         <p class="border-b-2"> Norsk</p>
      </div>

      <div class="flex justify-end space-x-2 mt-2 mb-8">
         <img class="w-8 text-blue-900" src="@/assets/facebook-logo.svg"/>
         <img class="w-8 text-blue-900" src="@/assets/linkedin.png"/>
         <img class="w-8 text-blue-900" src="@/assets/twitter.png"/>
         <img class="w-8 text-blue-900" src="@/assets/spotify-logo.png"/>
      </div>
   </div>
</template>

<script>
   export default {
      name:"Footer",
      data(){
         return{
            style: {
               main:"bg-indigo-900 pt-24 px-24 pb-12",
               address:"text-white mt-24",
               bottomTexts:"mt-12 text-white flex justify-between",
            },
         }
      }
   };
</script>
