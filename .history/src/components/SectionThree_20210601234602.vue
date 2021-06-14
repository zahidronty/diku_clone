<template>
  <section class="sectionThree w-full h-full pt-16 mb-24 relative">
    <h1 class="text-4xl pl-24 text-blue-900 font-bold">News</h1>
    <div class="pl-16 mt-12">
      <BulletinBottomLeft />
      <BulletinBottomRight/>
      <BulletinBottomRightNoPic/>
    </div>
  </section>
</template>

<script>
import BulletinBottomLeft from "@/components/BulletinBox/BulletinBottomLeft.vue";
import BulletinBottomRight from "@/components/BulletinBox/BulletinBottomRight.vue";
import BulletinBottomRightNoPic from "@/components/BulletinBox/BulletinBottomRightNoPic.vue";
import BulletinBottomLeftNoPic from "@/components/BulletinBox/BulletinBottomLeftNoPic.vue";

export default {
  name: "SectionThree",
  components: {
    BulletinBottomLeft,
    BulletinBottomRight,
    BulletinBottomRightNoPic,
  },
};
</script>

<style>
.sectionThree {
  background-color: #f9f9f8;
}
</style>
