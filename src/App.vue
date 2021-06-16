<template>
  <div id="app">
    <TopNav class="topNav" :hide="items.isHidden" :PYO="items.PYO" :SW="SW"/>
    <Index  @getSW="GetSW"/>
    <Policies/>
    <Events/>
    <Leaders/>
    <TimeLine/>
    <Footer></Footer>
  </div>
</template>
<script>
  import Index from "@/components/Index";
  import TopNav from "@/components/TopNav";
  import Policies from "@/components/Policies";
  import Events from "@/components/Events";
  import Leaders from "@/components/Leaders";
  import TimeLine from "@/components/TimeLine";
  import Footer from "@/components/Footer";
  export default {
    name: 'App',
    data () {
      return {
        items:{
          isHidden:true,
          PYO:0,
        },
        SW:0
      }
    },
    components: {
      Index,
      TopNav,
      Events,
      Policies,
      Leaders,
      TimeLine,
      Footer
    },
    mounted() {
      document.onmousemove=(e)=> {
        this.$set(this.items,'isHidden',e.clientY > 64);
        // console.log(e.clientY,this.items);
      };

      window.addEventListener('scroll', this.handleScroll, true);

    },
    methods:{
      handleScroll() {
        this.$set(this.items,'PYO',window.pageYOffset);
        // console.log("PHO",this.items.PYO)
        // console.log('滚动高度', window.pageYOffset);
      },
      GetSW(data){
        this.SW = data;
        // console.log(data)
      },

    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @font-face{
    font-family:'FZYaoti';
    src:url('./assets/font/FZYTK.TTF') format("truetype");
  }
  @font-face{
    font-family:'Baloo';
    src:url('./assets/font/Baloo.ttf') format("truetype");
  }
  @font-face {
    font-family: 'KongXin';
    src: url("./assets/font/kongxin.TTF") format("truetype");
  }
  @font-face {
      font-family: 'ThinItalic';
    src: url("./assets/font/ThinItalic.ttf") format("truetype");
  }
  @font-face {
    font-family: 'FanTi';
    src: url("./assets/font/fanti.ttf") format("truetype");
  }
  #app {
    /*background-color: #ebebeb;*/
    width: 100%;
    height: 600vh;
  }
</style>
