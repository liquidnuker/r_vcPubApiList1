import "./styles/main.scss";

// import "./js/router.js"
import VueProgressBar from 'vue-progressbar';

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options);

const vcHome = () => import('./vue-components/Home.vue');

new Vue({
  el: "#app",
  render: h => h(vcHome)
});