const { Client, Collection } = require("discord.js");
const { loadInteractionCommands, loadListeners } = require("./src/lib/setup");
const { token } = require("./config");

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.commands = new Collection();
loadInteractionCommands(client);
loadListeners(client);

client.login(token);
