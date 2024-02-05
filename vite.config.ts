import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), cssInjectedByJsPlugin()],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "matarito-vue",
			formats: ["es"], // adding 'umd' requires globals set to every external module
			fileName: (format) => `matarito-vue.${format}.js`
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				exports: "named",
				globals: {
					vue: "Vue"
				}
			}
		}
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url))
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use "sass:meta";
				@use "@/assets/scss/variables/severities";
				@import "@/assets/scss/global";
				`
			}
		}
	}
});
