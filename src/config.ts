interface iConfig {
	ripple: boolean;
	test: boolean;
	// modular: boolean;
}
const defaultConfig: iConfig = {
	ripple: true,
	test: true
};

export { defaultConfig };
export type { iConfig };

