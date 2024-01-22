<details>
	<summary class="collapsable-header">
	Secondary
	</summary>
<DemoContainer>
	<MButton label="Secondary" severity="secondary" />
	<MButton label="Secondary" variant="text" severity="secondary" />
	<MButton label="Secondary" variant="outlined" severity="secondary" />
	<MButton label="Secondary" severity="secondary" rounded />
	<MButton label="Secondary" variant="text" severity="secondary" rounded />
	<MButton label="Secondary" variant="outlined" severity="secondary" rounded />
</DemoContainer>

::: code-group

```vue [Composition API]
<template>
	<MButton label="Secondary" severity="secondary" />
	<MButton label="Secondary" variant="text" severity="secondary" />
	<MButton label="Secondary" variant="outlined" severity="secondary" />
	<MButton label="Secondary" severity="secondary" rounded />
	<MButton label="Secondary" variant="text" severity="secondary" rounded />
	<MButton label="Secondary" variant="outlined" severity="secondary" rounded />
</template>

<script setup>
import { MButton } from "matarito-vue";
</script>
```

```vue [Options API]
<template>
	<MButton label="Secondary" severity="secondary" />
	<MButton label="Secondary" variant="text" severity="secondary" />
	<MButton label="Secondary" variant="outlined" severity="secondary" />
	<MButton label="Secondary" severity="secondary" rounded />
	<MButton label="Secondary" variant="text" severity="secondary" rounded />
	<MButton label="Secondary" variant="outlined" severity="secondary" rounded />
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
