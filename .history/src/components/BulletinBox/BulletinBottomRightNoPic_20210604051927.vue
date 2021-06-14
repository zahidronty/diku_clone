<template>
  <div class="sectionThree mt-8 mr-24 pb-24">
    <div class="relative flex flex-col">
      <div class="borders w-full absolute right-0 bottom-0 bg-blue-500 "></div>
      <div class="main z-20 h-full bg-white pt-6 pl-4  mb-3 mr-3 text-left font-normal">
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
