import { Intents } from "discord.js";
import { JellyCommands } from "jellycommands";

/**@todo negative glob pattern to ignore files */

const commands = Object.entries(
	import.meta.globEager("./commands/**/*.ts")
).map((cm) => cm[1].default);

const client = new JellyCommands({
	commands,
	debug: import.meta.env.DEV,
	cache: import.meta.env.DEV,
	dev: {
		/** @todo Not having this is breaking stuff, u wot m8? */
		global: true,
		guilds: ["803996266513956904"],
	},
	clientOptions: {
		intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
	},
});

client.on("ready", () => {
	console.log(`Logged in as ${client.user?.tag}!`);
});

client.login(import.meta.env.VITE_DISCORD_TOKEN as string);

export default client;
