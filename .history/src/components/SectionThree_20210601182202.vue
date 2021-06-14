<template>
  <section class="sectionThree w-full h-full pt-16 mb-24 relative">
    <h1 class="text-4xl pl-24 text-blue-900 font-bold">News</h1>
    <div class="w-2/3 bg-green-400 mt-8">
      <BulletinBottomLeft class="bg-green-400 absolute left-20" />
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
