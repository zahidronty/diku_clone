<template>
  <div
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    class="relative w-full h-full"
  >
    <div :class="[style.shadow,{'bottom-0':bottom=true}]"/>
    <button :class="[{'text-3xl':topBottom=true},style.mainBox]">
      <p :class="style.primaryText"> {{primary}} </p>
      <p :class="style.secondaryText"> {{secondary}} </p>
      <p :class="style.tertiaryText">{{tertiary}}
        <i :class="[style.icon,{ move: isActive }]"/>
      </p>
    </button>
  </div>
</template>

<script>
  export default {
    name: "BoxTopRight",
    props: ['primary', 'secondary', 'tertiary'],
    data() {
      return {
        isActive: false,
        bottom: false,
        right:false,
        left:false,
        right:false,
        leftRight:"left",
        style:{
          shadow:"shadows absolute bg-blue-900",
          mainBox:"buttons absolute right-0 text-left text-3xl bg-white ring-4 ring-blue-900 ml-3 px-8",
          primaryText:"text-blue-900 font-bold mb-1",
          secondaryText:"secondaryColor font-bold",
          tertiaryText:"text-xl font-normal mt-4 inline",
          icon:"fas fa-arrow-right text-md",
        }
      };
    },
  };
</script>

<style>
  .buttons {
    width: 98%;
    height: 96%;
  }
  .shadows {
    width: 90%;
    height: 90%;
  }
  .move {
    transform: translateX(30px);
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
</style>
