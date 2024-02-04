## Accessibility

MButton component renders a native button element that implicitly includes any passed prop.

### Title

`title` property can be used in order to provide further information to the user on hover, if not present `label` prop is used as the value.

::: code-group

```vue [Composition API]
<template>
	<MButton label="Submit" />
	<MButton label="Submit" title="Custom title" />
</template>

<script setup>
import { MButton } from "matarito-vue";
</script>
```

```vue [Options API]
<template>
	<MButton label="Submit" />
	<MButton label="Submit" title="Custom title" />
</template>

<script>
import { MButton } from "matarito-vue";
export default {
	components: { MButton }
};
</script>
```

:::

### Screen Reader

Text to describe the button is defined with the `aria-label` prop, if not present `label` prop is used as the value. If the button is icon only or custom templating is used, it is recommended to use `aria-label` so that screen readers would be able to read the element properly.

::: code-group

```vue [Composition API]
<template>
	<MButton icon="pi pi-check" />
	<MButton icon="pi pi-check" label="Submit" />
	<MButton aria-label="Submit">Submit</MButton>
</template>

<script setup>
import { MButton } from "matarito-vue";
</script>
```

```vue [Options API]
<template>
	<MButton icon="pi pi-check" />
	<MButton icon="pi pi-check" label="Submit" />
	<MButton aria-label="Submit">Submit</MButton>
</template>

<script>
import { MButton } from "matarito-vue";
export default {
	components: { MButton }
};
</script>
```

:::

### Keyboard Support

<div class="full-width d-table">

|  Key  |          Function          |
| :---: | :------------------------: |
|  tab  | Moves focus to the button. |
| space |   Activates the button.    |
| enter |   Activates the button.    |

</div>
