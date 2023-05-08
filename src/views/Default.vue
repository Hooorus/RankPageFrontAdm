<template>
  <div id="app">
    <div id="components-layout-demo-basic">
      <img src="@/assets/logo2.png"/>
      <a-layout>
        <a-affix :offset-top="top">
          <a-layout-header id="default-header">
            <h1 id="title">
              创新创业学院赛道评分系统
            </h1>
          </a-layout-header>
        </a-affix>
        <a-divider></a-divider>
        <a-layout-content id="default-content">
          <h1>
            <a-button size="large" id="button" block>
              <a-icon type="bar-chart" style="font-size: 25px"/>
              <router-link to="/backend" style="font-size: 25px">&nbsp;管理端</router-link>
            </a-button>
          </h1>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <h1>
            <a-button size="large" id="button" block>
              <a-icon type="highlight" style="font-size: 25px"/>
              <router-link to="/front" style="font-size: 25px">&nbsp;评委端</router-link>
            </a-button>
          </h1>
        </a-layout-content>
        <a-divider></a-divider>
        <a-layout-footer>RankPage ©2023 Created by Immig_Reyes</a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<script>

import Backend from "@/views/Backend.vue";
import Front from "@/views/Front.vue";

export default {
  components: {
    Backend,
    Front,
  },
  name: "Default"
}
</script>

<style scoped type="less">
#app {
  margin: 0;
  height: 100%;
}

#components-layout-demo-basic {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  color: #000000;
}

#default-header {
  background: #ffffff;
  color: #000000;
}

#title {
  font-size: 40px;
  font-weight: normal;
}

#button {
  height: 100px;
  width: 200px;
  align-content: center;
  justify-items: center;
  justify-content: center;
  align-items: center;
}

#default-content {
  display: flex;
  align-content: center;
  justify-items: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
  font-size: 50px;
}

#a-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#a-layout-footer {
  flex-shrink: 0;
}

#a-layout-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ant-layout-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 20px;
  background: #ffffff;
  color: #000000;
}

.ant-layout-footer {
  align-content: flex-end;
  background: #ffffff;
  color: #000000;
}

.ant-layout-content {
  /*background: #ffffff;*/
  height: 50%;
  color: #000000;
}

img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;

  opacity: 0.5;
}
</style>
