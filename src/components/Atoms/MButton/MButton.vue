<template>
	<button
		:type="type"
		:class="buttonClass"
		:disabled="disabled || loading"
		:title="buttonAccessability"
		:aria-label="buttonAccessability"
		:aria-labelledby="buttonAccessability"
		@click="(event) => clickHandler(event)">
		<i
			v-if="loading && loadingIcon"
			:class="loadingIconClass" />
		<template v-else>
			<i
				v-if="icon"
				:class="iconClass" />
			<span
				v-if="label || $slots['default']"
				:class="labelClass">
				<slot>
					{{ label }}
				</slot>
			</span>
		</template>
	</button>
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
	}
});
const buttonAccessability = props.label;
const slots = useSlots();
const buttonClass = computed(() => {
	return {
		"m-button m-component": true,
		[`m-button--${props.severity}`]: true,
		[`m-button--${props.size}`]: true,
		[`m-button--${props.variant}`]: true,
		"m-button--rounded": props.rounded,
		"m-button--disabled": props.disabled,
		"m-button--loading": props.loading,
		"m-button--icon-only": !props.label && !slots["default"] && props.icon,
		"m-button--raised": props.raised
	};
});
const labelClass = computed(() => {
	return {
		"m-button__label": true
	};
});
const iconClass = computed(() => {
	return {
		"m-button__icon": true,
		[`m-button__icon--${props.iconPosition}`]: props.icon,
		[`${props.icon}`]: props.icon
	};
});
const loadingIconClass = computed(() => {
	return {
		[`${props.loadingIcon}`]: props.loadingIcon,
		"icon--spin": props.loading && props.loadingIcon
	};
});
const clickHandler = (event: MouseEvent) => (!props.propagate ? event.stopPropagation() : null);
</script>
<style scoped lang="scss">
.m-button {
	// Default
	color: $text-primary;
	font-size: $md-font;
	padding: $md-padding;
	min-width: $md-button-size;
	min-height: $md-button-size;
	border-color: $primary;
	background-color: $primary;
	&:enabled:focus {
		outline-offset: 3px;
		outline: 2px solid $primary;
	}
	&:enabled:not(.m-button--text, .m-button--outlined):hover {
		background-color: darken($primary, 10%);
	}
	&:enabled:not(.m-button--filled):hover {
		background-color: rgba($primary, 0.2);
	}
	&.m-button--icon-only {
		width: $md-button-size;
		height: $md-button-size;
	}
	// Base class for button
	box-sizing: border-box;
	border-radius: 0.25rem;
	transition-property: all;
	transition-timing-function: linear;
	transition-duration: 200ms;
	cursor: pointer;
	border: unset;
	display: inline-flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
	vertical-align: bottom;
	text-align: center;
	outline: none;
	// Text
	&__label {
		flex-grow: 1;
		&:first-letter {
			text-transform: capitalize;
		}
	}
	// Icon
	&__icon {
		order: 0;
		&--right {
			order: 1;
		}
	}
	// Modifiers
	&--disabled {
		cursor: not-allowed;
		opacity: $disabled-opacity;
	}
	&--loading {
		cursor: wait;
		opacity: $loading-opacity;
	}
	// Severities
	@each $severity, $color in meta.module-variables("colors") {
		&--#{$severity} {
			border-color: $color;
			background-color: $color;
			&:enabled:focus {
				outline-offset: 3px;
				outline: 2px solid $color;
			}
			&:enabled:not(.m-button--text, .m-button--outlined):hover {
				background-color: darken($color, 10%);
			}
			&:enabled:not(.m-button--filled):hover {
				background-color: rgba($color, 0.2);
			}
		}
	}
	// Variants
	&--rounded {
		border-radius: 2rem;
	}
	&--outlined {
		border-width: 1px;
		border-style: solid;
	}
	&--text,
	&--outlined {
		background: transparent;
		@each $severity, $color in meta.module-variables("colors") {
			&.m-button--#{$severity} {
				color: $color;
			}
		}
	}
	// Sizes
	&--sm {
		font-size: $sm-font;
		padding: $sm-padding;
		min-width: $sm-button-size;
		min-height: $sm-button-size;
		&.m-button--icon-only {
			width: $sm-button-size;
			height: $sm-button-size;
		}
	}
	&--md {
		font-size: $md-font;
		padding: $md-padding;
		min-width: $md-button-size;
		min-height: $md-button-size;
		&.m-button--icon-only {
			width: $md-button-size;
			height: $md-button-size;
		}
	}
	&--lg {
		font-size: $lg-font;
		padding: $lg-padding;
		min-width: $lg-button-size;
		min-height: $lg-button-size;
		&.m-button--icon-only {
			width: $lg-button-size;
			height: $lg-button-size;
		}
	}
	&--raised {
		box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.3);
	}
}
</style>
