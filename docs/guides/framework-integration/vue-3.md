---
description: How to create an Electron app with Vue and Electron Forge
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vue 3

Vue 3 can be added to Electron Forge's Vite template with a few setup steps.

:::info
The following guide has been tested with Vue 3 and Vite 4.
:::

## Setting up the app

Create an Electron app using Electron Forge's [Vite](../../templates/vite.md) template.

```bash
npm init electron-app@latest my-vue-app -- --template=vite
```

## Adding dependencies

Add the `vue` npm package to your `dependencies` and the `@vitejs/plugin-vue` package to your `devDependencies`:

```bash
npm install vue
npm install --save-dev @vitejs/plugin-vue
```

## Integrating Vue 3 code

You should now be able to start using Vue components in your Electron app. The following is a very minimal example of how to start to add Vue 3 code:

<Tabs>
  <TabItem value="index.html" label="src/index.html">

Replace the contents of `src/index.html` with a `<div>` element with the `#app` id attribute.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/renderer.js"></script>
  </body>
</html>
```

  </TabItem>
  <TabItem value="App.vue" label="src/App.vue">

Add the contents from the template back to `src/App.vue`.

```jsx
<template>
  <h1>💖 Hello World!</h1>
  <p>Welcome to your Electron application.</p>
</template>

<script setup>
  console.log('👋 This message is being logged by "App.vue", included via Vite');
</script>
```

  </TabItem>
  <TabItem value="renderer.js" label="src/renderer.js">

Mount `App.vue` into the DOM with Vue's `createApp` API.

```js
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
```

  </TabItem>
  <TabItem value="vite.renderer.config.mjs" label="vite.renderer.config.mjs">

Configure the Vue plugin for Vite.js.

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],
});
```

  </TabItem>
</Tabs>
