const { MessageEmbed } = require('discord.js');
const { Command, ArgumentType } = require('gcommands');
const Util = require('gcommands/src/util/util');

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'userinfo',
      description: 'User info!',
      context: 'user',
      contextMenuName: 'Userinfo',
      args: [
          {
              name: 'user',
              type: ArgumentType.USER,
              description: 'check user informations'
          }
      ]
    });
  }
  
  run({ respond, client, interaction, member, args, objectArgs }) {
    if(interaction.isContextMenu()) args[0] = objectArgs.user.id;
    if(!args?.[0]) args[0] = member.user.id;

    const user = client.users.cache.get(args[0]);

    const embed = new MessageEmbed()
        .setColor('YELLOW')
        .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true }))
        .addFields([
            {
                name: 'Username',
                value: user.tag.toString()
            },
            {
                name: 'Created At',
                value: user.createdAt.toString()
            },
            {
                name: 'Id',
                value: user.id.toString()
            },
            {
                name: 'Badges',
                value: user.flags.toArray().length > 0 ? user.flags.toArray().map(flag => Util.unescape(flag, '_')).join(', ').toString() : 'None'
            }
        ])
        .setFooter('GCommands', user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

    respond({ embeds: [embed] });
  }
}
