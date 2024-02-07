<template>
	<button
		:type="type"
		:class="buttonClass"
		:disabled="disabled || loading"
		:title="buttonAccessability"
		:aria-label="buttonAccessability"
		:aria-labelledby="buttonAccessability"
		@click="(event) => clickHandler(event)"
		v-ripple>
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
import Ripple from "../../../directives/Ripple/ripple";
const vRipple = Ripple;
const props = defineProps({
	disabled: Boolean,
	loading: Boolean,
	raised: Boolean,
	rounded: Boolean,
	propagate: Boolean,
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
		"m-button": true,
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
		"m-button__loading-icon": true,
		[`${props.loadingIcon}`]: props.loadingIcon,
		"icon--spin": props.loading && props.loadingIcon
	};
});
const clickHandler = (event: MouseEvent) => (!props.propagate ? event.stopPropagation() : null);
</script>
<style lang="scss">
.m-button {
	// Base class for button
	transition-property: all;
	transition-timing-function: linear;
	transition-duration: 200ms;
	cursor: pointer;
	display: inline-flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
	vertical-align: bottom;
	text-align: center;
	// Text
	&__label {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		&:first-letter {
			text-transform: capitalize;
		}
	}
	// Icon
	&__icon {
		order: 0;
		&--left {
			order: 0;
		}
		&--right {
			order: 1;
		}
	}
	// Modifiers
	&--loading {
		cursor: wait;
		opacity: var(--m-button-loading-opacity, var(--loading-opacity));
	}
	// Severities
	@each $severity, $color in meta.module-variables("severities") {
		&--#{$severity} {
			border-color: var(--m-button-#{$severity}, var(--#{$severity}));
			background-color: var(--m-button-#{$severity}, var(--#{$severity}));
			&:enabled {
				&:focus {
					outline-offset: 3px;
					outline: 2px solid var(--m-button-#{$severity}, var(--#{$severity}));
				}
				&:hover {
					&.m-button--filled {
						background-color: var(--m-button-#{$severity}-filled-hover, var(--#{$severity}-filled-hover));
					}
					&.m-button--text {
						background-color: var(--m-button-#{$severity}-text-hover, var(--#{$severity}-text-hover));
					}
					&.m-button--outlined {
						background-color: var(--m-button-#{$severity}-outlined-hover, var(--#{$severity}-outlined-hover));
					}
				}
			}
		}
	}
	// Variants
	&--text,
	&--outlined {
		background: transparent;
		@each $severity, $color in meta.module-variables("severities") {
			&.m-button--#{$severity} {
				color: var(--m-button-#{$severity}, var(--#{$severity}));
			}
		}
	}
	// Sizes
	&--sm.m-button--icon-only {
		width: var(--m-button-sm-size, var(--sm-size));
		height: var(--m-button-sm-size, var(--sm-size));
	}
	&--md.m-button--icon-only {
		width: var(--m-button-md-size, var(--md-size));
		height: var(--m-button-md-size, var(--md-size));
	}
	&--lg.m-button--icon-only {
		width: var(--m-button-lg-size, var(--lg-size));
		height: var(--m-button-lg-size, var(--lg-size));
	}
}
@include generateVariants(m-button);
</style>
