<template>
 <div class="relative px-24 pt-12 bg-gray-100 h-full flex pb-24">

  <div class="w-2/5 flex flex-col text-xl font-semibold text-blue-900 ">
   <p class="border-b-4 py-2 border-blue-900 mb-4">Who Can Apply?<i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
   <p class="border-b-4 py-2 border-blue-900 mb-4">What can you apply for?<i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
   <p class="border-b-4 py-2 border-blue-900 mb-4">How do you apply?<i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
   <p class="border-b-4 py-2 border-blue-900 mb-4">How do you report? <i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
   <p class="border-b-4 py-2 border-blue-900 mb-4">Applicant Seminar 2019 <i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></p>
  </div>

  <div class="w-full ml-8 mt-5">

   <div class="pb-12">
    <p class="text-4xl text-blue-900 font-semibold mb-6">Who can apply?</p>
    <p class="text-xl font-regular whitespace-pre" v-html="whoCanApply"></p>
   </div>

   <div>
    <p class="text-4xl text-blue-900 font-semibold mb-6">What can you apply for?</p>
    <p class="text-xl font-regular whitespace-pre" v-html="whatCanYouApplyFor"> </p>
   </div>

   <div>
    <p class="text-4xl text-blue-900 font-semibold mb-6">How do you apply?</p>
    <p class="text-xl font-regular whitespace-pre" v-html="howDoYouApply">  </p>
   </div>

   <div>
    <p class="text-4xl text-blue-900 font-semibold mb-6">How do you report?</p>
    <p class="text-xl font-regular whitespace-pre" v-html="howDoYouReport"> </p>
   </div>

   <div>
    <p class="text-4xl text-blue-900 font-semibold mb-6">Applicant Seminar 2019</p>
    <p class="text-xl font-regular whitespace-pre" v-html="applicantSeminar">  </p>
   </div>

  </div>
 </div>  
</template>

<script>

  
  export default {
    name: "SectionTwo",
    components:{},
    props:['whoCanApply', 'whatCanYouApplyFor', 'howDoYouApply', 'howDoYouReport', 'applicantSeminar'],
    data(){ return{
        isOver: false,
        deadline: this.deadline
    }},
    computed:{
     withBrTags(){
      return whoCanApply.replace(/(\\r)*\\n/g, '<br>')
     }
    }
  };
</script>

<style scoped>
  
</style>
