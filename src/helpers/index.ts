import type { DirectiveBinding, VNode } from "vue";
const getConfiguration = (binding: DirectiveBinding, vNode: VNode) =>
	// @ts-expect-error "As matarito is a custom global property"
	binding?.instance?.$matarito || vNode?.ctx?.appContext?.config?.globalProperties?.$matarito;
export default { getConfiguration };
