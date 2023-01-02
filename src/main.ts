import { createApp } from 'vue';
import './style/reset.less';
import App from './App.vue';
import App2 from './App2.vue';
import App3 from './App3.vue';
import App4 from './App4.vue';
import App5 from './App5.vue';
import App6 from './App6.vue';
import App7 from './App7.vue';
import Loading from './components/Loading';
import { MyUse } from './myUse';

export const app = createApp(App7);

app.config.globalProperties.$filters = {
  format<T>(str: T) {
    return `ken-${str}`;
  },
};

MyUse(Loading);

type Filter = {
  format<T>(str: T): string;
};

type Lod = {
  show: () => void;
  hide: () => void;
};
declare module 'vue' {
  export interface ComponentCustomProperties {
    $filters: Filter;
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $loading: Lod;
  }
}

app.mount('#app');
