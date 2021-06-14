<template>
  <section :class="style.main">
    <p :class="style.text">News</p>
    <div :class="style.container">
      <BulletinBox :props="{
        color:'blue',
        shadowLeftRight:'left',
        pic: false,
        type: 'report',
        title: BulletineBox1.title,
        subtitle: BulletineBox1.subtitle,
        info: BulletineBox1.info
      }" />

      <BulletinBox :props="{
        color:'blue',
        pic: true,
        picName:'Bulletin2.png',
        picLeftRight:'left',
        report:true
      }" />
      <BulletinBottomRight/>
      <BulletinBottomLeftNoPic/>
      <BulletinBottomRightNoPic/>
    </div>
  </section>
</template>

<script>
import BulletinBox from "@/components/BulletinBox/BulletinBox.vue";
import BulletinBottomRight from "@/components/BulletinBox/BulletinBottomRight.vue";
import BulletinBottomRightNoPic from "@/components/BulletinBox/BulletinBottomRightNoPic.vue";
import BulletinBottomLeftNoPic from "@/components/BulletinBox/BulletinBottomLeftNoPic.vue";

export default {
  name: "SectionThree",
  components: {
    BulletinBox,
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
      },
      BulletineBox1:{
        title:"Diku's report series 06/2021",
        subtitle:"Crisis and creativity. Consequences of the Covid-19 pandemic for international educational cooperation",
        info:"International educational cooperation has been hit hard by the corona pandemic.",
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
