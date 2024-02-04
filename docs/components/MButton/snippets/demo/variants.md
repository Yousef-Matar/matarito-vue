## Variants

The `MButton` comes in three `variants`: filled (default), text, and outlined.

The `MButton` can also be rounded using `rounded` property.

- **Filled buttons**: are high-emphasis, distinguished by their use of fill. They contain actions that are primary to your app.
- **Text buttons**: are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.
- **Outlined buttons**: are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app.

<DemoContainer>
	<MButton label="Filled" />
	<MButton label="Text" variant="text"/>
	<MButton label="outlined" variant="outlined"/>
	<MButton label="Filled-rounded" rounded/>
	<MButton label="Text-rounded" variant="text" rounded/>
	<MButton label="outlined-rounded" variant="outlined" rounded/>
</DemoContainer>

::: code-group

```vue [Composition API]
<template>
	<MButton label="Filled" />
	<MButton label="Text" variant="text" />
	<MButton label="outlined" variant="outlined" />
	<MButton label="Filled-rounded" rounded />
	<MButton label="Text-rounded" variant="text" rounded />
	<MButton label="outlined-rounded" variant="outlined" rounded />
</template>
```

```vue [Options API]
<template>
	<MButton label="Filled" />
	<MButton label="Text" variant="text" />
	<MButton label="outlined" variant="outlined" />
	<MButton label="Filled-rounded" rounded />
	<MButton label="Text-rounded" variant="text" rounded />
	<MButton label="outlined-rounded" variant="outlined" rounded />
</template>
```

:::
