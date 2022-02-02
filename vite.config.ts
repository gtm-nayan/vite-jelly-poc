import { defineConfig, Plugin } from "vite";
import { JellyCommands } from "jellycommands";

let client: JellyCommands;

const plugin_jelly: Plugin = {
	name: "jelly",
	configureServer: (server) => {
		server.ssrLoadModule("src/index.ts").then((module) => {
			client = module.default;
		});
	},
	handleHotUpdate: (ctx) => {
		/** @todo actual hmr */
		/** @todo restart leaves behind stray instances which crashes the bot with api errors */
		client?.destroy();
		ctx.server.restart();
	},
};

export default defineConfig({
	plugins: [plugin_jelly],
	build: {
		ssr: true,
		rollupOptions: {
			input: "src/index.ts",
		},
	},
});
