<template>
  <div class="h-screen pt-24 pb-24 px-24 flex flex-col bg-red-50">
    <div class="h-1/2 flex mb-3">
      <BoxTopLeft {{BoxTopLeft}} class="mr-4"/>
      <BoxTopRight />
    </div>
    <div class="h-1/2 flex">
      <BoxBottomLeft class="mr-4"/>
      <BoxBottomRight />
    </div>
  </div>
</template>

<script>
import BoxTopLeft from "@/components/Box/BoxTopLeft.vue";
import BoxTopRight from "@/components/Box/BoxTopRight.vue";
import BoxBottomRight from "@/components/Box/BoxBottomRight.vue";
import BoxBottomLeft from "@/components/Box/BoxBottomLeft.vue";
export default {
  name: "SectionTwo",
  components: {
    BoxTopLeft,
    BoxTopRight,
    BoxBottomRight,
    BoxBottomLeft,
  },
  data() {
    return{
      BoxTopLeft:{
        primary:"Programmes",
        secondary:"and grants",
        tertiary:"Apply for funding"
      },
      BoxTopRight:{
        primary:"Events",
        secondary:"",
        tertiary:"Register for conferences, seminars and other events"
      },
      BoxBottomRight:{
        primary:"Resources and",
        secondary:"tools",
        tertiary:""
      },
      BoxBottomLeft:{
        primary:"Reports",
        secondary:"and publication",
        tertiary:""
      },
    }
  }
};
</script>

<style>
.secondaryColor {
  color: #0f5b7d;
}
</style>
