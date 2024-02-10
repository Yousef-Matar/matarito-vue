import { App } from "vue";
import * as components from "./components";
import * as directives from "./directives";
function install(app: App, options: { ripple: boolean }) {
	for (const key in components) {
		// @ts-expect-error error
		app.component(key, components[key]);
	}
	for (const key in directives) {
		if (!options.ripple && key == "Ripple") {
			continue;
		}
		// @ts-expect-error error
		app.directive(key, directives[key]);
	}
}

export default { install };
export * from "./components";
export * from "./directives";
