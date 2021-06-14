<template>
  <div>
    <SectionOne />
  </div>
</template>

<script>
// @ is an alias to /src
import SectionOne from "@/components/SectionOne.vue";

export default {
  name: "Home",
  components: {
    SectionOne,
  },
};
</script>
