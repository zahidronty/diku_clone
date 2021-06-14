<template>
 <div class="bg-red-50 h-full pt-12 px-24 pb-32 mb-6">
  
  <div class="flex mb-24 mt-12 ">
   <BoxTopLeft class="mr-4"
    :primary="BoxTopLeft.primary"
    :secondary="BoxTopLeft.secondary"
    :tertiary="BoxTopLeft.tertiary"   
   />
   <BoxTopRight
     :primary="BoxTopRight.primary"
     :secondary="BoxTopRight.secondary"
     :tertiary="BoxTopRight.tertiary"
   />
  </div>
 
 </div>
</template>

<script>

 import BoxTopLeft from "@/components/Box/BoxTopLeft.vue";
 import BoxTopRight from "@/components/Box/BoxTopRight";
 import BoxBottomLeft from "@/components/Box/BoxBottomLeft";

 export default {
  name:"SectionTwo",
  components: {
   BoxTopLeft,
   BoxTopRight,
   BoxBottomLeft
  },

  data(){
      return{
        BoxTopLeft: {
          primary:'Programme',
          secondary: 'and grants',
          tertiary: 'Apply for funding',
        },
        BoxBottomLeft: {
          primary:'Reports',
          secondary: 'and publication',
          tertiary: '',
        },
        BoxTopRight: {
          primary:'Events',
          secondary: '',
          tertiary: 'Register for conferences, seminars and other events',
        },
        BoxBottomRight: {
          primary:'Resources and',
          secondary: 'tools',
          tertiary: '',
        },
      }
    }
  };
</script>

<style>

</style>
