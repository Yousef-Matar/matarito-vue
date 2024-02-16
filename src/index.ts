import * as components from "@/components";
import type { iConfig } from "@/config";
import { defaultConfig } from "@/config";
import * as directives from "@/directives";
import { App } from "vue";
const install = (app: App, options: iConfig) => {
	const applicationConfig = { ...defaultConfig, ...options };
	app.config.globalProperties.$matarito = applicationConfig;

	if (applicationConfig.autoImport) {
		for (const key in components) {
			// @ts-expect-error error
			app.component(key, components[key]);
		}
		for (const key in directives) {
			// @ts-expect-error error
			app.directive(key, directives[key]);
		}
	}
};

export default { install };
export * from "@/components";
export * from "@/directives";

