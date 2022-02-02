import { command } from "jellycommands";

/**test hmr*/
export default command({
	name: "hidden",
	description: "You shouldn't be seeing this!",
	global: true,
	run: ({ interaction }) => {
		interaction.reply("Peek-a-boo!");
	},
});
