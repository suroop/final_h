<template>
    <div id="topNav" :style="{top:hide?'-64px':PYO+'px'}" ref="nav">
        <a href="#Index"><img src="../assets/img/logo.png" alt="logo"></a>
        <ul >
            <li><a href="#Policies">Policies</a></li>
            <li><a href="#Events">Events</a></li>
            <li><a href="#Leaders">Leaders</a></li>
            <li><a href="#TimeLine">TimeLine</a></li>
            <li><button><svg t="1623026120416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2476" width="32" height="32"><path d="M511.980924 0C229.220134 0 0.025435 229.232852 0.025435 512.006359s229.194699 511.993641 511.955489 511.993641S1023.974565 794.843453 1023.974565 512.006359 794.932476 0 511.980924 0z m0 970.599237c-118.577926 0.15261-226.307828-45.325153-307.674363-119.137495C252.175213 727.771383 371.376296 639.410226 511.980924 639.410226s259.792993 88.208547 307.763385 211.911624c-81.455557 73.952235-189.198177 119.277388-307.763385 119.277387z m-108.09871-426.837293a152.82614 152.82614 0 0 1-44.765583-108.098709 152.838858 152.838858 0 1 1 44.765583 108.098709z m454.396105 268.529913C813.245669 713.960183 728.737913 637.858692 624.136514 605.657994a203.861449 203.861449 0 1 0-224.298463 0.114457c-104.614116 32.213415-189.121872 108.314907-234.154523 206.633863a455.807747 455.807747 0 0 1-112.448093-300.260063C53.235435 258.775593 258.597548 53.41348 511.980924 53.41348s458.745489 205.336678 458.745488 458.732771c0 114.826265-42.616327 219.618425-112.448093 300.145606z" p-id="2477" fill="#d81e06"></path></svg></button></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TopNav",
        props:{
            hide:{},
            PYO:{},
            SW:{}
        },
        data(){
            return {
                ST:window.screenTop,
                IH:window.innerHeight,
            }
        },
        mounted () {
            // console.log(this.ST)
        },
        watch:{
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "src/common/scss/mixins";
    #topNav{
        position: absolute;
        transition: 0.4s;
        z-index: 99999999;
        width: 100%;
        height: 64px;
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        a{
            color: #E12927;
        }
        img{
            height: -webkit-calc(64px*1.2);
            width: auto;
            display: none;
            @include MQ (M){
                &{
                    display: inline-block;
                }
            }
            @include MQ (L){
                &{
                    display: inline-block;
                }
            }
        }
        ul{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            height: 100%;
            width: 100%;
            margin: 0 !important;
            li{
                cursor: pointer;
                font-size: 25px;
                font-weight: 800;
                font-family: 'FZYaoti',sans-serif;
                margin-left: 0 !important;
                button{
                    background-color: transparent;
                    border: none;
                    outline: none;
                    display: grid;
                    place-items: center;
                    cursor: pointer;
                }
            }
        }
    }
</style>