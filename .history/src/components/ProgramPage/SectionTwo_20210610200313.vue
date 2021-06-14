<template>
 <div class="sectionTwo px-24 pt-12 bg-gray-100 h-full flex pb-24">

  <div class="w-2/5 pr-12 ">
    <ul class="sticky top-0 flex flex-col text-xl font-light">
      <li :class="{active : activeSection==1 }" class="style.li"><p class="">Who Can Apply?</p><i :class="{rotate : activeSection==1}" class="origin-center transform rotate-45 fa fa-arrow-right" aria-hidden="true"></i></li>
      <li :class="{active : activeSection==2}" class="style.li"><p class="text-left">What can you apply for?</p><i :class="{rotate : activeSection==2}" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
      <li :class="{active : activeSection==3}" class="style.li">How do you apply?<i :class="{rotate : activeSection==3}" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
      <li :class="{active : activeSection==4}" class="style.li">How do you report? <i :class="{rotate : activeSection==4}" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
      <li :class="{active : activeSection==5}" class="style.li">Applicant Seminar 2019 <i :class="{rotate : activeSection==5}" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
      <li :class="{active : activeSection==6}" class="w-4/5 text-purple-400 border-purple-400 border-b-2 py-2 mb-4 flex flex-wrap justify-between">Legal Information <i :class="{rotate : activeSection==6}" class="origin-center transform rotate-45 fa fa-arrow-right ml-4" aria-hidden="true"></i></li>
    </ul>
  </div>

  <div class="w-3/5 mt-5 leading-normal whitespace-pre-line">

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
  
    <div class="relative mt-24 ml-2 pb-2 pr-1 ">
        <div class="blueShadow bg-blue-900"/>
        <div class="mainBox shadow-lg">
          <div class="py-6 text-xl relative bg-white ring-4 ring-blue-900">
            <div @click="accordion(1)" :class="{activeAccordion: accordionState==1}" class="flex justify-between items-center mx-6 mt-6 py-4 px-3 border-blue-900 border-t-2 border-b-2">
              <p class="">Right of Appeal</p>
              <i class="text-2xl fas fa-chevron-down"></i>
            </div>
            <div v-if="accordionState==1" class="bg-blue-200 px-10 py-4">{{rightsOfAppeal}}</div>

            <div @click="accordion(2)" :class="{activeAccordion: accordionState==2}" class="flex justify-between items-center mx-6 py-4 px-3 border-blue-900 border-b-2">
              <p class="">Public information and rights of access</p>
              <i class="text-2xl fas fa-chevron-down"></i>
            </div>
            <div v-if="accordionState==2" class="bg-blue-200 px-10 py-4">{{rightsOfAppeal}}</div>

            <div @click="accordion(3)" class="flex justify-between items-center mx-6 py-4 px-3 border-blue-900 ">
              <p class="">Conflicts of interest</p>
              <i class="text-2xl fas fa-chevron-down"></i>
            </div>
            <div v-if="accordionState==3" class="bg-blue-200 px-10 py-4">{{rightsOfAppeal}}</div>

          </div>
        </div>
      </div>
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
  const style ={
    li:"w-4/5 text-purple-400 border-purple-400 border-b-2 py-2 mb-4 flex flex-wrap justify-between"
  }

  export default {
    name: "SectionTwo",
    components:{Box},
    props:[
            'whoCanApply', 'whatCanYouApplyFor', 'howDoYouApply', 
            'howDoYouReport', 'applicantSeminar', 'rightsOfAppeal'
          ],
    data(){ return{
        isOver: false,
        deadline: this.deadline,
        observer: null,
        activeSection:1,
        accordionState:0,
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
      accordion(x){
        console.log(x)
        if( x==this.accordionState ){this.accordionState=0}
        else if( x==1){this.accordionState=1}
        else if( x==2){this.accordionState=2}
        else if( x==3){this.accordionState=3}
      },
      
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
  .activeAccordion{
    border-bottom: none;
  }
  .sectionTwo{
    position:relative;
    z-index:0;
  }
  .active{
    font-weight: 600;
    color:#23099F;
    border-color: #23099F;
    border-bottom-width: medium;
    width:100%;
    transition: width .3s;
  }
  .mainBox{
    width:99%;
    position: relative;
    z-index:20;
  }
  .blueShadow{
    right:0; 
    bottom:0;
    position:absolute; 
    z-index:1;
  }
  .rotate{
    transform: rotate(0deg);
    margin-right:85px;
    transition: .3s;
  }
</style>
