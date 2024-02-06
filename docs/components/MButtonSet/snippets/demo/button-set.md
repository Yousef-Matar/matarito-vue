---
search: false
---

## Button Set

Multiple `MButtons` props are controlled by the `MButtonSet` component, these props can be overridden by specifying the `MButton` props.

<DemoContainer>
	<MButtonSet severity="danger" label="MButtonSet" direction="row">
		<MButton label="MButton" severity="help" />
		<MButton severity="primary" variant="outlined" />
		<MButton />
	</MButtonSet>
</DemoContainer>

```vue
<template>
	<MButtonSet severity="danger" label="MButtonSet" direction="row">
		<MButton label="MButton" severity="help" />
		<MButton severity="primary" variant="outlined" />
		<MButton />
	</MButtonSet>
</template>
```
