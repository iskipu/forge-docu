---
description: How to create an Electron app with React and Electron Forge
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# React

Adding React support to the Webpack template doesn't require a complicated boilerplate to get started.

:::info
The following guide has been tested with React 18, Babel 7, and Webpack 5.
:::

### Create the app and setup the Webpack config

Create the app with the [Webpack template](../../templates/webpack-template.md). Add the following packages to your `devDependencies` so that JSX and other React features can be used properly:

```bash
npm install --save-dev @babel/core @babel/preset-react babel-loader
```

Set up the [`babel-loader`](https://www.npmjs.com/package/babel-loader)module with the [React preset](https://babeljs.io/docs/en/babel-preset-react) in `webpack.rules.js`:

```javascript title="webpack.rules.js"
module.exports = [
  // ... existing loader config ...
  {
    test: /\.jsx?$/,
    use: {
      loader: "babel-loader",
      options: {
        exclude: /node_modules/,
        presets: ["@babel/preset-react"],
      },
    },
  },
  // ... existing loader config ...
];
```

### Add the React dependencies

Add the basic React packages to your `dependencies`:

```bash
npm install --save react react-dom
```

### Integrate React code

You should now be able to start writing and using React components in your Electron app. The following is a very minimal example of how to start to add React code:

<Tabs>
  <TabItem value="app.jsx" label="src/app.jsx">

```jsx
import * as React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(<h2>Hello from React!</h2>);
```

  </TabItem>
  <TabItem value="renderer.js" label="src/renderer.js">

```js
// Add this to the end of the existing file
import "./app.jsx";
```

  </TabItem>
</Tabs>

For more about React, see their [documentation](https://react.dev/learn/add-react-to-an-existing-project).
