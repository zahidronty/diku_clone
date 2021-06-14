<template>
  <div class="relative w-full bg-white h-full mb-6">
    <div class="main flex flex-col text-left font-normal">s</div>
    <div class="borders bg-blue-900"></div>
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
  height: 90%;
  width: 90%;
}
.main {
  width: 95%;
  height: 94%;
}
</style>
