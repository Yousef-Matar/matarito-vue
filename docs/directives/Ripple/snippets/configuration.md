---
search: false
---

## Configuration

To start with, Ripple needs to be enabled globally or override the global config when used.

::: code-group

```JS [Using global configuration]
import MataritoVue from 'matarito-vue'
const app = createApp(App);
app.use(MataritoVue, { ripple:true });
```

```vue [Override global configuration]
<template>
	<div v-ripple.force>Default ripple</div>
</template>
```

:::
