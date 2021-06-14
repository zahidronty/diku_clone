<template>
  <div
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    class="relative w-full h-full"
  >
    <div :class="[style.shadow,{'top-0':topBottom,'bottom-0':!topBottom, 'right-0':rightLeft, 'left-0':!rightLeft}]"/>
    <button :class="[{'top-0':!topBottom, 'bottom-0':topBottom, 'right-0':!rightLeft, 'left-0':rightLeft},style.mainBox]">
      <HomeContent
        :primary = "primary"
        :secondary= "secondary"
        :tertiary = "tertiary"
        :isActive = "isActive"
      />
      
    </button>
  </div>
</template>

<script>
  import HomeContent from "@/components/Box/HomeContent.vue"
  export default {
    name: "Box",
    components:{HomeContent},
    props: ['primary', 'secondary', 'tertiary', 'rightLeft', 'topBottom'],
    data() {
      return {
        isActive: false,
        top:false,
        bottom:false,
        style:{
          shadow:"shadow absolute bg-blue-900",
          mainBox:"mainBox absolute text-left text-3xl bg-white ring-4 ring-blue-900 px-8",
          primaryText:"text-blue-900 font-bold mb-1",
          secondaryText:"secondaryColor font-bold",
          tertiaryText:"text-xl font-normal mt-4 inline",
          icon:"fas fa-arrow-right text-md",
        }
      };
    },
  };
</script>

<style scoped>
  .mainBox {
    width: 98%;
    height: 95%;
  }
  .shadow {
    width: 90%;
    height: 80%;
  }
  .move {
    transform: translateX(30px);
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
</style>
