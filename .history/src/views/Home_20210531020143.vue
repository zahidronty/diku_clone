<template>
  <div>
    <SectionOne class="h-screen bg-green-100" />
  </div>
</template>

<script>
// @ is an alias to /src
import SectionOne from "@/components/SectionOne.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    SectionOne,
    Header,
  },
};
</script>
