<template>
  <section class="sectionThree pt-16 pb-24 px-24 mb-24">
    <h1 class="text-4xl text-blue-900 font-bold">News</h1>
    <BulletinBottomLeft />
  </section>
</template>

<script>
import BulletinBottomLeft from "@/components/BulletinBox/BulletinBottomLeft.vue";
export default {
  name: "SectionThree",
  components: {
    BulletinBottomLeft,
  },
};
</script>

<style>
.sectionThree {
  background-color: #f9f9f8;
}
</style>
