<template>
 <div :class="style.header">
      <img src="@/assets/1negative-logo.png" />
      <div :class="style.iconsContainer">
        <button @click="modal(1)" :class="style.iconContainer">
          <i :class="['fas fa-times',style.icon]"/>
          <h1 :class="style.text" >Search</h1>
        </button>
        <button  @click="modal(2)" :class="style.iconContainer">
          <i :class="['fa fa-bars',style.icon]" aria-hidden="true"/>
          <h1 :class="style.text" >Menu</h1>
        </button>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
