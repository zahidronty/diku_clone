<template>
 <div class="bg-red-50 pt-12 px-24 pb-32">
  <div class="w-1/2  mb-24 text-blue-900 text-xl leading-relaxed">
   <p class="my-4">Diku – the Norwegian Agency for International Cooperation and Quality Enhancement in Higher Education – aims to strengthen the quality of Norwegian education.</p>
   <p class="my-4">We promote development and innovation in education, encourage international cooperation and digital learning methods.</p>
   <p class="my-4">Diku is an agency under the Norwegian Ministry of Education and Research. In addition, Diku administers programmes for the Norwegian Ministry of Foreign Affairs, the European Commission, and the Nordic Council of Ministers. </p>
   <p class="my-4">We manage a number of national and international incentive schemes to promote quality in universities, colleges, and vocational schools. We also aim to strengthen the quality and relevance in primary and secondary education and training by means of international programmes and schemes. </p>
   <p class="my-4">Diku’s headquarters is in Bergen, with offices in Tromsø and Brussels. We have a total of about 130 employees. </p>
  </div>

  <div class="h-1/2 flex mb-3">
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
    <div class="h-1/2 flex">
      <BoxBottomLeft class="mr-4"
        :primary="BoxBottomLeft.primary"
        :secondary="BoxBottomLeft.secondary"
        :tertiary="BoxBottomLeft.tertiary"
      />
      <BoxBottomRight 
        :primary="BoxBottomRight.primary"
        :secondary="BoxBottomRight.secondary"
        :tertiary="BoxBottomRight.tertiary"
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
