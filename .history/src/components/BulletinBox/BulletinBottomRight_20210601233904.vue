<template>
  <div class="sectionThree mt-8 mr-24 relative flex flex-row-reverse">
    <img class= "w-1/3 h-2/3 shadow-lg absolute left-3 top-8 z-50" src="@/assets/Bulletin2.png"/>
    
    <div class="w-2/3 relative flex flex-col">
      <div class="borders shadow-lg absolute right-0 bottom-0 bg-green-300 "></div>
      <div class="main z-20 h-full tracking-tight bg-white pt-6 pl-8 mb-3 mr-3 text-left font-normal">
        <p class="text-xl text-blue-500 font-bold mb-1">
          Project Example <span class="font-normal text-base text-black ml-2">5/5/21</span>
        </p>
        <p class="text-3xl font-bold mt-1 text-blue-900">Norway and Sri Lanka unlocking potential in the Blue Economy</p>
        <p class="text-xl mt-6 mb-5 -z-10">
          Norway and Sri Lanka are working together through the Nor-Lanka-project in order to strengthen the Blue Economy. Diku will fund the project until 2023.</p>
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

<script>
export default {
  name: "BulletinBottomRight",
  data() {
    return {
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
.moveReport {
  transform: translateX(10px);
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}

</style>

