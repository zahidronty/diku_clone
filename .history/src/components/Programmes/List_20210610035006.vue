<template>
  <router-link :to="{name:'ProgramPage', params:{title: nameOutput, id:id}}" >
    <div @mouseover="isMove=true" @mouseleave="isMove=false" class="w-full border-b-2 border-secondary z-80 px-6 py-2 flex items-center justify-between bg-white">
      <div class="w-2/3">
        <p class="text-secondary text-lg font-semibold"> {{title}} </p>
        <p class="text-medium"> {{subtitle}} </p>
      </div>
      <div class="flex ">
      <p :class="{slash:over}" class="font-semibold text-blue-900 mr-3"> Application deadline: <span class="text-black"> {{deadline}} </span></p> 
      </div>
      <i :class="{move:isMove}" class="w-auto text-3xl text-secondary text-right fa fa-arrow-right" aria-hidden="true"></i>
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
      over:true,
      nameOutput:'',
    }
    },
    
    created: function () {
      this.moment = moment;
      moment(this.deadline).isAfter(new Date()) ? this.over=true : this.over=false;
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
