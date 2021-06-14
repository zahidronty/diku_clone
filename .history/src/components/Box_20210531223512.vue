<template>
  <div class="relative w-full h-full">
    <div class="shadows absolute right-0 bottom-0 bg-blue-900">asd</div>
    <button
      class="buttons absolute text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 mr-3 pl-12"
    >
      <p class="text-blue-900 font-bold mb-1">Programmes</p>
      <p class="secondaryColor font-bold">and grants</p>
      <p class="text-xl font-semibold mt-4 inline">
        Apply for funding
        <i class="fas fa-arrow-right text-sm Transition Property
Utilities for controlling which CSS properties transition.

Default class reference
Class
Properties
transition-none	transition-property: none;
transition-all	transition-property: all;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
transition	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
transition-colors	transition-property: background-color, border-color, color, fill, stroke;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
transition-opacity	transition-property: opacity;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
transition-shadow	transition-property: box-shadow;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
transition-transform	transition-property: transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 150ms;
Usage
Use the transition-{properties} utilities to specify which properties should transition when they change.

Hover me
<button class="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 "></i>
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Box",
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
  background: #f06d06;
  position: absolute;
}

.borders:after {
  content: "";
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  background: red;
  z-index: -1;
}
</style>
