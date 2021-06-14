<template>
 <section>
  <SectionOne/>
  <Footer/>
 </section>
</template>

<script>
import SectionOne from "@/components/About/SectionOne.vue";
import SectionTwo from "@/components/About/SectionTwo.vue";
import Footer from "@/components/Footer.vue";

export default {
 name:"About",
 components: {
  SectionOne,
  SectionTwo
  Footer,
 }
}
</script>

<style>

</style>
