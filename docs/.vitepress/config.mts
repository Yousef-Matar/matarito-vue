import { resolve } from "node:path";
import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: "/matarito-vue/",
	title: "Matarito-vue",
	description: "A VitePress Site",
	cleanUrls: true,
	themeConfig: {
		sidebar: [
			{
				text: "Getting Started",
				collapsed: false,
				items: [
					{ text: "Overview", link: "/guide/overview" },
					{ text: "Installation", link: "/guide/installation" },
					{ text: "Usage", link: "/guide/usage" },
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
						text: "Button",
						items: [
							{
								text: "MButton",
								link: "/components/MButton/features",
								collapsed: true,
								items: [
									{
										text: "API",
										link: "/components/MButton/api",
									},
									{
										text: "Theming",
										link: "/components/MButton/theming",
									},
								],
							},
							{
								text: "MButtonSet",
								link: "/components/MButtonSet/features",
								collapsed: true,
								items: [
									{
										text: "API",
										link: "/components/MButtonSet/api",
									},
									{
										text: "Theming",
										link: "/components/MButtonSet/theming",
									},
								],
							},
						],
					},
				],
			},
			{
				text: "Directives",
				collapsed: true,
				items: [
					{
						text: "Ripple",
						link: "/directives/Ripple/features",
						collapsed: true,
						items: [
							{
								text: "API",
								link: "/directives/Ripple/api",
							},
							{
								text: "Theming",
								link: "/directives/Ripple/theming",
							},
						],
					},
				],
			},
			{
				text: "Theming",
				link: "/theming/theming",
			},
			{
				text: "Discover",
				collapsed: true,
				items: [
					{ text: "About Us", link: "/discover/about-us" },
					{ text: "Source code", link: "https://github.com/Yousef-Matar/matarito-vue" },
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
				"matarito-vue": resolve(__dirname, "../../src"),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
				@use "sass:meta";
				@use "matarito-vue/assets/scss/variables/severities";
				@import "matarito-vue/assets/scss/global";
				`,
				},
			},
		},
	},
});
