const { registerSlashCommands } = require("../lib/setup");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}`);
    registerSlashCommands(client);
};