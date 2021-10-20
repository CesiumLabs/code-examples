const { readdirSync } = require("fs");

function loadInteractionCommands(client) {
	for (const file of readdirSync("./src/commands")) {
		const command = require(`../commands/${file}`);
		client.commands.set(command.name, command);
		console.log(`🚀 Loaded command: ${command.name}`);
	}
}

function loadListeners(client) {
	for (const file of readdirSync("./src/listeners")) {
		const listener = require(`../listeners/${file}`);
		const listenerName = file.slice(0, -3);

		console.log(`🚀 Loaded listener: ${listenerName}`);

		client.on(listenerName, (...args) => listener(...args, client));
	}
}

function registerSlashCommands(client) {
	const commands = client.commands.values();
	for (const command of commands) {
		client.application.commands.create({
			name: command.name,
			type: command.type ?? "CHAT_INPUT",
			description: command.description,
			options: command.options
		});
	}
}

module.exports = {
	loadInteractionCommands,
	loadListeners,
	registerSlashCommands
};
