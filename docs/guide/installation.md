# Installation

Installation guide for Matarito-vue.

## Default installation

Run one of the following commands to add Matarito-vue to your project:

::: code-group

```node [npm]
npm install matarito-vue
```

```node [yarn]
yarn add matarito-vue
```

```node [pnpm]
pnpm add matarito-vue
```

:::

## Peer dependencies

Please note that [Vue 3](https://www.npmjs.com/package/vue) is a peer dependency:

```json
"peerDependencies": {
  "vue": "^3.3.11"
}
```

## Plugin

Matarito-vue plugin is recommended to be installed as an application plugin to setup the [default configuration](../configuration/options).

```JS
import mataritoVue from 'matarito-vue'
const app = createApp(App);
app.use(mataritoVue);
```
