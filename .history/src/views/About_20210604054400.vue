<template>
 <section>
  <SectionOne/>
  <Footer/>
 </section>
</template>

<script>
import Header from "@/components/About/SectionOne.vue";
import Footer from "@/components/Footer.vue";

export default {
 name:"About",
 components: {
  SectionOne,
  Footer,
 }
}
</script>

<style>

</style>
