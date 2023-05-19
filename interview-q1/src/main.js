import Vue from "vue";
import {
  Button,
  Row,
  Col,
  Card,
  Form,
  FormItem,
  Select,
  Option,
  Message
} from "element-ui";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);

Vue.prototype.$message = Message;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
