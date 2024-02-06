---
search: false
---

## Accessibility

`MButton` component renders a native button element that implicitly includes any passed prop.

### Title

`title` property can be used in order to provide further information to the user on hover, if not present `label` prop is used as the value.

```vue
<template>
	<MButton label="Submit" />
	<MButton label="Submit" title="Custom title" />
</template>
```

### Screen Reader

Text to describe `MButton` is defined with the `aria-label` prop, if not present `label` prop is used as the value. If the `MButton` is icon only or custom templating is used, it is recommended to use `aria-label` so that screen readers would be able to read the element properly.

```vue
<template>
	<MButton icon="pi pi-check" />
	<MButton icon="pi pi-check" label="Submit" />
	<MButton aria-label="Submit">Submit</MButton>
</template>
```

:::

### Keyboard Support

<div class="full-width d-table">

|   Key   |           Function            |
| :-----: | :---------------------------: |
|  `Tab`  | Moves focus to the `MButton`. |
| `Space` |   Activates the `MButton`.    |
| `Enter` |   Activates the `MButton`.    |

</div>
