const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'userinfo',
	type: 'USER',
	run: (interaction) => {
		const member = interaction.guild.members.cache.get(interaction.targetId);
		const embed = new MessageEmbed()
			.setTitle(`Info of ${member.user.tag}`)
			.setDescription(
				`Profile: ${member.toString()}\nBot: ${
					member.user.bot ? 'Yes' : 'No'
				}\nRoles: ${member.roles.cache.size}\nCreated At: <t:${Math.round(
					member.user.createdTimestamp / 1000
				)}>`
			)
			.setAuthor(
				interaction.user.tag,
				interaction.user.displayAvatarURL({ dynamic: true })
			)
			.setColor('RANDOM');
		interaction.reply({ embeds: [embed] });
	},
};
