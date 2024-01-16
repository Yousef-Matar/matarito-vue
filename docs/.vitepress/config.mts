import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: "/matarito-vue/",
	title: "Matarito-vue",
	description: "A VitePress Site",
	themeConfig: {
		sidebar: [
			{
				text: "Getting Started",
				collapsed: false,
				items: [
					{ text: "Overview", link: "/guide/overview" },
					{ text: "Installation", link: "/guide/installation" },
				],
			},
			{
				text: "Components",
				collapsed: true,
				items: [
					{
						text: "All Components",
						link: "/components/all-components",
					},
					{
						text: "Atoms",
						items: [
							{
								text: "Button",
								link: "/components/atoms/MButton/m-button",
							},
						],
					},
				],
			},
		],
		search: {
			provider: "local",
		},

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/Yousef-Matar/matarito-vue",
			},
			{
				icon: "linkedin",
				link: "https://www.linkedin.com/in/yousef-matar-562472202/",
			},
		],
	},
  vite: {
    resolve: {
      alias: {
        'matarito-vue': resolve(__dirname, '../../src'),
      },
    },
	 css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use "sass:meta";
				@use "matarito-vue/assets/scss/variables/colors";
				@use "matarito-vue/assets/scss/variables/opacities";
				@import "matarito-vue/assets/scss/variables.scss";
				`
			}
		}
	}
  }
});
