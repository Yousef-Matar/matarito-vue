<details>
	<summary class="collapsable-header">
	Primary
	</summary>
<DemoContainer>
	<MButton label="Primary" />
	<MButton label="Primary" variant="text" />
	<MButton label="Primary" variant="outlined" />
	<MButton label="Primary" rounded />
	<MButton label="Primary" variant="text" rounded />
	<MButton label="Primary" variant="outlined" rounded />
</DemoContainer>

::: code-group

```vue [Composition API]
<template>
	<MButton label="Primary" />
	<MButton label="Primary" variant="text" />
	<MButton label="Primary" variant="outlined" />
	<MButton label="Primary" rounded />
	<MButton label="Primary" variant="text" rounded />
	<MButton label="Primary" variant="outlined" rounded />
</template>

<script setup>
import { MButton } from "matarito-vue";
</script>
```

```vue [Options API]
<template>
	<MButton label="Primary" />
	<MButton label="Primary" variant="text" />
	<MButton label="Primary" variant="outlined" />
	<MButton label="Primary" rounded />
	<MButton label="Primary" variant="text" rounded />
	<MButton label="Primary" variant="outlined" rounded />
</template>

<script>
import { MButton } from "matarito-vue";
export default {
	components: { MButton }
};
</script>
```

:::

</details>
