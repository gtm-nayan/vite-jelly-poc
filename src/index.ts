import { Intents } from "discord.js";
import { JellyCommands } from "jellycommands";

/**@todo also ignore folders starting with _ */
const commands = Object.entries(
	import.meta.globEager("./commands/**/!(_*).ts")
).map((cm) => cm[1].default);

const client = new JellyCommands({
	commands,
	debug: import.meta.env.DEV,
	cache: import.meta.env.DEV,
	dev: {
		global: import.meta.env.DEV,
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
