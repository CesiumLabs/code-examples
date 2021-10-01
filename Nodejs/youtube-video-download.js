// npm install ytdl-core
const ytdl = require("ytdl-core");
const fs = require("node:fs");

const url = "YOUTUBE_VIDEO_URL";
const youtubeStream = ytdl(url);
const writable = youtubeStream.pipe(fs.createWriteStream("./video.mp4"));

writable.on("finish", () => {
  console.log("Download complete!");
});
