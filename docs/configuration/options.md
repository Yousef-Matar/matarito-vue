# Usage

Learn the basics of working with Matarito-vue components.

## Quickstart

After [installation](../guide/installation), to use Matarito-vue in your application you have these two approaches:

- **Plugin import**: You can import Matarito-vue as a whole, Which would make all components globally available in your application
- **Component imports**: Each component can be imported and registered individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

::: code-group

```JS [Plugin import]
import mataritoVue from 'matarito-vue'
const app = createApp(App);
app.use(mataritoVue, { /* options */ });
```

```vue [Component imports]
<script>
import { MButton } from "matarito-vue";
export default {
	components: { MButton }
};
</script>
```

:::

<!-- ## Default font

Matarito-vue uses the Roboto font by default. See [Installation—Roboto font]() for complete details. -->
