<template>
  <div class="relative bg-green-300 p-2">
    <div class="w-full h-full bg-white z-10">
      <div class="main mb-3 ml-4 flex flex-col text-left font-normal">
        <p class="text-xl text-blue-500 font-bold mb-1">
          Report <span class="font-normal text-base text-black ml-2">5/5/21</span>
        </p>
        <p class="text-3xl font-bold mt-4 text-blue-900">Diku's report series 06/2021</p>
        <p class="subheading text-3xl font-bold">
          Crisis and creativity. Consequences of the Covid-19 pandemic for international
          educational cooperation
        </p>
        <p class="text-xl mt-3">
          International educational cooperation has been hit hard by the corona pandemic.
        </p>
      </div>
    </div>
    <div class="borders bg-blue-600"></div>
  </div>
</template>

<script>
export default {
  name: "BulletinBottomLeft",
};
</script>

<style>
.subheading {
  color: #0f5b7d;
}
.borders {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 90%;
  width: 90%;
  z-index: 10;
}
.main {
  width: 95%;
  height: 94%;
}
</style>
