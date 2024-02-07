import "./ripple.scss";
const ripple = (element: HTMLElement, clickEvent: MouseEvent) => {
	const diameter = Math.max(element.clientWidth, element.clientHeight);
	const radius = diameter / 2;
	const ripple = element.getElementsByClassName("m-ripple__ink")[0];
	const newRipple = document.createElement("span");
	let timeoutHandler = setTimeout(() => newRipple.remove(), 600);
	if (ripple) {
		window.clearTimeout(timeoutHandler);
		ripple.remove();
	}
	const left = clickEvent.clientX - element.getBoundingClientRect().left - radius;
	const top = clickEvent.clientY - element.getBoundingClientRect().top - radius;

	newRipple.style.width = newRipple.style.height = `${diameter}px`;
	newRipple.style.left = clickEvent.clientX ? `${left}px` : `calc(50% - ${diameter / 2}px)`;
	newRipple.style.top = clickEvent.clientY ? `${top}px` : `calc(50% - ${diameter / 2}px)`;
	newRipple.classList.add("m-ripple__ink");
	element.classList.add("m-ripple");
	element.appendChild(newRipple);
	timeoutHandler = setTimeout(() => newRipple.remove(), 600);
};
export default {
	mounted: (element: HTMLElement) => {
		element.addEventListener("click", (event) => ripple(element, event));
	},
	unmounted: (element: HTMLElement) => {
		element.removeEventListener("click", (event) => ripple(element, event));
	}
};
