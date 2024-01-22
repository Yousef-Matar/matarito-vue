## Sizes

For larger or smaller buttons, use the `size` property. The `MButton` comes in three `sizes`: sm, md (default) and lg.

<DemoContainer>
	<MButton label="Small" size="sm" />
	<MButton label="Medium" />
	<MButton label="Large" size="lg" />
</DemoContainer>

::: code-group

```vue [Composition API]
<template>
	<MButton label="Small" size="sm" />
	<MButton label="Medium" />
	<MButton label="Large" size="lg" />
</template>

<script setup>
import { MButton } from "matarito-vue";
</script>
```

```vue [Options API]
<template>
	<MButton label="Small" size="sm" />
	<MButton label="Medium" />
	<MButton label="Large" size="lg" />
</template>

<script>
import { MButton } from "matarito-vue";
export default {
	components: { MButton }
};
</script>
```

:::
