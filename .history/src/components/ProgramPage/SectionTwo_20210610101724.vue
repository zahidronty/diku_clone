<template>
 <div class="relative px-24 pt-12 bg-gray-100 h-full flex pb-24">

  <ul class="w-2/5 pr-12 flex flex-col text-xl font-semibold text-blue-900 ">
   <li class="border-b-4 py-2 border-blue-900 mb-4">Who Can Apply?<i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
   <li class="border-b-4 py-2 border-blue-900 mb-4">What can you apply for?<i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
   <li class="border-b-4 py-2 border-blue-900 mb-4">How do you apply?<i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
   <li class="border-b-4 py-2 border-blue-900 mb-4">How do you report? <i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
   <li class="border-b-4 py-2 border-blue-900 mb-4">Applicant Seminar 2019 <i class="fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
  </ul>

  <div class="w-3/5 mx-8  mt-5 leading-normal whitespace-pre-line">

   <div class="pb-12">
    <p class="text-4xl text-blue-900 font-semibold mb-6">Who can apply?</p> 
    <p class="text-xl font-regular"> {{whoCanApply}} </p>
   </div>

   <div ref="whatCanYouApplyFor" class="pb-12">
    <p class="text-4xl text-blue-900 font-semibold mb-6">What can you apply for?</p>
    <p class="text-xl font-regular"> {{whatCanYouApplyFor}} </p>
   </div>

   <div ref="howDoYouApply"  class="pb-12">
    <p class="text-4xl text-blue-900 font-semibold mb-6">How do you apply?</p>
    <p class="text-xl font-regular" v-html="howDoYouApply">  </p>
   </div>

   <div class="pb-12">
    <p class="text-4xl text-blue-900 font-semibold mb-6">How do you report?</p>
    <p class="text-xl font-regular" v-html="howDoYouReport"> </p>
   </div>

   <div class="pb-12">
    <p class="text-4xl text-blue-900 font-semibold mb-6">Applicant Seminar 2019</p>
    <p class="text-xl font-regular" v-html="applicantSeminar">  </p>
   </div>
  </div>
 </div>  
</template>

<script>
  const options = {
    root: null, 
    threshold: 0, 
  };

  export default {
   name: "SectionTwo",
   components:[],
   props:['whoCanApply', 'whatCanYouApplyFor', 'howDoYouApply', 'howDoYouReport', 'applicantSeminar'],
   data(){ return{
       isOver: false,
       deadline: this.deadline,
       observer: null,
       activeSection:1,
   }},
   mounted(){
     this.observer = new IntersectionObserver(this.callback, options);
     this.observer.observe(this.$refs.whatCanYouApplyFor);
     this.observer.observe(this.$refs.howDoYouApply);
   },
   methods:{
      callback(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log(entry.target);
		console.log(entry.isIntersecting);

          }
        });
      }
    }
  };
</script>

<style scoped>
  
</style>
