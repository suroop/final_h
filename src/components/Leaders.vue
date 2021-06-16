<template>
    <div id="Leaders">
        <div class="leader-box">
            <Leader :class="0===items.num?'leader1':'leader1  leader'" :number="0" @getInfo="GetInfo"/>
            <Leader :class="1===items.num?'leader2':'leader2  leader'" :number="1" @getInfo="GetInfo"/>
            <Leader :class="2===items.num?'leader3':'leader3  leader'" :number="2" @getInfo="GetInfo"/>
            <div class="about">
                <h2>China's</h2>
                <h2>the most greatest</h2>
                <h2>Leaders</h2>
            </div>
            <Leader :class="3===items.num?'leader4':'leader4  leader'" :number="3" @getInfo="GetInfo"/>
            <Leader :class="4===items.num?'leader5':'leader5  leader'" :number="4" @getInfo="GetInfo"/>
        </div>
        <div class="red">{{info[items.num].description}}</div>
    </div>
</template>

<script>
    import Leader from "@/components/Leader";

    export default {
        name: "Leaders",
        components: {
            Leader
        },
        data(){
            return {
                info:[
                    {
                        description:'毛泽东（1893年12月26日-1976年9月9日），字润之（原作咏芝，后改润芝），笔名子任。湖南湘潭人。中国人民的领袖，伟大的马克思主义者，无产阶级革命家、战略家和理论家，中国共产党、中国人民解放军和中华人民共和国的主要缔造者和领导人，政治家 ，军事家 ，诗人，书法家。\n' +
                            '1949至1976年，毛泽东担任中华人民共和国最高领导人。他对马克思列宁主义的发展、军事理论的贡献以及对共产党的理论贡献被称为毛泽东思想。因毛泽东担任过的主要职务几乎全部称为主席，所以也被人们尊称为“毛主席”。\n' +
                            '毛泽东被视为现代世界历史中最重要的人物之一，《时代》杂志也将他评为20世纪最具影响100人之一。',
                        name:'毛泽东',
                        contribute:'毛泽东思想',
                        number:1
                    },
                    {
                        description:'邓小平（1904年8月22日-1997年2月19日），原名邓先圣，学名邓希贤，四川广安人。早年赴欧洲勤工俭学，归国后，他全身心地投入党领导的争取民族独立和人民解放的革命斗争。从土地革命、抗日战争到解放战争，先后担任党和军队的许多重要领导职务，为党中央一系列重大战略决策的实施，为新民主主义革命的胜利和新中国的诞生，建立了赫赫功勋，成为中华人民共和国的开国元勋。\n'+
                        '邓小平是全党全军全国各族人民公认的享有崇高威望的卓越领导人，伟大的马克思主义者，伟大的无产阶级革命家、政治家、军事家、外交家，久经考验的共产主义战士，中国社会主义改革开放和现代化建设的总设计师，中国特色社会主义道路的开创者，邓小平理论的主要创立者',
                        name:'邓小平',
                        contribute:'邓小平理论',
                        number:2
                    },
                    {
                        description:'江泽民，男，汉族，1926年08月17日出生，江苏省扬州市人。1943年起参加地下党领导的学生运动，1946年04月加入中国共产党，1947年毕业于上海交通大学电机系。\n'+
                        '曾任中国共产党中央委员会总书记，中国共产党中央军事委员会主席，中华人民共和国主席，中华人民共和国中央军事委员会主席。\n'+
                        '“三个代表”思想的实质，或者说核心，就是要求中国共产党在新的历史条件下，继续保持自己的先进性，继续赢得人民的拥护和支持，继续保持和巩固执政党地位。这是江泽民总结中国共产党近八十年历史经验，深入思考世界社会主义运动历史经验，紧密联系党面临的形势任务和现实状况作出的科学结论。',
                        name:'江泽民',
                        contribute:'“三个代表”思想',
                        number:3
                    },
                    {
                        description:'胡锦涛，男，汉族，1942年12月生，安徽绩溪人，1964年4月加入中国共产党，1965年7月参加工作，清华大学水利工程系河川枢纽电站专业毕业，大学学历，工程师。\n'+
                        '任中国共产党中央委员会总书记，中华人民共和国主席，中共中央军事委员会主席，中华人民共和国中央军事委员会主席，中央政治局常委。\n'+
                        '科学发展观是坚持以人为本，全面、协调、可持续的发展观，促进经济社会协调发展和人的全面发展。以人为本，就是要把人民的利益作为一切工作的出发点和落脚点，不断满足人们的多方面需求和促进人的全面发展；全面，就是要在不断完善社会主义市场经济体制，保持经济持续快速协调健康发展。',
                        name:'胡锦涛',
                        contribute:'科学发展观',
                        number:4
                    },

                    {
                        description:'习近平，男，汉族，1953年6月生，陕西富平人，1969年1月参加工作，1974年1月加入中国共产党，清华大学人文社会学院马克思主义理论与思想政治教育专业毕业，在职研究生学历，法学博士学位。\n'+
                        '现任中国共产党中央委员会总书记，中共中央军事委员会主席，中华人民共和国主席，中华人民共和国中央军事委员会主席。\n'+
                        '习近平新时代中国特色社会主义思想，是对马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观的继承和发展，是马克思主义中国化最新成果，是党和人民实践经验和集体智慧的结晶，是中国特色社会主义理论体系的重要组成部分，是全党全国人民为实现中华民族伟大复兴而奋斗的行动指南，必须长期坚持并不断发展。',
                        name:'习近平',
                        contribute:'习近平新时代中国特色社会主义思想',
                        number:5
                    },
                ],
                items:{
                    num:0,
                }
            }
        },
        methods:{
            GetInfo:function (number) {
                console.log(number);
                this.$set(this.items,'num',number);
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "src/common/scss/mixins";
    #Leaders{
        position: absolute;
        top: 300vh;
        left: 0;
        height: 100vh;
        width: 90%;
        margin: 0 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @include MQ(M){
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        @include MQ(L){
            display: flex;
            flex-direction: row;
        }
        .leader-box{
            width: 100%;
            height: 45%;
            box-sizing: border-box;
            border-left: 3px solid #e12927;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: repeat(1,1fr);
            .leader{
                display: none;
                @include MQ(M){
                    display: flex;
                }
            }
            @include MQ(M){
                width: 100%;
                height: 55%;
                display: grid;
                grid-template-columns: repeat(3,1fr);
                grid-template-rows: repeat(2,1fr);
            }
            @include MQ(L){
                grid-template-columns: repeat(3,1fr);
                grid-template-rows: repeat(2,1fr);
                width: 75%;
                height: 85%;
            }
            .about{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                h2{
                    text-indent: 5px;
                    font-family: 'Baloo',sans-serif;
                    text-align: right;
                    line-height: 1.8;
                    font-size: 10px;
                    &:first-child{
                        text-align: left;
                        font-size: 30px;
                    }
                    &:last-child{
                        text-align: center;
                        font-size: 20px;
                    }
                    @include MQ(M){
                        line-height: 1.8;
                        font-size: 20px;
                        &:first-child{
                            text-align: left;
                            font-size: 40px;
                        }
                        &:last-child{
                            text-align: center;
                            font-size: 30px;
                        }
                    }
                    @include MQ(L){
                        font-size: 30px;
                        &:first-child{
                            text-align: left;
                            font-size: 60px;
                        }
                        &:last-child{
                            text-align: center;
                            font-size: 45px;
                        }
                    }
                }
                @include MQ(M){
                    justify-content: space-around;
                }
            }
        }
        .red{
            width: 100%;
            height: 45%;
            background-color: red;
            color: white;
            font-weight: 800;
            font-size: 15px;
            text-indent: 2em;
            line-height: 1.5;
            border-radius:0 5px 5px 5px;
            box-sizing: border-box;
            padding: 1em 2em;
            @include MQ(M){
                width: 100%;
                height: 35%;
                background-color: red;
                font-size: 18px;
                line-height: 1.4;
                padding: 1em 2em 0;
                box-sizing: border-box;
                border-radius: 5px;
            }
            @include MQ(L){
                font-size: 17px;
                padding:1em 2em;
                line-height: 1.6;
                width: 25%;
                height: 85%;
                background-color: red;
            }
        }
    }
</style>