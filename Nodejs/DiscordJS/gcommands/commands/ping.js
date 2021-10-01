const { Command } = require('gcommands');

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'ping',
      description: 'Ping commnd!',
      context: "false"
    });
  }
  run({ respond, client }) {
    respond(`Ping **${client.ws.ping}**!`);
  }
}
