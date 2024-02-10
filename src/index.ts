import { App } from "vue";
import * as components from "./components";
import * as directives from "./directives";
// Vue.config.globalProperties.$appState =
function install(app: App, options: { ripple: boolean }) {
	app.config.globalProperties.$appState = { testingState: false };
	for (const key in components) {
		// @ts-expect-error error
		app.component(key, components[key]);
	}
	for (const key in directives) {
		if (!options.ripple && key == "Ripple") {
			app.config.globalProperties.$appState["ripple"] = options.ripple;
			continue;
		}
		// @ts-expect-error error
		app.directive(key, directives[key]);
	}
}

export default { install };
export * from "./components";
export * from "./directives";

