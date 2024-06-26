---
description: How to create an Electron app with React, TypeScript, and Electron Forge
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# React with TypeScript

Adding React support to the TypeScript + Webpack template is fairly straightforward and doesn't require a complicated boilerplate to get started.

:::info
The following guide has been tested with React 18, TypeScript 4.3, and Webpack 5.
:::

### Create the app and setup the TypeScript config

Create the app with the [TypeScript + Webpack template](../../templates/typescript-+-webpack-template.md), then edit the newly created `tsconfig.json` to add the key-value entry [`"jsx": "react-jsx"`](https://www.typescriptlang.org/tsconfig#jsx) to the `"compilerOptions"` section.

### Add the React dependencies

Add the basic React packages to your `dependencies` and the corresponding types to your `devDependencies`:

```bash
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
```

### Integrate React code

You should now be able to start writing and using React components in your Electron app. The following is a very minimal example of how to start to add React code:

<Tabs>
  <TabItem value="app.tsx" label="src/app.tsx">

```tsx
import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(<h2>Hello from React!</h2>);
```

  </TabItem>
  <TabItem value="renderer.ts" label="src/renderer.ts">

```ts
// Add this to the end of the existing file
import "./app";
```

  </TabItem>
</Tabs>

For more about React, see [their documentation](https://react.dev/learn/add-react-to-an-existing-project).
