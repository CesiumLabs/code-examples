const { Structures } = require("discord.js");

module.exports = (client) => {
    const { MessageButton, MessageActionRow } = require("discord-buttons");

    class TextChannel extends Structures.get("TextChannel") {
        async createSlider(userID, embeds, emojiNext, emojiBack) {

            const button_back = new MessageButton()
                .setStyle('red')
                .setID('back');

            const button_next = new MessageButton()
                .setStyle('green')
                .setID('next');

            const button_back_disabled = new MessageButton()
                .setStyle('gray')
                .setID('back_disabled')
                .setDisabled();

            const button_next_disabled = new MessageButton()
                .setStyle('gray')
                .setID('next_disabled')
                .setDisabled();

            if (emojiNext && emojiBack) {
                button_back.setEmoji(emojiBack)
                button_next.setEmoji(emojiNext)
                button_back_disabled.setEmoji(emojiBack)
                button_next_disabled.setEmoji(emojiNext)
            }
            else {
                button_back.setLabel('<<');
                button_next.setLabel('>>');
                button_back_disabled.setLabel('<<');
                button_next_disabled.setLabel('>>');
            };

            const buttonsActive = new MessageActionRow()
                .addComponents([button_back, button_next]);

            const buttonsDisabled = new MessageActionRow()
                .addComponents([button_back_disabled, button_next_disabled]);

            this.send(embeds[0], buttonsActive).then(msg => {
                const collector = msg.createButtonCollector((button) => userID === userID, { time: 300000 });
        
                let currentPage = 0;
            
                collector.on('collect', button => {
                    button.reply.defer();

                    if (button.clicker.user.id == userID) {
                        if (button.id == "back") {
                            if (currentPage !== 0) {
                                --currentPage;
                                msg.edit(embeds[currentPage], buttonsActive);
                            } else {
                                currentPage = embeds.length - 1
                                msg.edit(embeds[currentPage], buttonsActive);
                            };
                        }
    
                        else if (button.id == "next"){
                            if (currentPage < embeds.length - 1) {
                                currentPage++;
                                msg.edit(embeds[currentPage], buttonsActive);
                            } else {
                                currentPage = 0
                                msg.edit(embeds[currentPage], buttonsActive);
                            };
                        };
                    };
                });
                collector.on('end', collected => {
                    msg.edit(embeds[0], buttonsDisabled)
                });
                collector.on("error", (e) => console.log(e))
            })
        }
    };

    Structures.extend("TextChannel", () => TextChannel);
}