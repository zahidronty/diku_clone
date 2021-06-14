<script>
export default {
  name: "BulletinBottomRight",
  data() {
    return {
      isDownloadActive: false,
      isReportActive: false,
      style:{
        main:"sectionThree mt-8 mr-24 relative flex flex-row",
        image:" shadow-lg w-1/3 h-2/3 absolute right-5 top-10 z-50",
        infoContainer:" w-2/3 relative flex flex-col",
        shadow:" borders absolute left-0 bottom-0 bg-blue-500 shadow-lg",
        textsContainer:" mains z-20 h-full tracking-tight bg-white pt-6 pl-4 pr-36 mb-3 ml-3 text-left font-normal",
        infoType:" text-xl text-blue-500 font-bold mb-1",
         textDate:"font-normal text-base text-black ml-2",
      }
    };
  },
};
</script>
<template>
  <div :class="style.main">
    <img :class="style.image" src="@/assets/Bulletine1.jpg"/>
    <div :class="style.infoContainer">
      <div :class="style.shadow"></div>
      <div :class="style.textsContainer">
        <p :class="style.infoType">
          Report <span :class="style.textDate">5/5/21</span>
        </p>
        <p class="style. text-3xl font-bold mt-1 text-blue-900">Diku's report series 06/2021</p>
        <p class="style. subheading text-3xl font-bold">
          Crisis and creativity. Consequences of the Covid-19 pandemic for international
          educational cooperation
        </p>
        <p class="style. text-xl mt-6 mb-5 -z-10">
          International educational cooperation has been hit hard by the corona pandemic.
        </p>
        <div class="style. flex mb-4">
        <div class="style. mr-6"
          @mouseover="isReportActive = true"
          @mouseleave="isReportActive = false"
        >
          <i class="style. fas fa-arrow-right text-xl mr-4  " :class="{ moveReport: isReportActive }"></i>
          <span class="style. text-xl font-semibold subheading">Read Report</span>
        </div>
       <div   
         @mouseover="isDownloadActive = true"
         @mouseleave="isDownloadActive = false"
       >
          <i class="style. fa fa-download text-xl mr-2 " :class="{ moveDownload: isDownloadActive }"></i>
          <span class="style. text-xl font-semibold subheading">Read Report</span>
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
  width: 90%;
}|
.mains {
  height: 94%;
}

.moveDownload {
  transform: translateY(10px);
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}

.moveReport {
  transform: translateX(10px);
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}

</style>
