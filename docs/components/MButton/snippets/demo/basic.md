---
search: false
---

## Basic

Text to display on a button is defined with the `label` property or the `predefined default slot`.

<DemoContainer>
		<MButton label="Submit" />
		<MButton>Submit </MButton>
</DemoContainer>

::: code-group

```vue [Composition API]
<template>
	<MButton label="Submit" />
	<MButton>Submit</MButton>
</template>
```

```vue [Options API]
<template>
	<MButton label="Submit" />
	<MButton>Submit</MButton>
</template>
```

:::
