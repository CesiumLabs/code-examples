const { GCommandsClient } = require("gcommands");
const { join } = require("path");

const client = new GCommandsClient({
  cmdDir: join(__dirname, "commands"),
  //eventDir: join(__dirname, 'events'),
  language: "english",
  commands: {
    slash: "both",
    context: "false",
    prefix: "?"
  }
});

client.on("ready", () => {
  console.log("Ready");
});
client.on("debug", console.log);
client.on("log", console.log);

client.login("TOKEN");
