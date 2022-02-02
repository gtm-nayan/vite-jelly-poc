import { defineConfig } from "vite";
import plugin_jelly from "./plugin.js";

export default defineConfig({
	plugins: [plugin_jelly("src/index.ts")],
	build: {
		ssr: true,
		rollupOptions: {
			input: "src/index.ts",
		},
	},
});
