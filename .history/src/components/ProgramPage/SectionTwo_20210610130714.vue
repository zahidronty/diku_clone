<template>
 <div class="px-24 pt-12 bg-gray-100 h-full flex pb-24">

<div class="w-2/5 pr-12 ">
  <ul class="sticky top-0 flex flex-col text-xl font-light">
    <li :class="{active : activeSection==1 }" class="w-4/5 text-purple-400 border-purple-400 border-b-2 py-2 mb-4 flex flex-wrap justify-between"><p class="">Who Can Apply?</p><i :class="{rotate : activeSection==1}" class="origin-center transform rotate-45 fa fa-arrow-right" aria-hidden="true"></i></li>
    <li :class="{active : activeSection==2}" class="w-4/5 text-purple-400 border-purple-400 border-b-2 py-2 mb-4 flex flex-wrap justify-between"><p class="text-left">What can you apply for?</p><i :class="{rotate : activeSection==2}" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
    <li :class="{active : activeSection==3}" class="w-4/5 text-purple-400 border-purple-400 border-b-2 py-2 mb-4 flex flex-wrap justify-between">How do you apply?<i :class="{rotate : activeSection==3}" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
    <li :class="{active : activeSection==4}" class="w-4/5 text-purple-400 border-purple-400 border-b-2 py-2 mb-4 flex flex-wrap justify-between">How do you report? <i :class="{rotate : activeSection==4}" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
    <li :class="{active : activeSection==5}" class="w-4/5 text-purple-400 border-purple-400 border-b-2 py-2 mb-4 flex flex-wrap justify-between">Applicant Seminar 2019 <i :class="{rotate : activeSection==5}" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
    <li :class="{active : activeSection==6}" class="w-4/5 text-purple-400 border-purple-400 border-b-2 py-2 mb-4 flex flex-wrap justify-between">Legal Information <i :class="{rotate : activeSection==6}" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
  </ul>
  </div>

  <div class="w-3/5 mx-8  mt-5 leading-normal whitespace-pre-line">

   <div class="pb-12">
    <p ref="whoCanApply" class="text-4xl text-blue-900 font-semibold mb-6">Who can apply?</p> 
    <p class="text-xl font-regular"> {{whoCanApply}} </p>
   </div>

   <div class="pb-12">
    <p ref="whatCanYouApplyFor" class="text-4xl text-blue-900 font-semibold mb-6">What can you apply for?</p>
    <p class="text-xl font-regular"> {{whatCanYouApplyFor}} </p>
   </div>

   <div class="pb-12">
    <p ref="howDoYouApply" class="text-4xl text-blue-900 font-semibold mb-6">How do you apply?</p>
    <p class="text-xl font-regular" v-html="howDoYouApply">  </p>
   </div>

   <div class="pb-12">
    <p ref="howDoYouReport" class="text-4xl text-blue-900 font-semibold mb-6">How do you report?</p>
    <p class="text-xl font-regular" v-html="howDoYouReport"> </p>
   </div>

   <div class="pb-12">
    <p ref="applicantSeminar" class="text-4xl text-blue-900 font-semibold mb-6">Applicant Seminar 2019</p>
    <p class="text-xl font-regular" v-html="applicantSeminar"></p>
   </div>

   <div class="pb-12">
    <p ref="legalInformation" class="text-4xl text-blue-900 font-semibold mb-6">Legal Information</p>
    
    
    <Box :jobs="rightsOfAppeal"/>
    
    
   </div>
  </div>
 </div>  
</template>

<script>
  import Box from "@/components/ProgramPage/Box.vue"
  const options = {
    root:document.querySelector('#divAsRoot'), 
    threshold:0, 
  };

  export default {
   name: "SectionTwo",
   components:{Box},
   props:['whoCanApply', 'whatCanYouApplyFor', 'howDoYouApply', 
   'howDoYouReport', 'applicantSeminar', 'rightsOfAppeal'],
   data(){ return{
       isOver: false,
       deadline: this.deadline,
       observer: null,
       activeSection:1,
       jobs:"asda"
   }},
   mounted(){
     this.observer = new IntersectionObserver(this.callback, options);
     this.observer.observe(this.$refs.whoCanApply);
     this.observer.observe(this.$refs.whatCanYouApplyFor);
     this.observer.observe(this.$refs.howDoYouApply);
     this.observer.observe(this.$refs.howDoYouReport);
     this.observer.observe(this.$refs.applicantSeminar);
     this.observer.observe(this.$refs.legalInformation);
   },
   methods:{
      callback(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if(entry.target.innerText== "Who can apply?"){
              this.activeSection=1
            }else if(entry.target.innerText== "What can you apply for?"){
              this.activeSection=2
            }else if(entry.target.innerText== "How do you apply?"){
              this.activeSection=3
            }else if(entry.target.innerText== "How do you report?"){
              this.activeSection=4
            }else if(entry.target.innerText== "Applicant Seminar 2019"){
              this.activeSection=5
            }else if(entry.target.innerText== "Legal Information"){
              this.activeSection=6
            }
          }
        });
      }
    }
  };
</script>

<style scoped>
  .active{
    font-weight: 600;
    color:#23099F;
    border-color: #23099F;
    border-bottom-width: medium;
    width:100%;
    transition: width .3s;
    
    
  }
  .rotate{
    transform: rotate(0deg);
    margin-right:85px;
    transition: .3s;
  }
</style>
