<template>
  <router-link :to="{name:'ProgramPage', params:{title: nameOutput, id:id}}" >
    <div @mouseover="isMove=true" @mouseleave="isMove=false" :class="style.main">
      <div :class="style.primaryTexts">
        <p :class="style.title"> {{title}} </p>
        <p class="style.subtitle text-medium"> {{subtitle}} </p>
      </div>
      <div class="style. flex">
      <p :class="{slash:over}" class="style.deadline font-semibold text-blue-900 mr-3"> Application deadline: <span class="text-black"> {{deadline}} </span></p> 
      </div>
      <i :class="{move:isMove}" class="style.icon w-auto text-3xl text-secondary text-right fa fa-arrow-right" aria-hidden="true"></i>
    </div>
  </router-link> 
</template>

<script>

  import moment from 'moment'

  export default {
    name: "List",
    props:['title', 'subtitle', 'deadline', 'id'],
    data(){
    return{
      isMove:false,
      over:false,
      nameOutput:'',
      style: {
        main: "w-full border-b-2 border-secondary z-80 px-6 py-2 flex items-center justify-between bg-white",
        primaryTexts: "w-2/3",
        title:"text-secondary text-lg font-semibold",

      }
    }
    },
    
    created: function () {
      this.moment = moment;
      moment(this.deadline).isAfter(new Date()) ? this.over=false : this.over=true;
      for (var i = 0; i < this.title.length; i++) {
        (this.title[i] == " " ?
          this.nameOutput += "-" : this.nameOutput += this.title[i]
        )
      }    
    },
  };
</script>

<style>
 .move{
  transform: translateX(10px);
 }
 .slash{
  text-decoration: line-through;
 }
</style>
