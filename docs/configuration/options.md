# Configuration

Global configuration options of the components.

## Import

Configuration is managed by the `MataritoVue` instance imported from `matarito-vue`.

```JS
import MataritoVue from 'matarito-vue'
const app = createApp(App);
app.use(MataritoVue, /* options */);
```

## Usage

After [installation](../guide/installation), to use Matarito-vue in your application you have these two approaches controlled by `autoImport` option specified in the plugin configuration:

- **Auto Import**: You can import Matarito-vue as a whole, Which would make all components globally available in your application.
- **Modular imports**: Each component can be imported and registered individually so that you only bundle what you use. Import path is available in the documentation of each component.

## Options

<div class="full-width d-table">

|     Name     |                   Type                   |                Default                |                 Description                  |
| :----------: | :--------------------------------------: | :-----------------------------------: | :------------------------------------------: |
| `autoImport` | <span class="text--green">Boolean</span> | <span class="VPBadge tip">true</span> | Enables/Disables auto-import of components.  |
|   `ripple`   | <span class="text--green">Boolean</span> | <span class="VPBadge tip">true</span> | Enables/Disables ripple directive animation. |

</div>
