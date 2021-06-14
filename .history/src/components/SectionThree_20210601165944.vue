<template>
  <section class="sectionThree w-full pt-16 px-24 mb-24 relative">
    <h1 class="text-4xl text-blue-900 font-bold">News</h1>
    <div class="w-2/3 bg-green-400 absolute left-20 mt-8">
      <BulletinBottomLeft class="bg-green-400" />
    </div>
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
