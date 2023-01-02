import { createApp } from 'vue';
import './style/reset.less';
import App from './App.vue';
import App2 from './App2.vue';
import App3 from './App3.vue';
import App4 from './App4.vue';
import App5 from './App5.vue';
import App6 from './App6.vue';
import App7 from './App7.vue';
import App8 from './App8.vue';
import Loading from './components/Loading';
import { MyUse } from './myUse';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export const app = createApp(App8);

app.config.globalProperties.$filters = {
  format<T>(str: T) {
    return `ken-${str}`;
  },
};

MyUse(Loading);

app.use(ElementPlus);

type Filter = {
  format<T>(str: T): string;
};

type Lod = {
  show: () => void;
  hide: () => void;
};
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $myloading: Lod;
  }
}

app.mount('#app');
