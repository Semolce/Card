<template>


  <div id="app">



    <div class="container">
          
      <div class="section-list">
        <h3>example</h3>
        
        <div class="card-list">

            <div class="card-item">
              <div class = 'cover'>
                <img src="./assets/banner.jpg" alt="">
              </div>
              <div class="desc">
                <p>QuestionDescription</p>
                <span>QuestionDetail</span>
              </div> 
              <el-button type="text" @click="dialogVisible = true">  
                Click to view the video
              </el-button>
            </div>

            <div class="card-item">
              <div class = 'cover'>
                <img src="./assets/banner.jpg" alt="">
              </div>
              <div class="desc">
                <p>QuestionDescription</p>
                <span>QuestionDetail</span>
              </div>
            
                <el-button type="text" @click="click2">
                Click to view the video
                </el-button>
            </div>

            <el-dialog
            v-model="dialogVisible"
            title=""
            :before-close="handleClose"
            show-close=false
            top=5vh
            destroy-on-close=true
            >
            <div style="display: inline">
                  <videoPlayer  class="demo"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname">
                    </videoPlayer>
                </div>
            </el-dialog>
            
            <div class="card-item">
              <div class = 'cover'>
                <img src="./assets/banner.jpg" alt="">
              </div>
              <div class="desc">
                <p>QuestionDescription</p>
                <span>QuestionDetail</span>
              </div>
                <el-button type="text" @click="click3">
                Click to view the video
                </el-button>
            </div>

            <div class="card-item">
              <div class = 'cover'>
                <img src="./assets/banner.jpg" alt="">
              </div>
              <div class="desc">
                <p>QuestionDescription</p>
                <span>QuestionDetail</span>
              </div>
              <el-button type="text" @click="click4">
                Click to view the video
                </el-button>
             </div>

             <div class="card-item">
              <div class = 'cover'>
                <img src="./assets/banner.jpg" alt="">
              </div>
              <div class="desc">
                <p>QuestionDescription</p>
                <span>QuestionDetail</span>
              </div>
              <el-button type="text" @click="click5">
                Click to view the video
                </el-button>
             </div>

             <div class="card-item">
              <div class = 'cover'>
                <img src="./assets/banner.jpg" alt="">
              </div>
              <div class="desc">
                <p>QuestionDescription</p>
                <span>QuestionDetail</span>
              </div>
              <el-button type="text" @click="click6">
                Click to view the video
                </el-button>
             </div>
             

        </div>
      </div>
    </div>

  </div>
</template>

<script >
import { ref } from 'vue'
import {videoPlayer} from "./components/vue-video-player/src"
import '../node_modules/video.js/dist/video-js.css'
import ElementPlus from 'element-plus'

// import popupWindow from './components/popupWindow.vue'
import Modal from './components/test.vue'

export default {
  name: '',
  components: { videoPlayer, ElementPlus, ref},
  data () {
    return {
      dialogVisible:false,

      playerOptions: {
                    //播放速度
                    playbackRates: [0.5, 1.0, 1.5, 2.0], 
                    //如果true,浏览器准备好时开始回放。
                    autoplay: false, 
                    // 默认情况下将会消除任何音频。
                    muted: false, 
                    // 导致视频一结束就重新开始。
                    loop: false, 
                    // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    preload: 'auto', 
                    // language: 'zh-CN',
                     // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    aspectRatio: '4:3',
                     // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    fluid: true,
                    sources: [{
                        //类型
                        type: "video/mp4",
                        //url地址
                        src: require("./videos/rank1.mp4")
                    }],
                    //你的封面地址
                    poster: '', 
                     //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        //全屏按钮
                        fullscreenToggle: true  
                    }
                },

    }
  },
methods:{
    click1(){
      this.dialogVisible = true;
      this.playerOptions.sources[0].src = require("./videos/rank1.mp4");
    },
    click2(){
      this.dialogVisible = true;
      this.playerOptions.sources[0].src = require("./videos/rank2.mp4");
    },
    click3(){
      this.dialogVisible = true;
      this.playerOptions.sources[0].src = require("./videos/rank3.mp4");
    },
    click4(){
      this.dialogVisible = true;
      this.playerOptions.sources[0].src = require("./videos/Q2_rank1.mp4");
    },
    click5(){
      this.dialogVisible = true;
      this.playerOptions.sources[0].src = require("./videos/Q2_rank2.mp4");
    },
    click6(){
      this.dialogVisible = true;
      this.playerOptions.sources[0].src = require("./videos/Q2_rank3.mp4");
    }
  }
 }


</script>

<style type="text/css">
.card{
  width:30%
}

.demo{
    /* display: inline-block; */
    /* width: 283px; */
    /* height: 200px; */
    text-align: center;
    line-height: 100px;
    border: 10px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: rgb(14, 3, 3);
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    /* margin-right: 40px; */
  }

  body, html {
            width: 100%;
            height: 100%;
            background: #f4f4f4;
            font: 14px/1.5 Helvetica,Tahoma,Arial,Hiragino Sans GB,Microsoft YaHei,SimSun,Heiti,sans-serif
        }

  #app {
            width: 100%;
            height: 100%;
            display: inline-block;
            align-items: center;
        }

.container {
            width: 90%;
            height:100%;
            margin: 0 auto;
        }

.section-list h3 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 28px;
            font-weight: 400;
            font-style: normal;
        }

.card-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

.card-item {
            width: 304px;
            height: 388px;
            background: #fff;
            transition: all .3s ease;
            /* cursor: pointer; */
            margin-bottom: 10px;
            border-radius: 4px;
            overflow: hidden;
            padding: 10px 15px 15px;
        }

/* .card-item .desc {
            padding: 10px 15px 15px;
        } */

.card-item .desc p {
            font-size: 16px;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
.card-item .desc span {
            color: #999;
            display: block;
            margin-top: 10px;
            margin-bottom: 10px;
        }

.card-item .cover img {
            width: 100%;
        }


</style>