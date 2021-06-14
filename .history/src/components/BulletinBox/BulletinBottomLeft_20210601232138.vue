<template>
  <div class="sectionThree mt-8 mr-24 relative flex flex-row">
    <img class= "shadow-sm w-1/3 h-2/3 absolute right-5 top-10 z-50" src="@/assets/Bulletine1.jpg"/>
    <div class="w-2/3 relative flex flex-col ">
      <div class="borders absolute left-0 bottom-0 bg-blue-500 shadow-sm "></div>
      <div class="main shadow-sm z-20 h-full tracking-tight bg-white pt-6 pl-4 pr-36 mb-3 ml-3 text-left font-normal">
        <p class="text-xl text-blue-500 font-bold mb-1">
          Report <span class="font-normal text-base text-black ml-2">5/5/21</span>
        </p>
        <p class="text-3xl font-bold mt-1 text-blue-900">Diku's report series 06/2021</p>
        <p class="subheading text-3xl  font-bold">
          Crisis and creativity. Consequences of the Covid-19 pandemic for international
          educational cooperation
        </p>
        <p class="text-xl mt-6 mb-5 -z-10">
          International educational cooperation has been hit hard by the corona pandemic.
        </p>
        <div class="flex mb-4">
        <div class="mr-6"
          @mouseover="isReportActive = true"
          @mouseleave="isReportActive = false"
        >
          <i class="fas fa-arrow-right text-xl mr-4  " :class="{ moveReport: isReportActive }"></i>
          <span class="text-xl font-semibold subheading">Read Report</span>
        </div>
       <div   
         @mouseover="isDownloadActive = true"
         @mouseleave="isDownloadActive = false"
       >
          <i class="fa fa-download text-xl mr-2 " :class="{ moveDownload: isDownloadActive }"></i>
          <span class="text-xl font-semibold subheading">Read Report</span>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BulletinBottomRight",
  data() {
    return {
      isDownloadActive: false,
      isReportActive: false,
    };
  },
};
</script>

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
.main {
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
