---
search: false
---

## Loading

When `loading` is present only the loading icon will appear, the element cannot be focused and cursor is loading. The icon spinning animation is handled automatically.

<DemoContainer>
	<MButton loadingIcon="pi pi-spinner" label="Submit" loading />
	<MButton loadingIcon="pi pi-cog" label="Submit" loading />
</DemoContainer>

```vue
<template>
	<MButton loadingIcon="pi pi-spinner" label="Submit" loading />
	<MButton loadingIcon="pi pi-cog" label="Submit" loading />
</template>
```
