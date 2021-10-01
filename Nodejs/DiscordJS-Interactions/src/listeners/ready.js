const { registerSlashCommands } = require('../lib/setup');

module.exports = {
	name: 'ready',
	run: (client) => {
		console.log(`Logged in as ${client.user.tag}`);
		registerSlashCommands(client);
	},
};
