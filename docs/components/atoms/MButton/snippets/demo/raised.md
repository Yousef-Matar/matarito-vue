## Raised

When `raised` is present, buttons have a shadow to indicate elevation.

<DemoContainer>
	<MButton label="Primary" raised />
	<MButton label="Primary" variant="text" raised />
	<MButton label="Primary" variant="outlined" raised />
	<MButton label="Primary" rounded raised />
	<MButton label="Primary" variant="text" rounded raised />
	<MButton label="Primary" variant="outlined" rounded raised />
</DemoContainer>

::: code-group

```vue [Composition API]
<template>
	<MButton label="Primary" raised />
	<MButton label="Primary" variant="text" raised />
	<MButton label="Primary" variant="outlined" raised />
	<MButton label="Primary" rounded raised />
	<MButton label="Primary" variant="text" rounded raised />
	<MButton label="Primary" variant="outlined" rounded raised />
</template>

<script setup>
import { MButton } from "matarito-vue";
</script>
```

```vue [Options API]
<template>
	<MButton label="Primary" raised />
	<MButton label="Primary" variant="text" raised />
	<MButton label="Primary" variant="outlined" raised />
	<MButton label="Primary" rounded raised />
	<MButton label="Primary" variant="text" rounded raised />
	<MButton label="Primary" variant="outlined" rounded raised />
</template>

<script>
import { MButton } from "matarito-vue";
export default {
	components: { MButton }
};
</script>
```

:::
