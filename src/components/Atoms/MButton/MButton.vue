<template>
	<button
		:type="type"
		:class="buttonClass"
		:disabled="disabled || loading"
		@click.stop>
		<i
			v-if="loading && loadingIcon"
			:class="loadingIcon" />
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
import type { PropType, ButtonHTMLAttributes } from "vue";
import { computed, useSlots } from "vue";
const props = defineProps({
	disabled: Boolean,
	loading: Boolean,
	raised: Boolean,
	label: { type: String, default: null },
	loadingIcon: { type: String, default: null },
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
		default: "md",
		validator: (value: string) => {
			return ["sm", "md", "lg"].includes(value);
		}
	},
	variant: {
		type: String,
		default: "filled",
		validator: (value: string) => {
			return ["filled", "rounded", "text", "outlined"].includes(value);
		}
	},
	severity: {
		type: String,
		default: "primary",
		validator: (value: string) => {
			return [
				"primary",
				"secondary",
				"success",
				"info",
				"warning",
				"help",
				"danger"
			].includes(value);
		}
	},
	iconPosition: {
		type: String,
		default: "left",
		validator: (value: string) => {
			return ["left", "right"].includes(value);
		}
	}
});
const slots = useSlots();
const buttonClass = computed(() => {
	return {
		[`m-button m-component m-button--${props.severity} m-button--${props.variant} m-button--${props.size}`]:
			true,
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
</script>
<style scoped lang="scss">
// Base class for button
.m-button {
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
	color: $text-primary;
	// Text
	&__label {
		flex-grow: 1;
		&:first-letter {
			text-transform: capitalize;
		}
	}
	// Icon
	&__icon {
		&--left {
			order: 0;
		}
		&--right {
			order: 1;
		}
	}
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
				box-shadow:
					0 0 0 2px white,
					0 0 0 4px $color;
				@include darkMode {
					box-shadow:
						0 0 0 2px black,
						0 0 0 4px $color;
				}
			}
			&:enabled:not(.m-button--text, .m-button--outlined):hover {
				background-color: darken($color, 10%);
			}
			&:enabled:not(.m-button--filled, .m-button--rounded):hover {
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
		min-width: 1.5rem;
		min-height: 1.5rem;
		&.m-button--icon-only {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	&--md {
		font-size: $md-font;
		padding: $md-padding;
		min-width: 2rem;
		min-height: 2rem;
		&.m-button--icon-only {
			width: 2rem;
			height: 2rem;
		}
	}
	&--lg {
		font-size: $lg-font;
		padding: $lg-padding;
		min-width: 2.5rem;
		min-height: 2.5rem;
		&.m-button--icon-only {
			width: 2.5rem;
			height: 2.5rem;
		}
	}
	&--raised {
		box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.3);
	}
}
</style>
