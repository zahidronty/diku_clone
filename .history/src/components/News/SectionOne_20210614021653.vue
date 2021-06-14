<template>
  <div :class="style.main">    
    <Header class="pr-24" @modal="modal"/>
    <div :class="style.textsContainer">
      <p :class="style.heading">News</p>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  export default {
    name: "SectionOne",
    components:{Header},
    data() {
      return {
        canvasImage: "section1.png",
        style: {
          main:"pt-12 pl-24 flex flex-col ",
          textsContainer:"text-5xl font-semibold",
          heading:"text-blue-900 mb-4",
          subheading:"text-secondary"      
        }
      };
    },
    methods:{
      modal(x){
        this.$emit('modal',x)
      },
    },
  };
</script>
