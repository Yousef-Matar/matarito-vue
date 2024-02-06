---
search: false
---

## Button Set

Multiple `MButtons` are grouped when wrapped inside an element with `m-button-set` class.

<DemoContainer>
<MButtonSet severity="danger" label="button-set" direction="column">
		<MButton label="Save" severity="help" rounded />
			<MButton label="Save" raised rounded>
				Nested slot
				<M-Button rounded severity="primary" />
			</MButton>
		<M-Button severity="primary" rounded />
		<m-button rounded />
	</MButtonSet>
</DemoContainer>

```vue
<template>
	<MButtonSet severity="danger" label="button-set" direction="column">
		<MButton label="Save" severity="help" rounded />
		<div>
			<MButton label="Save" raised rounded>
				Nested slot
				<M-Button rounded severity="primary" />
			</MButton>
		</div>
		<M-Button severity="primary" rounded />
		<m-button rounded />
	</MButtonSet>
</template>
```
