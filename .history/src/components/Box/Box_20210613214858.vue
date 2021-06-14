<template>
  <div
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    :class="style.main"
  >
    <div :class="[style.shadow,{'top-0':props.topBottom,'bottom-0':!props.topBottom, 'right-0':props.rightLeft, 'left-0':!props.rightLeft}]"/>
    <button :class="[{'':!props.topBottom, '':props.topBottom, 'ml-3':!props.rightLeft, 'mr-3':props.rightLeft},style.mainBox]">
      
        <p :class="style.primaryText"> {{props.primary}} </p>
        <p :class="style.secondaryText"> {{props.secondary}} </p>
        <p :class="style.tertiaryText">{{props.tertiary}}
          <i :class="[style.icon,{ move: isActive }]"/>
        </p>
    sadasd
      
    </button>
  </div>
</template>

<script>
  export default {
    name: "Box",
    
    props: ['props','primary', 'secondary', 'tertiary', 'rightLeft', 'topBottom','contentFor'],
    data() {
      return {
        contentFor:'',
        isActive: false,
        top:false,
        bottom:false,
        style:{
          main:"relative bg-red-500  w-full h-full",
          shadow:"shadow absolute bg-blue-900",
          mainBox:"mainBox relative z-20 text-left text-3xl bg-white ring-2 ring-blue-900 px-8",
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
