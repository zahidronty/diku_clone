<template>
  <div>
    <SectionOne />
  </div>
</template>

<script>
// @ is an alias to /src
import SectionOne from "@/components/SectionOne.vue";
import SectionTwo from "@/components/SectionTwo.vue";

export default {
  name: "Home",
  components: {
    SectionOne,
    SectionTwo,
  },
};
</script>
