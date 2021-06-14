<template>
 <div>
    <section v-if="show==0">
      <SectionOne @modal="modal"/>
      <SectionTwo/>
      <SectionThree/>
      <Footer/>
    </section>
    <ModalSearch @modal="modal" v-if="show==1"/>
    <ModalMenu @modal="modal" v-if="show==2"/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
