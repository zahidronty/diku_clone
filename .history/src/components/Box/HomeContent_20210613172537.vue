<template>
 <div></div>
     <p :class="style.primaryText"> {{primary}} </p>
      <p :class="style.secondaryText"> {{secondary}} </p>
      <p :class="style.tertiaryText">{{tertiary}}
        <i :class="[style.icon,{ move: isActive }]"/>
      </p>
  </div>
</template>

<script>
  export default {
    name: "HomeContent",
    props: ['primary', 'secondary', 'tertiary'],
    data() {
      return {
        isActive: false,
        style:{
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
  
  .move {
    transform: translateX(30px);
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
</style>
