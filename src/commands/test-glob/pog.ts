import { command } from "jellycommands";

/**test hmr */
export default command({
	name: "pog",
	description: "Ping!",
	global: true,
	run: ({ interaction }) => {
		interaction.reply("Champ!");
	},
});
