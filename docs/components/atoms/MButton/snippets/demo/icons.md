## Icons

Icon of a button is specified with `icon` property and position is configured using `iconPosition` attribute.

<DemoContainer>
		<MButton icon="pi pi-check" />
		<MButton icon="pi pi-check" label="Submit" />
      <MButton icon="pi pi-check" iconPosition="right" label="Submit" />
</DemoContainer>

::: code-group

```vue [Composition API]
<template>
	<MButton icon="pi pi-check" />
	<MButton icon="pi pi-check" label="Submit" />
	<MButton icon="pi pi-check" iconPosition="right" label="Submit" />
</template>

<script setup>
import { MButton } from "matarito-vue";
</script>
```

```vue [Options API]
<template>
	<MButton icon="pi pi-check" />
	<MButton icon="pi pi-check" label="Submit" />
	<MButton icon="pi pi-check" iconPosition="right" label="Submit" />
</template>

<script>
import { MButton } from "matarito-vue";
export default {
	components: { MButton }
};
</script>
```

:::
