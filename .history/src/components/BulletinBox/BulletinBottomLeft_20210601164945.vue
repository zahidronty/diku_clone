<template>
  <div class="relative bg-blue-900 flex flex-col">
    <div class="bordersY absolute bg-white"></div>
    <div class="absolute bg-white"></div>
    <div class="main h-full bg-white pt-6 mb-4 ml-4 text-left font-normal">
      <p class="text-xl text-blue-500 font-bold mb-1">
        Report <span class="font-normal text-base text-black ml-2">5/5/21</span>
      </p>
      <p class="text-3xl font-bold mt-4 text-blue-900">Diku's report series 06/2021</p>
      <p class="subheading text-3xl font-bold">
        Crisis and creativity. Consequences of the Covid-19 pandemic for international
        educational cooperation
      </p>
      <p class="text-xl mt-3 -z-10">
        International educational cooperation has been hit hard by the corona pandemic.
      </p>
    </div>
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
.bordersY {
  height: 10%;
  width: 100%;
}
.bordersX {
  height: 10%;
  width: 100%;
}
.main {
  height: 94%;
}
</style>
