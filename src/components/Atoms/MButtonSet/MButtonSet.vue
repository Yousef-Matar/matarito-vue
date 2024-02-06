<template>
	<div :class="buttonSetClass">
		<component
			v-for="(slotComponent, index) in slotComponents || []"
			:key="index"
			:is="slotComponent"
			v-bind="Object.assign({}, buttonSetProps, slotComponent?.props)" />
	</div>
</template>
<script setup lang="ts">
import { computed, useSlots } from "vue";
import type { ButtonHTMLAttributes, PropType } from "vue";

const props = defineProps({
	disabled: Boolean,
	loading: Boolean,
	raised: Boolean,
	rounded: Boolean,
	propagate: Boolean,
	label: { type: String, default: null },
	loadingIcon: { type: String, default: "pi pi-spinner" },
	icon: { type: String, default: null },
	type: {
		type: String as PropType<ButtonHTMLAttributes["type"]>,
		default: "button",
		validator: (value: string) => {
			return ["button", "submit", "reset"].includes(value);
		}
	},
	size: {
		type: String,
		default: "md"
	},
	variant: {
		type: String,
		default: "filled"
	},
	severity: {
		type: String,
		default: "primary"
	},
	iconPosition: {
		type: String,
		default: "left"
	},
	direction: {
		type: String,
		default: "row"
	}
});
const buttonSetProps = JSON.parse(JSON.stringify(props));
delete buttonSetProps["direction"];
const slots = useSlots();
const slotComponents = slots?.default?.().filter((element) => (element["type"] as never)["__name"] === "MButton");
const buttonSetClass = computed(() => {
	return {
		"m-button-set": true,
		[`m-button-set--${props.direction}`]: true
	};
});
</script>
<style lang="scss">
.m-button-set {
	display: flex;
	&--row {
		flex-direction: row;
		& > .m-button {
			&:not(.m-button--rounded):first-child {
				border-top-left-radius: var(--m-button-border-radius, var(--border-radius));
				border-bottom-left-radius: var(--m-button-border-radius, var(--border-radius));
			}
			&:not(.m-button--rounded):last-child {
				border-top-right-radius: var(--m-button-border-radius, var(--border-radius));
				border-bottom-right-radius: var(--m-button-border-radius, var(--border-radius));
			}
		}
	}
	&--column {
		flex-direction: column;
		& > .m-button {
			&:not(.m-button--rounded):first-child {
				border-top-left-radius: var(--m-button-border-radius, var(--border-radius));
				border-top-right-radius: var(--m-button-border-radius, var(--border-radius));
			}
			&:not(.m-button--rounded):last-child {
				border-bottom-left-radius: var(--m-button-border-radius, var(--border-radius));
				border-bottom-right-radius: var(--m-button-border-radius, var(--border-radius));
			}
		}
	}
	& > .m-button {
		position: relative;
		&:not(.m-button--rounded) {
			border-radius: 0;
		}
		&:enabled:focus {
			z-index: 1;
		}
	}
}
</style>
