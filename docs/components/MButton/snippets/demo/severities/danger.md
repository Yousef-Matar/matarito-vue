<details>
<summary class="collapsible-header">

### Danger

</summary>
<DemoContainer>
	<MButton label="Danger" severity="danger" />
	<MButton label="Danger" variant="text" severity="danger" />
	<MButton label="Danger" variant="outlined" severity="danger" />
	<MButton label="Danger" severity="danger" rounded />
	<MButton label="Danger" variant="text" severity="danger" rounded />
	<MButton label="Danger" variant="outlined" severity="danger" rounded />
</DemoContainer>

::: code-group

```vue [Composition API]
<template>
	<MButton label="Danger" severity="danger" />
	<MButton label="Danger" variant="text" severity="danger" />
	<MButton label="Danger" variant="outlined" severity="danger" />
	<MButton label="Danger" severity="danger" rounded />
	<MButton label="Danger" variant="text" severity="danger" rounded />
	<MButton label="Danger" variant="outlined" severity="danger" rounded />
</template>

<script setup>
import { MButton } from "matarito-vue";
</script>
```

```vue [Options API]
<template>
	<MButton label="Danger" severity="danger" />
	<MButton label="Danger" variant="text" severity="danger" />
	<MButton label="Danger" variant="outlined" severity="danger" />
	<MButton label="Danger" severity="danger" rounded />
	<MButton label="Danger" variant="text" severity="danger" rounded />
	<MButton label="Danger" variant="outlined" severity="danger" rounded />
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
