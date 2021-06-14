<template>
  <div class="h-screen pt-24 pb-24 px-24 flex flex-col bg-red-50">
    <div class="h-1/2 flex mb-3">
      <>
        <router-link to="/programmes" BoxTopLeft class="mr-4"
          :primary="BoxTopLeft.primary"
          :secondary="BoxTopLeft.secondary"
          :tertiary="BoxTopLeft.tertiary"   
        >
    <router-link/>
      <router-link to="/programmes">
      <BoxTopRight
        :primary="BoxTopRight.primary"
        :secondary="BoxTopRight.secondary"
        :tertiary="BoxTopRight.tertiary"
      />
      </router-link>
    </div>
    <div class="h-1/2 flex">
      <BoxBottomLeft class="mr-4"
        :primary="BoxBottomLeft.primary"
        :secondary="BoxBottomLeft.secondary"
        :tertiary="BoxBottomLeft.tertiary"
      />
      <BoxBottomRight 
        :primary="BoxBottomRight.primary"
        :secondary="BoxBottomRight.secondary"
        :tertiary="BoxBottomRight.tertiary"
      />
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

    data(){
      return{
        BoxTopLeft: {
          primary:'Programme',
          secondary: 'and grants',
          tertiary: 'Apply for funding',
        },
        BoxBottomLeft: {
          primary:'Reports',
          secondary: 'and publication',
          tertiary: '',
        },
        BoxTopRight: {
          primary:'Events',
          secondary: '',
          tertiary: 'Register for conferences, seminars and other events',
        },
        BoxBottomRight: {
          primary:'Resources and',
          secondary: 'tools',
          tertiary: '',
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
