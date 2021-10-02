// npm i ytdl-core progress youtube-sr
const ytdl = require("ytdl-core");
const fs = require("node:fs");
const progress = require("progress");
const youtube = require("youtube-sr").default;
const readline = (require("readline")).createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve, reject) => readline.question(text, (answer) => resolve(answer)));

const isPlaylist = (url) => !!url.includes("playlist?list")
let url = question("\x1b[36m|INFO|\x1b[0m Put youtube video/playlist URL here: ");

(async() => {
  url = await url;

  let videos = [];
  if(isPlaylist(url)) {
    console.log("\x1b[36m|INFO|\x1b[0m I'm getting a playlist...")

    let playlist = await youtube.getPlaylist(url);
    videos = (await playlist.fetch()).videos;
  } else {
    videos.push({
      id: url.split("?v=")[1]
    })
  }

  for(let video of videos) {
    await (async() => new Promise((resolve, reject) => {
      const id = video.id;
  
      console.log(`\x1b[36m|INFO|\x1b[0m I started downloading ${id}`);
      
      ytdl(`http://www.youtube.com/watch?v=${video.id}`)
        .on("response", (res) => {
          video.bar = new progress(`Downloading ${id} : |\x1b[36m:bar\x1b[0m| :rate/bps :percent :etas`, {
            complete: "\u2588",
            incomplete: "\u2591",
            total: parseInt(res.headers["content-length"], 10)
          });
        })
        .on("data", (data) => { 
          video.bar.tick(data.length);
        })
        .on("finish", () => {
          console.log(`\x1b[36m|INFO|\x1b[0m ${id} : Download finished`);
          resolve("done")
        })
        .on("error", () => {
          console.log(`\x1b[36m|INFO|\x1b[0m ${id} : Download failed`);
          resolve("skip")
        })
        .pipe(fs.createWriteStream(`${id}.mp4`));
    }))();
  }

  process.exit(1);
})();
