<template>
  <section :class="style.main">
    <h1 :class="style.text">News</h1>
    <div :class="style.container">
      <BulletinBottomLeft />
      <BulletinBottomRight/>
      <BulletinBottomLeftNoPic/>
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
    BulletinBottomLeftNoPic,
  },
  data(){
    return{
      style:{
        main:"sectionThree w-full h-full pt-16 relative",
        text: "text-4xl pl-24 text-blue-900 font-bold",
        container:"pl-16 mt-12",
      }
    }
  }
};
</script>

<style>
.sectionThree {
  background-color: #f9f9f8;
}
</style>
