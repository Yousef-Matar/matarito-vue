import type { DirectiveBinding, VNode } from "vue";
import { nextTick } from "vue";
import "./ripple.scss";
interface iRippleProps {
	color: string;
	duration: string;
}
const ripple = (element: HTMLElement, clickEvent: MouseEvent, props: iRippleProps = { color: "", duration: "" }) => {
	// Calculations
	const diameter = Math.max(element.clientWidth, element.clientHeight);
	const radius = diameter / 2;
	const left = clickEvent.clientX - element.getBoundingClientRect().left - radius;
	const top = clickEvent.clientY - element.getBoundingClientRect().top - radius;

	// Elements
	const ripple = element.getElementsByClassName("m-ripple__ink")[0];
	const newRipple = document.createElement("span");

	if (ripple) {
		ripple.remove();
	}

	newRipple.style.animationDuration = props.duration;
	newRipple.style.backgroundColor = props.color;
	newRipple.style.width = newRipple.style.height = `${diameter}px`;
	newRipple.style.left = clickEvent.clientX ? `${left}px` : `calc(50% - ${diameter / 2}px)`;
	newRipple.style.top = clickEvent.clientY ? `${top}px` : `calc(50% - ${diameter / 2}px)`;
	newRipple.classList.add("m-ripple__ink");
	element.appendChild(newRipple);
};
export default {
	mounted: (element: HTMLElement, props: DirectiveBinding, vNode: VNode) => {
		nextTick(() => {
			const vueComponent = vNode?.el?.__vueParentComponent;
			console.log(vueComponent.appContext.config.globalProperties.$matarito.config);
			if (vueComponent.appContext.config.globalProperties.$matarito.config.ripple || vueComponent.props.ripple) {
				element.classList.add("m-ripple");
				element.onclick = (event) => ripple(element, event, props.value);
			}
		});
	},
	unmounted: (element: HTMLElement) => {
		element.onclick = null;
	}
};
