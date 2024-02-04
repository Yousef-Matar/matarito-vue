## Events

::: info OnClick

By default the `MButton` stops event propagation.

When `propagate` is present, the event propagates normally.

:::

::: code-group

```vue [Composition API]
<template>
	<MButton label="Submit" propagate />
</template>

<script setup>
import { MButton } from "matarito-vue";
</script>
```

```vue [Options API]
<template>
	<MButton label="Submit" propagate />
</template>

<script>
import { MButton } from "matarito-vue";
export default {
	components: { MButton }
};
</script>
```

:::
