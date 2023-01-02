import type { App, VNode } from 'vue';
import Loading from './index.vue';
import { createVNode, render } from 'vue';
export default {
  install(app: App) {
    const vnode: VNode = createVNode(Loading);
    render(vnode, document.body);
    // console.log(vnode.component?.exposed);
    app.config.globalProperties.$myloading = {
      show: vnode.component?.exposed?.show,
      hide: vnode.component?.exposed?.hide,
    };
  },
};
