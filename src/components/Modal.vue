<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="modal-header">
                <h3>{{info.title}}</h3>
            </div>
            <div class="modal-body">
                <p>{{info.content}}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn-close" @click="closeSelf">确认</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            info:{
                type:Object
            }
        },
        data() {
            return {
            }
        },
        methods: {
            closeSelf() {
                this.$emit("closeMe");
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .modal-backdrop {
        z-index: 999999;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.3);
        display: flex;
        justify-content: center;
        align-items: center;
        .modal {
            background-color: #fff;
            overflow-x:auto;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            width: 700px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
                        0 4px 8px rgba(0, 0, 0 ,0.1),
                        0 8px 16px rgba(0, 0, 0, 0.1),
                        0 16px 32px rgba(0, 0, 0, 0.1);
            .modal-header {
                border-bottom: 1px solid #eee;
                color: #313131;
                justify-content: space-between;
                padding: 15px;
                display: flex;
            }
            .modal-body {
                position: relative;
                padding: 1em 2em;
                line-height: 1.6;
                font-family: 'Microsoft Yahei',sans-serif;
                text-indent: 2em;
            }
            .modal-footer {
                border-top: 1px solid #eee;
                justify-content: flex-end;
                padding: 15px;
                display: flex;
                .btn-close{
                    border-radius: 5px;
                    outline: none;
                    margin-left:16px;
                    width:56px;
                    height: 36px;
                    border:none;
                    cursor: pointer;
                    color: #fff;
                    background-color: #2d8cf0;
                }
            }
        }
    }
</style>