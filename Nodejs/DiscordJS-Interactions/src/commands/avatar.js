const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: 'avatar',
	description: 'View the avatar of a user.',
	options: [
		{
			name: 'user',
			type: 'USER',
			description: 'The user to show the avatar of.',
			required: true,
		},
	],

	run(interaction) {
		const user = interaction.options.get('user').user;
		const avatar = user.displayAvatarURL({ dynamic: true, size: 4096 });

		const row = new MessageActionRow().addComponents(
			new MessageButton()
				.setStyle('LINK')
				.setLabel('PNG')
				.setURL(user.displayAvatarURL({ dynamic: true, format: 'png' })),

			new MessageButton()
				.setStyle('LINK')
				.setLabel('JPG')
				.setURL(user.displayAvatarURL({ dynamic: true, format: 'jpg' })),

			new MessageButton()
				.setStyle('LINK')
				.setLabel('WEBP')
				.setURL(user.displayAvatarURL({ dynamic: true, format: 'webp' }))
		);
		interaction.reply({
			content: `Avatar of ${user.tag}`,
			components: [row],
			files: [
				{
					name: `avatar.png`,
					attachment: avatar,
				},
			],
		});
	},
};
