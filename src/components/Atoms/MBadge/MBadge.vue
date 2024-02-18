<template>
	<span :class="badgeClass">
		<template v-if="value || $slots['default']">
			<slot>
				{{ value }}
			</slot>
		</template>
	</span>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
	size: {
		type: String,
		default: "sm"
	},
	severity: {
		type: String,
		default: "primary"
	},
	value: {
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
<style lang="scss"></style>
