import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import {Button, message} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Axios from "axios";

Vue.config.productionTip = false

Vue.use(Axios)
Vue.use(Antd);
Vue.use(Button);
Vue.prototype.$message = message;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
