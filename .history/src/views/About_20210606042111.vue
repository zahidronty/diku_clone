<template>
 <section v-if="show==0">
  <SectionOne/>
  <SectionTwo/>
  <Footer/>
 </section>
 <ModalSearch @modal="modal" v-if="show==1"/>
 <ModalMenu @modal="modal" v-if="show==2"/>
</template>

<script>
import SectionOne from "@/components/About/SectionOne.vue";
import SectionTwo from "@/components/About/SectionTwo.vue";
import Footer from "@/components/Footer.vue";

export default {
 name:"About",
 components: {
  SectionOne,
  SectionTwo,
  Footer,
 }
}
</script>

<style>

</style>
