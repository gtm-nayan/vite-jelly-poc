import { BuildOptions, Plugin } from "vite";
import { JellyCommands } from "jellycommands";

let client: JellyCommands;

export default function plugin_jelly(
	fp: string,
	buildOptions?: BuildOptions
): Plugin {
	return {
		name: "jelly",
		configureServer: (server) => {
			server.ssrLoadModule(fp).then((mod) => {
				client = mod.default;
			});
		},
		handleHotUpdate: (ctx) => {
			/**@todo actual hmr */
			if (!ctx.modules.every((m) => m.url.includes("/.jellycommands/"))) {
				client?.destroy();
				ctx.server.restart();
			}
		},
		config() {
			return {
				/**@todo remove exports from entry point during build */
				build: {
					ssr: true,
					rollupOptions: {
						input: fp,
					},
					...buildOptions,
				},
			};
		},
	};
}
