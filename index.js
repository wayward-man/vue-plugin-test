import Button from './package/Button/src/index.vue';
const components = [Button];

const install = function (Vue, options) {
  if (install.installed) return;
  Vue.prototype.NOTICE = true;

  if (typeof window !== "undefined" && window.Vue) {
    console.log('传入参数install方法');
    install(window.Vue);
  }

  components.map(component => Vue.component(component.name, component));

  Vue.mixin({
    mounted() {
      if (this.NOTICE) {
        console.log("组件开始加载")
      }
    },
    created: function () {

    },
    methods: {
      test: function () {
        console.log("mixin test");
      }
    }
  })
  Vue.prototype.$service = {
    telNumberCheck: function (tel) {
      console.log(tel);
    }
  }
}

export default {
  install,
  Button
}
