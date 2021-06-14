<template>
  <div
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    class="relative w-full h-full"
  >
    <div :class="[style.shadow,{'bottom-0':bottom, 'top-0':top}]"/>
    <button :class="[{'top-0':bottom=false, 'bottom-0':bottom=false,'right-0':right=true,'left-0':left=true},style.mainBox]">
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
    name: "Box",
    props: ['primary', 'secondary', 'tertiary', 'right', 'left','top', 'bottom'],
    data() {
      return {
        isActive: false,
        top:false,
        bottom:false,
        style:{
          shadow:"shadows absolute bg-blue-900",
          mainBox:"buttons absolute text-left text-3xl bg-white ring-4 ring-blue-900 ml-3 px-8",
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
  .top{
    top: 0;
  }
  .bottom{
    bottom: 0;
  }
  .move {
    transform: translateX(30px);
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
</style>
