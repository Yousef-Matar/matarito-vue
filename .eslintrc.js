module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"plugin:prettier/recommended"
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"prettier/prettier": [
			"error",
			{
				tabWidth: 1,
				useTabs: true,
				endOfLine: "auto",
				trailingComma: "none",
				singleAttributePerLine: true,
				bracketSameLine: true,
				bracketSpacing: true,
				arrowParens: "always",
				htmlWhitespaceSensitivity: "ignore"
			}
		],
		"vue/component-api-style": ["error", ["script-setup", "composition"]],
		"vue/component-name-in-template-casing": [
			"error",
			"PascalCase",
			{
				registeredComponentsOnly: false
			}
		],
		"vue/custom-event-name-casing": ["error", "kebab-case"],
		"vue/html-button-has-type": [
			"error",
			{
				button: true,
				submit: true,
				reset: true
			}
		],
		"vue/html-comment-content-newline": [
			"error",
			{
				singleline: "never",
				multiline: "never"
			}
		],
		"vue/html-comment-indent": ["error", 2],
		"vue/match-component-import-name": ["error"],
		"vue/no-v-html": 0,
		"vue/max-attributes-per-line": [
			"error",
			{
				singleline: {
					max: 2
				},
				multiline: {
					max: 2
				}
			}
		],
		"vue/html-indent": [
			"error",
			"tab",
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		]
	}
};
