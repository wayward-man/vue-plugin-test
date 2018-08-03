export default {
  install: function (Vue, options) {

    Vue.prototype.NOTICE = true;

    // 3. 注入组件
    //  注入组件，插件加载开始前提示
    Vue.mixin({
      created: function () {
        if (this.NOTICE)
          console.log("组件开始加载")
      },
      methods: {
        test: function () {
          console.log("mixin test");
        }
      }
    })


    // 4. 添加实例方法
    //  返回数字是输入数字的两倍，如果不是数字或者不能隐式转换为数字，则输出null
    //  组件实例方法
    Vue.prototype.doubleNumber = function (val) {
      if (typeof val === 'number') {
        return val * 2;
      } else if (!isNaN(Number(val))) {
        return Number(val) * 2;
      } else {
        return null
      }
    }

    // 4. 添加实例方法
    //  服务组，将实例方法整合到$service中，避免命名冲突
    Vue.prototype.$service = {
      //电话号码合法性检查
      telNumberCheck: function (tel) {
        var pattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
        return pattern.test(tel)
      }
    }
  }
};
