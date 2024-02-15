interface iConfig {
	ripple: boolean;
	autoImport: boolean;
}
const defaultConfig: iConfig = {
	ripple: true,
	autoImport: true
};

export { defaultConfig };
export type { iConfig };

