import { Client } from "twitter.js";
import credentials from "./config";

const client = new Client();

client.on("ready", async () => {
  console.log(`Online, logged in as ${client.me.username}.`);
  await client.filteredTweets.addRules([
    {
      value: "from:FC5570" // replace FC5570 with the username of the user you want to listen to tweets from.
    }
  ]);
});

client.on("filteredTweetCreate", (tweet) => {
  console.log(`${tweet.author.username} tweeted ${tweet.text}`, tweet);
});

client.login(credentials);
