const fs = require("fs");

function loadInteractionCommands(client) {
  const folder = fs.readdirSync("./src/commands");
  for (const file of folder) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`🚀 Loaded command: ${command.name}`);
  }
}

function loadListeners(client) {
  const folder = fs.readdirSync("./src/listeners");
  for (const file of folder) {
    const listener = require(`../listeners/${file}`);
    console.log(`🚀 Loaded listener: ${listener.name}`);

    client.on(listener.name, (...args) => listener.run(...args, client));
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
