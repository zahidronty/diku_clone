<template>
  <div :class="style.main">
    <div :class="style.infoContainer">
      <div class="borders w-full absolute right-0 bottom-0 bg-blue-500 "></div>
      <div class="mains z-20 h-full bg-white pt-6 pl-4  mb-3 mr-3 text-left font-normal">
        <p class="text-xl text-blue-500 font-bold mb-1">
          News <span class="font-normal text-base text-black ml-2">5/5/21</span>
        </p>
        <p class="text-3xl font-bold mt-1 text-blue-900">White Paper on student mobility: A summary</p>
        
        <p class="text-xl mt-6 mb-5 -z-10">
        Artistic Research is practice-based, practice-led research in the arts which has developed rapidly in the last twenty years globally and is a key knowledge base for art education in Higher Arts Education Institutions. The Vienna Declaration is intended as a policy document addressing political decision makers, funding bodies, higher education and research institutions as well as other organisations and individuals catering for and undertaking artistic research.
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
  name: "BulletinBottomRightNoPic",
  data() {
    return {
      isDownloadActive: false,
      isReportActive: false,
      data() {
        return {
          isDownloadActive: false,
          isReportActive: false,
          style: {
            main:"sectionThree mt-8 mr-24",
            infoContainer:"relative flex flex-col",
            shadow:"borders w-full absolute left-0 bottom-0 bg-red-500",
            textContainer:"mains z-20 h-full bg-white pt-6 pl-4  mb-3 ml-3 text-left font-normal",
            infoType:"text-xl text-red-500 font-bold mb-1",
            textDate:"font-normal text-base text-black ml-2",
            title:"text-3xl font-bold mt-1 text-blue-900",
            info:"text-xl mt-6 mb-5 -z-10",
            buttonsContainer:"flex mb-4",
            reportButton:"mr-6",
            reportIcon:" fas fa-arrow-right text-xl mr-4",
            reportText:" text-xl font-semibold subheading",
          }
        };
      },
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
