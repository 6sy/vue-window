<template>
  <div id='app'
       @click='leftClick'
       ref='div'>
    <canvas></canvas>
    <tabbar-window></tabbar-window>
  </div>
</template>

<script>
import { requestFullScreen } from '../src/assets/js/util'
import tabbarWindow from './components/window/tabbar/tabbar'
export default {
  components: {
    tabbarWindow
  },
  created () {
    // 禁止右键事件
    document.oncontextmenu = new Function("event.returnValue=false;")
  },
  mounted () {
  },
  methods: {
    leftClick () {
      requestFullScreen()
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  background-image: url("./assets/img0.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
