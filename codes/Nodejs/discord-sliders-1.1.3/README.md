## Discord-Sliders Info. 
![Discord](https://img.shields.io/discord/857706808969265172?label=Support%20server)
![GitHub issues](https://img.shields.io/github/issues/Deadr3amer/discord-sliders?color=red&label=Issues%2FBugs)
![NPM](https://img.shields.io/npm/l/discord-sliders)
![npm](https://img.shields.io/npm/v/discord-sliders)
### [Note: This package is only compatible with discord.js version 12.5.3.]
> [Note v2: This is a fixed version of [discord-slider](https://www.npmjs.com/package/discord-slider) package, which was made by: gaetan20]


>Welcome to this page! Let me explain, what discord-sliders is.
It is a small node.js package, which allows you to create Discord Embed Pages contolled by buttons easily.

## Part 1 - How to install?
Type the following command in terminal:
```sh
npm install discord-sliders
```
## Part 2 - Setting everything up...
You have to add the following code in your main file (in most cases, it will be index.js).
Note: If you don't do this properly, the module won't work.
```js
const Discord = require('discord.js'); // Importing the Discord.JS module.
const client = new Discord.Client(); // Creating your DiscordClient.
require("discord-buttons")(client); // Import and require discord-buttons library.
require('discord-sliders')(client); // Import and require discord-sliders library.
```

<br />

## Part 3 - Creating embed-slider...
You can create it, by using the following method...
```js
channel.createSlider(userID, embedsArray, emojiNext, emojiBack)
```
- Note: userID and embedsArray objects are REQUIRED.

## Part 4 - Example (wthout CommandHandler)...
```js
const Discord = require('discord.js')

client.on('message', async (message) => {
    if(message.content === 'menu') {
        let embed1 = new Discord.MessageEmbed()
            .setTitle('This is the first option!')
            .setDescription('Description...')
        let embed2 = new Discord.MessageEmbed()
            .setTitle('This is the second option')
            .setDescription('Description...')
        return message.channel.createSlider(message.author.id, [embed1, embed2], "➡", "⬅")
    }
})
```

## Part 5 - Example (using CommandHandler)...
```js
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'menutest',
    description: 'Discord-Sliders package test!',
    async execute(client, message) {
        let embed1 = new MessageEmbed()
            .setTitle('This is the first option!')
            .setDescription('Description...')
        let embed2 = new MessageEmbed()
            .setTitle('This is the second option')
            .setDescription('Description')
        return message.channel.createSlider(message.author.id, [embed1, embed2], "➡", "⬅")
    }
}
```


> After 5 minutes, the menu will automatically turn off.

<br />

## Part 6 - If you run into any issues, feel free to ask me on Discord!

[Discord](https://discord.gg/vRvtnGt82p) - ask ONLY on `#🔗┇js-help`
