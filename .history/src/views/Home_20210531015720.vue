<template>
  <div>
    <Header class="h-screen bg-green-100" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/SectionOne.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
