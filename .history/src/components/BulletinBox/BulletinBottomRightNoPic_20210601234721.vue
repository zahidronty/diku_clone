<template>
  <div class="sectionThree mt-8 mr-48">
    <div class="relative flex flex-col">
      <div class="borders absolute left-0 bottom-0 bg-blue-500 "></div>
      <div class="main z-20 h-full bg-white pt-6 pl-4  mb-3 ml-3 text-left font-normal">
        <p class="text-xl text-red-500 font-bold mb-1">
          News <span class="font-normal text-base text-black ml-2">5/5/21</span>
        </p>
        <p class="text-3xl font-bold mt-1 text-blue-900">White Paper on student mobility: A summary</p>
        
        <p class="text-xl mt-6 mb-5 -z-10">
        The overall goal of this White Paper, published October 2020, is to contribute to a cultural change in the higher education sector where international student mobility becomes a natural and integral part of all study programmes. Here you will find a summary of the paper.</p>
        <div class="flex mb-4">
        <div class="mr-6"
          @mouseover="isReportActive = true"
          @mouseleave="isReportActive = false"
        >
          <i class="fas fa-arrow-right text-xl mr-4  " :class="{ moveReport: isReportActive }"></i>
          <span class="text-xl font-semibold subheading">Read Article</span>
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
