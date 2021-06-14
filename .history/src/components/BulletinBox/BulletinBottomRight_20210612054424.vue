
<script>
export default {
  name: "BulletinBottomRight",
  data() {
    return {
      isReportActive: false,
      style:{
        main:"sectionThree mt-8 mr-24 relative flex flex-row-reverse",
        image:"w-1/3 h-2/3 shadow-lg absolute left-3 top-8 z-50",
        infoContainer:" w-2/3 relative flex flex-col",
        shadow:" borders w-full shadow-lg absolute right-0 bottom-0 bg-green-300",
        textsContainer:" mains z-20 h-full tracking-tight bg-white pt-6 pl-4 pr-36 mb-3 ml-3 text-left font-normal",
        infoType:" text-xl text-green-300 font-bold mb-1",
        textDate:"font-normal text-base text-black ml-2",
        title:"text-3xl font-bold mt-1 text-blue-900",
        subtitle:" subheading text-3xl font-bold",
        info:" text-xl mt-6 mb-5 -z-10",
        buttonsContainer:"flex mb-4",
        reportButton:"mr-6",
        reportIcon:" fas fa-arrow-right text-xl mr-4",
        reportText:" text-xl font-semibold subheading",
        downloadIcon:"fa fa-download text-xl mr-2",
        downloadText:"text-xl font-semibold subheading",
        textsContainer:"mains z-20 h-full tracking-tight bg-white pt-6 pl-8 mb-3 mr-3 text-left font-normal",

      }
    }
  },
};
</script>

<template>
  <div :class="style.main">
    <img :class="style.image" src="@/assets/Bulletin2.png"/>
    <div :class="style.infoContainer">
      <div :class="style.shadow"/>
      <div :class="style.textsContainer">
        <p :class="style.infoType">Project Example <span :class="style.textDate">5/5/21</span></p>
        <p :class="style.title">Norway and Sri Lanka unlocking potential in the Blue Economy</p>
        <p :class="style.subtitle">Norway and Sri Lanka are working together through the Nor-Lanka-project in order to strengthen the Blue Economy. Diku will fund the project until 2023.</p>
        <div class="flex mb-4">
        <div class="mr-6"
          @mouseover="isReportActive = true"
          @mouseleave="isReportActive = false"
        >
          <i class="fas fa-arrow-right text-xl mr-4  " :class="{ moveReport: isReportActive }"></i>
          <span class="text-xl font-semibold subheading">Read about the project</span>
        </div>
       
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.subheading {
  color: #0f5b7d;
}
.sectionThree {
  background-color: #f9f9f8;
}
.borders {
  height: 90%;
}|
.mains {
  height: 94%;
}
.moveReport {
  transform: translateX(10px);
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}

</style>

