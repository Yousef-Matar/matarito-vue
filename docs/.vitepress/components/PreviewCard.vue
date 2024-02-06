<template>
	<div class="preview-card">
		<div class="preview-card-content">
			<div
				class="card-overlay"
				@click="navigateTo" />
			<slot></slot>
		</div>
		<div class="preview-card-label">{{ label }}</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vitepress'
const props = defineProps({
	label: { type: String, required: true },
	pageLink: { type: String, required: true }
});
const router=useRouter()
const navigateTo = () => {
	router.go(props.pageLink)
};
</script>
<style lang="scss" scoped></style>
