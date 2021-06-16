<template>
    <div id="TimeLine">
        <header>
            <h1>回顾党的百年历程</h1>
        </header>
<!--        http://dangshi.people.com.cn/n1/2018/1022/c85037-30354760.html-->
        <section id="cd-timeline" class="cd-container">
            <div class="cd-timeline-block">
                <div class="cd-timeline-img">
                    <img :src="info[0].img" alt="Picture1">
                </div>
                <div class="cd-timeline-content">
                    <h2>{{info[0].title}}</h2>
                    <p>{{info[0].description}}</p>
                    <a href="#TimeLine" class="cd-read-more" @click="toggleModal(0)">阅读更多</a>
                    <Modal v-show="items.showModal" @closeMe="closeMe" :info="info[items.num]"></Modal>
                    <span class="cd-date">{{info[0].date}}</span>
                </div>
            </div>

            <div class="cd-timeline-block">
                <div class="cd-timeline-img">
                    <img :src="info[1].img" alt="Picture2">
                </div>
                <div class="cd-timeline-content">
                    <h2>{{info[1].title}}</h2>
                    <p>{{info[1].description}}</p>
                    <a href="#" class="cd-read-more" @click="toggleModal(1)">阅读更多</a>
                    <span class="cd-date">{{info[1].date}}</span>
                </div>
            </div>

            <div class="cd-timeline-block">
                <div class="cd-timeline-img">
                    <img :src="info[2].img" alt="Picture3">
                </div>
                <div class="cd-timeline-content">
                    <h2>{{info[2].title}}</h2>
                    <p>{{info[2].description}}</p>
                    <a href="#" class="cd-read-more" @click="toggleModal(2)">阅读更多</a>
                    <span class="cd-date">{{info[0].date}}</span>
                </div>
            </div>

            <div class="cd-timeline-block">
                <div class="cd-timeline-img">
                    <img :src="info[3].img" alt="Picture4">
                </div>
                <div class="cd-timeline-content">
                    <h2>{{info[3].title}}</h2>
                    <p>{{info[3].description}}</p>
                    <a href="#" class="cd-read-more" @click="toggleModal(3)">阅读更多</a>
                    <span class="cd-date">{{info[3].date}}</span>
                </div>
            </div>

            <div class="cd-timeline-block">
                <div class="cd-timeline-img">
                    <img :src="info[4].img" alt="Picture5">
                </div>
                <div class="cd-timeline-content">
                    <h2>{{info[4].title}}</h2>
                    <p>{{info[4].description}}</p>
                    <a href="#" class="cd-read-more" @click="toggleModal(4)">阅读更多</a>
                    <span class="cd-date">{{info[4].date}}</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Modal from "@/components/Modal";
    export default {
        name: "TimeLine",
        components:{
            Modal,
        },
        data(){
            return {
                info:[
                    {
                        title:"十月革命的曙光照亮了世界",
                        description:"1917年，在十月革命的影响下，中国以李大钊、陈独秀、毛泽东为代表的先进知识分子，开始了学习宣传马克思主义的活动。于是，马克思主义在中国先进知识分子当中，逐步传播开来。之后，在全国各地建立了共产主义小组的基础上，于1921年7月下旬，在上海举行了中国共产党第一次全国代表大会。",
                        content: '1917年,十月革命的曙光照亮了世界。在十月革命的影响下,中国以李大钊、\n' +
                            '陈独秀、毛泽东为代表的先进知识分子,开始了学习宣传马克思主义的活动。于\n' +
                            '是,马克思主义在中国先进知识分子当中,逐步传播开来.1919年5月4日,\n' +
                            '北京“外争国权,内惩国贼"的呼声,划破长空,震撼中国大地,中国历史又翻开\n' +
                            '了新在一页.\n'+
                            '此后,马克思主义在中国广泛传播,全国各地新出版在进步刊物如雨后春笋,\n' +
                            '在不到一年的时间里,便达到400多种。比较出名的除 《新青年》、 《每周评\n' +
                            '论》外,还有 《少年中国》、 《觉醒》、《湘江评论》等。1918年4月,毛泽\n' +
                            '东同蔡和森、何叔衡在湖南发起成立了"新民学会"1919年7月,李大钊组织\n' +
                            '了"少年中国学会"。不久,周恩来和郭隆真等人组织了"觉悟社”.当时,在宣传\n' +
                            '马克思主义方面最突出的是李大钊和陈独秀。他们编辑的《新青年》,成为宣传\n' +
                            '新思想和马克思主义的主要阵地.在他们的推动下,许多先进青年和知识分子,\n' +
                            '开始在工人中宣传马克思主义,促使马克思主义同中国工人运动相结合。一大批\n' +
                            '青年知识分子与工农相结合,逐步成为真正的马克思主义者.',
                        img:require("../assets/img/pic1.png"),
                        date:''
                    },
                    {
                        title:"在革命岁月的洗礼中逐步产生",
                        description:"中国共产党是按照马克思主义建党原则建立起来的。党成立伊始，党纲就对党的地方组织机构设置和中央与地方的关系做出了明确规定，这表明，我们党是一个组织严密、纪律严明的无产阶级政党。1928年召开的党的六大，第一次提出了“组织路线”的概念，在组织路线发展史上具有重要意义。",
                        content:'中国共产党是按照马克思主义建党原则建立起来的。党成立伊始，党纲就对党的地方组织机构设置和中央与地方的关系做出了明确规定，这表明，我们党是一个组织严密、纪律严明的无产阶级政党。党的二大、三大对党的中央组织、组织系统与结构、党员等做出了具体规定。党的四大更是将组织建设放到首要和突出的位置。1928年召开的党的六大，第一次提出了“组织路线”的概念，在组织路线发展史上具有重要意义。由于共产国际的错误指导，党的最高领导人陈独秀、瞿秋白，先后犯了右倾和“左”倾的错误，同时他们都是知识分子出身，因此共产国际认为，他们之所以犯错误，与他们的出身有很大的关系。在共产国际的干预下，虽然工人出身但是政治、文化素质都比较低的向忠发被推举为党的最高领导人，而很多优秀的知识分子干部在使用中受到限制。向忠发不仅没有起到党的领袖应有的作用，而且后来在被捕中成为叛徒。之后，由于当时中央领导权落到一些根本不懂得中国国情、却得到共产国际信任的“左”倾教条主义者手中，他们在组织上采取宗派主义手段，把抱有不同意见的干部都看作“机会主义者”，开展“残酷斗争”和“无情打击”，几乎导致革命的再次失败',
                        img:require("../assets/img/pic2.png"),
                        date:'Feb 10 1921'
                    },
                    {
                        title:"在建设年代的探索中曲折发展",
                        description:"新中国成立后，党的历史方位和历史任务发生了重大变化。早在七届二中全会上，毛泽东就指出党的工作重心由乡村转移到了城市，要求党的干部要学会建设、管理城市，各项工作都要围绕生产建设这一个中心工作来开展。",
                        content:'新中国成立后，党的历史方位和历史任务发生了重大变化。早在七届二中全会上，毛泽东就指出党的工作重心由乡村转移到了城市，要求党的干部要学会建设、管理城市，各项工作都要围绕生产建设这一个中心工作来开展。1956年底，社会主义三大改造完成，我国确立了社会主义制度，为了在中国特殊的国情基础上更好地建设社会主义，1957年毛泽东提出“我们各行各业的干部都要努力精通技术和业务，使自己成为内行，又红又专”。“又红又专”成为组织路线的代表性词汇，要求干部既要提高政治敏锐性，又要尽快由各项建设事业的外行变成内行；要求知识分子既要改造政治思想，又要搞好专业研究。\n' +
                            '\n' +
                            '　　1960年代，国际环境日趋紧张，中苏矛盾升级。1964年，毛泽东从防止“出赫鲁晓夫”的角度出发，提出培养革命事业接班人的问题。由于对形势估计过于严重，党的组织路线也随着发生严重偏差，直至发生“文化大革命”，组织路线也遭到践踏。',
                        img:require("../assets/img/pic3.png"),
                        date:'Feb 24 1949'
                    },
                    {
                        title:"在改革开放的大潮中丰富创新",
                        description:"1978年召开的十一届三中全会，实现了把全党工作重点转移到现代化建设上来的伟大历史任务。1990年代来，我们党依据世情国情党情的变化，着眼完成党的历史任务，对干部工作提出了与时俱进的要求。",
                        content: '1978年召开的十一届三中全会，实现了把全党工作重点转移到现代化建设上来的伟大历史任务。然而，当时干部队伍普遍存在“老化”问题，而且相当多的干部缺乏经济管理知识，这种状况与党在新时期的历史任务严重不相适应。邓小平在1979年7月就提出“思想路线政治路线的实现要靠组织路线来保证”的论断。1979年9月5日至10月7日，中央组织部召开了全国组织工作座谈会，会议确定党在新时期的组织路线主要内容是，使党的组织工作、干部工作促进并确保四个现代化的实现。根据这一组织路线，组织部门的每项工作，都要从有利于经济建设出发，从有利于两个文明建设出发，任何时候都不能离开这个主心骨。1980年12月，中央工作会议召开，邓小平在讲话中第一次完整提出了党的干部队伍建设的“革命化、年轻化、知识化、专业化”方针，并把实现干部队伍“四化”提到了关乎党和国家命运的高度。1981年党的十一届六中全会上，干部队伍“四化”方针首次被写入中央全会文件，后又写入十二大党章。干部“四化”方针的提出，是对党历来强调的德才兼备标准在新的历史条件下的具体应用。1990年代至21世纪初，我们党依据世情国情党情的变化，着眼完成党的历史任务，对干部工作提出了与时俱进的要求。',
                        img:require("../assets/img/pic4.png"),
                        date:'Feb 14 1978'
                    },
                    {
                        title:"新时代下党的全新面貌",
                        description:"党的十八大以来，以习近平同志为核心的党中央全面加强党的建设，以壮士断腕的气魄，推进全面从严治党，党的面貌发生了前所未有的变化，党的建设取得了卓著成效。新时代党的组织路线是十八大以来党的领导和党的建设成功实践的思想结晶，是近百年党的建设的历史经验的科学总结。",
                        content: '党的十八大以来，以习近平同志为核心的党中央全面加强党的建设，以壮士断腕的气魄，推进全面从严治党，党的面貌发生了前所未有的变化，党的建设取得了卓著成效。在这种深层次、根本性的党建实践中，新时代党的组织路线应运而生。新时代党的组织路线是十八大以来党的领导和党的建设成功实践的思想结晶，是近百年党的建设的历史经验的科学总结，是广泛而深刻的实践基础上的党建理论的重大创新，是对马克思主义党建学说的开创性贡献。',
                        img:require("../assets/img/pic5.png"),
                        date:'Feb 26 2016'
                    }
                ],
                items:{
                    showModal:false,
                    num:0
                }
            }
        },
        methods:{
            toggleModal:function(num){
                event.preventDefault();
                this.$set(this.items,'showModal',!this.items.showModal);
                this.$set(this.items,'num',num);
            },
            closeMe:function(){
                this.$set(this.items,'showModal',!this.items.showModal);
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "src/common/scss/mixins";
   #TimeLine{
       z-index: 7;
       position: absolute;
       top: 400vh;
       left: 5%;
       min-height: 100vh;
       width: 90%;
       &::after {
           content: '';
           display: table;
           clear: both;
       }
       header{
           text-align: center;
           font-size: 25px;
           font-family: 'FanTi',sans-serif;
           @include MQ(L){
               font-size: 35px;
           }
       }
       #cd-timeline {
           position: relative;
           padding: 2em 0;
           margin: {
               top: 2em;
               bottom: 2em;
           }
           /*timeline*/
           &::before {
               content: '';
               position: absolute;
               top: 0;
               left: 18px;
               height: 100%;
               width: 4px;
               background: darken(#E12927, 5%);
               z-index: 99;
           }
           @include MQ(L) {
               &::before {
                   left: 50%;
                   transform: translateX(-50%);
               }
           }
           .cd-timeline-block {
               position: relative;
               margin: 2em 0;
               clear: both;
               &:first-child {
                   margin-top: 0;
               }
               &:last-child {
                   margin-bottom: 0;
               }
               @include MQ(L) {
                   margin: 4em 0;
                   &:first-child {
                       margin-top: 0;
                   }
                   &:last-child {
                       margin-bottom: 0;
                   }
                   &:nth-child(odd) .cd-timeline-content{
                       clear: both;
                   }
                   &:nth-child(even) .cd-timeline-content{
                       float: right !important;
                       clear: both;
                       &::before {
                           top: 24px;
                           left: auto;
                           right: 100%;
                           border-color: transparent;
                           border-right-color: #fff;
                       }
                       .cd-read-more {
                           float: right;
                       }
                       .cd-date {
                           left: auto;
                           right: 115%;
                           text-align: right;
                       }
                   }
               }
               .cd-timeline-img {
                   position: absolute;
                   top: 0;
                   left: 0;
                   width: 40px;
                   height: 40px;
                   border-radius: 50%;
                   background-color: red;
                   box-shadow: 0 0 0 4px #ffffff,
                               0 4px 8px rgba(0, 0, 0,0.1),
                               0 8px 16px rgba(0, 0, 0,0.1),
                               0 16px 32px rgba(0, 0, 0,0.1),
                               inset 0 2px 0 rgba(#000, .08);
                   z-index: 999;
                   img {
                       display: block;
                       width: 24px;
                       height: 24px;
                       position: relative;
                       left: 50%;
                       top: 50%;
                       transform: translate(-50%, -50%);
                   }
                   @include MQ(L) {
                       width: 60px;
                       height: 60px;
                       left: 50%;
                       transform: translateX(-50%);
                   }
               }
               .cd-timeline-content {
                   position: relative;
                   overflow: hidden;/*?莫名其妙清除了浮动  ---> BFC*/
                   margin-left: 60px;
                   background: #fff;
                   border-radius: 5px;
                   padding: 20px 10px;
                   box-shadow: 0 2px 4px rgba(0, 0, 0,0.1),
                                   0 4px 8px rgba(0, 0, 0,0.1),
                                   0 8px 16px rgba(0, 0, 0,0.1),
                                   0 16px 32px rgba(0, 0, 0,0.1);
                   h2 {
                       color: #303e49;
                       text-align: center;
                   }
                   p, .cd-read-more, .cd-date {
                       @include font-size(13px);
                   }
                   .cd-read-more, .cd-date {
                       display: inline-block;
                   }
                   p {
                       margin: 1em 0;
                       line-height: 1.6;
                   }
                   .cd-read-more {
                       cursor: pointer;
                       float: right;
                       padding: .8em 1em;
                       background: #acb7c0;
                       color: #fff;
                       border-radius: 5px;
                   }
                   .cd-date {
                       z-index: 9999;
                       color: black !important;
                       float: left;
                       padding: .8em 0;
                       opacity: .7;
                   }
                   .cd-timeline-content::after {
                       clear: both;
                       content: "";
                       display: table;
                   }
                   @include MQ(M) {
                       h2 {
                           @include font-size(20px);
                       }

                       p {
                           @include font-size(16px);
                       }
                       .cd-read-more, .cd-date {
                           @include font-size(14px);
                       }
                   }
                   @include MQ(L) {
                       margin-left: 0;
                       padding: 1.6em;
                       width: 43%;
                       height: auto;
                       .cd-read-more {
                           float: left;
                       }
                       .cd-date {
                           position: absolute;
                           max-width: 75px;
                           min-width: 60px;
                           left: 115%;
                           top: 6px;
                           @include font-size(16px);
                       }
                   }
               }
        }
    }
}
</style>