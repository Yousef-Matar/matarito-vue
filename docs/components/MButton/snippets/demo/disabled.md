## Disabled

When `disabled` is present, the element cannot be focused and cursor is not allowed.

<DemoContainer>
<MButton icon="pi pi-check" disabled />
<MButton label="Submit" disabled/>
</DemoContainer>

::: code-group

```vue [Composition API]
<template>
	<MButton icon="pi pi-check" disabled />
	<MButton label="Submit" disabled />
</template>

<script setup>
import { MButton } from "matarito-vue";
</script>
```

```vue [Options API]
<template>
	<MButton icon="pi pi-check" disabled />
	<MButton label="Submit" disabled />
</template>

<script>
import { MButton } from "matarito-vue";
export default {
	components: { MButton }
};
</script>
```

:::
