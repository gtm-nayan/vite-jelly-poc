import { Intents } from "discord.js";
import { JellyCommands } from "jellycommands";

/**@todo negative glob pattern to ignore files */

const commands = Object.entries(
	import.meta.globEager("./commands/**/*.ts")
).map((cm) => cm[1].default);

const client = new JellyCommands({
	commands,
	debug: true,
	cache: true,
	dev: {
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
