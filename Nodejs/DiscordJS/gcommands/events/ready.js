const { Event } = require("gcommands");

module.exports = class extends Event {
    constructor(...args) {
        super(...args, {
            name: "ready",
            ws: false,
            once: false
        })
    }

    async run(client) {
        console.log(`Bot is online ${client.user.tag}`)
    }
}
