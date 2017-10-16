import "./styles/main.scss";

// import "./js/router.js"

const vcHome = () => import('./vue-components/Home.vue');

new Vue({
  el: "#app",
  render: h => h(vcHome)
});