import { command } from "jellycommands";

/**test hmr*/
export default command({
	name: "ping",
	description: "Ping!",
	global: true,
	run: ({ interaction }) => {
		interaction.reply("Pong!");
	},
});
