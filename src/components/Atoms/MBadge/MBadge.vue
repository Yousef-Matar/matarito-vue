<template>
	<span :class="badgeClass">
		<template v-if="label || $slots['default']">
			<slot>
				{{ label }}
			</slot>
		</template>
	</span>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
	size: {
		type: String,
		default: "md"
	},
	severity: {
		type: String,
		default: "primary"
	},
	label: {
		type: String,
		default: null
	}
});
const badgeClass = computed(() => {
	return {
		"m-badge": true,
		[`m-badge--${props.severity}`]: true,
		[`m-badge--${props.size}`]: true
	};
});
</script>
<style lang="scss">
.m-badge {
	-webkit-tap-highlight-color: transparent;
	// Base class for button
	transition-property: all;
	transition-timing-function: linear;
	transition-duration: 200ms;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	vertical-align: bottom;
	text-align: center;
	color: var(--m-badge-text-primary, var(--text-primary));
	outline: none;
	border: unset;
	box-sizing: border-box;
	border-radius: 50%;
	// Severities
	@each $severity, $color in meta.module-variables("severities") {
		&--#{$severity} {
			border-color: var(--m-badge-#{$severity}, var(--#{$severity}));
			background-color: var(--m-badge-#{$severity}, var(--#{$severity}));
		}
	}
	&--inverse {
		background-color: inherit;
		color: inherit;
		background-color: inherit;
		-webkit-filter: invert(100%);
		filter: invert(100%);
	}
}
@include generateSizes(m-badge);
</style>
