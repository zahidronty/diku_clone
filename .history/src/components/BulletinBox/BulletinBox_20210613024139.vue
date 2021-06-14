<template>
  <div :class="[style.main,{'flex-row-reverse':props.picLeftRight=='right'}]">
    
    <div :class="[style.infoContainer,{'w-2/3':props.pic,'w-full':!props.pic}]">
      <div :class="[style.shadow,{'bg-red-500':props.color=='red','bg-green-300':props.color=='green','bg-blue-500':props.color=='blue'},
                    {'left-0':props.shadowLeftRight=='left','right-0':props.shadowLeftRight=='right'}]"/>
        <div :class="style.textsContainer">
          <p :class="[style.infoType,{'text-red-500':props.color=='red'},{'text-blue-500':props.color=='blue'},{'text-green-300':props.color=='green'}]">Report <span :class="style.textDate">5/5/21</span></p>
          <p :class="style.title">Diku's report series 06/2021</p>
          <p :class="style.subtitle">Crisis and creativity. Consequences of the Covid-19 pandemic for international educational cooperation</p>
          <p :class="style.info">International educational cooperation has been hit hard by the corona pandemic.</p>
          <div :class="style.buttonsContainer">
            <div :class="style.reportButton" @mouseover="isReportActive = true" @mouseleave="isReportActive = false">
              <i :class="[style.reportIcon,{ moveReport: isReportActive }]" ></i>
              <span :class="style.reportText">Read Report</span>
            </div>
            <div @mouseover="isDownloadActive = true" @mouseleave="isDownloadActive = false">
              <i :class="[style.downloadIcon,{ moveDownload: isDownloadActive }]"></i>
              <span :class="style.downloadText">Download Report</span>
            </div>
          </div>
      </div>
    </div>
    <img v-if="props.pic==true" :class="[style.image,{'right-0':props.picLeftRight=='left','right-5':props.picLeftRight=='right'}]" src="@/assets/Bulletine1.jpg"/>
  </div>
</template>

<script>
  
  export default {
    name: "BulletinBox",
    props:['props'],
    created(){
      console.log(this.props);
    },
    data() {
      return {
        isDownloadActive: false,
        isReportActive: false,
        red: false,

        style:{
          main:"sectionThree mt-8 mr-24 relative flex",
          image:"shadow-lg w-1/3 h-2/3 absolute top-10 z-50",
          infoContainer:"relative flex flex-col",
          shadow:"borders absolute bottom-0 shadow-lg",
          textsContainer:" mains z-20 h-full tracking-tight bg-white pt-6 pl-4 pr-36 mb-3 ml-3 text-left font-normal",
          infoType:"text-xl font-bold mb-1",
          textDate:"font-normal text-base text-black ml-2",
          title:"text-3xl font-bold mt-1 text-blue-900",
          subtitle:"subheading text-3xl font-bold",
          info:"text-xl mt-6 mb-5 -z-10",
          buttonsContainer:"flex mb-4",
          reportButton:"mr-6",
          reportIcon:"fas fa-arrow-right text-xl mr-4",
          reportText:"text-xl font-semibold subheading",
          downloadIcon:"fa fa-download text-xl mr-2",
          downloadText:"text-xl font-semibold subheading",
        }
      };
    },
  };
</script>

<style>
  .subheading {
    color: #0f5b7d;
  }
  .sectionThree {
    background-color: #f9f9f8;
  }
  .borders {
    height: 90%;
    width: 90%;
  }|
  .mains {
    height: 94%;
  }
  .moveDownload {
    transform: translateY(10px);
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
  .moveReport {
    transform: translateX(10px);
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
</style>
