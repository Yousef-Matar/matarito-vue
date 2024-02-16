---
search: false
---

## Configuration

To start with, Ripple needs to be enabled globally. See the [Configuration options](../../../configuration/options) for details.

::: code-group

```JS [Plugin configuration]
import MataritoVue from 'matarito-vue'
const app = createApp(App);
app.use(MataritoVue, { ripple:true });
```

```vue [Composition API]
<script setup>
import { Ripple } from "matarito-vue";
</script>
```

```vue [Options API]
<script>
export default {
	mounted() {
		this.$matarito.config.ripple = true;
	}
};
</script>
```

:::
