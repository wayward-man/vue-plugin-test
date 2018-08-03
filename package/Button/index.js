import Button from './src/index.vue';
Button.install = function(Vue){
    Vue.component(Button.name,Button);
}