import type { App } from 'vue';
import { app } from './main';

const installList = new Set();

interface Use {
  install: (app: App, ...options: any[]) => void;
}

export function MyUse<T extends Use>(plugin: T, ...options: any[]) {
  if (installList.has(plugin)) {
    console.error('不好意思，注册过了', plugin);
  } else {
    plugin.install(app, ...options);
    installList.add(plugin);
  }
}
