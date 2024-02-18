import { resolve } from "node:path";
import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Matarito-vue",
	description: "A VitePress Site",
	cleanUrls: true,
	themeConfig: {
		sidebar: [
			{
				text: "Getting Started",
				collapsed: false,
				items: [
					{ text: "Overview", link: "/overview" },
					{ text: "Installation", link: "/installation" }
				],
			},
			{
				text: "Configuration",
				collapsed: true,
				items: [
					{ text: "Options", link: "/configuration/options" },
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
						text: "Buttons",
						items: [
							{
								text: "MButton",
								collapsed: true,
								items: [
									{
										text: "Features",
										link: "/components/MButton/features",
									},
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
								collapsed: true,
								items: [
									{
										text: "Features",
										link: "/components/MButtonSet/features",
									},
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
					{
						text: "Misc",
						items:[
							{
								text: "MBadge",
								collapsed: true,
								items: [
									{
										text: "Features",
										link: "/components/MBadge/features",
									},
									{
										text: "API",
										link: "/components/MBadge/api",
									},
									{
										text: "Theming",
										link: "/components/MBadge/theming",
									},
								],
							},
						]
					},
				],
			},
			{
				text: "Directives",
				collapsed: true,
				items: [
					{
						text: "Ripple",
						collapsed: true,
						items: [
							{
								text: "Features",
								link: "/directives/Ripple/features",
							},
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
					{
						text: "Badge",
						collapsed: true,
						items: [
							{
								text: "Features",
								link: "/directives/Badge/features",
							},
							{
								text: "API",
								link: "/directives/Badge/api",
							},
							{
								text: "Theming",
								link: "/directives/Badge/theming",
							},
						],
					},
				],
			},
			{
				text: "Theming",
				link: "/theming",
			},
			{
				text: "Guides",
				collapsed: true,
				items: [
					{ text: "Accessibility", link: "/guides/accessibility" },
				],
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
				"@": resolve(__dirname, "../../src"),
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
