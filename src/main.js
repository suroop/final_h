import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false;
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VueVideoPlayer);
new Vue({
  render: h => h(App),
}).$mount('#app');
