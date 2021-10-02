import { EventEmitter } from "events";
import axios from "axios";
import { toJson } from "xml2json";
import { error, post } from "./interface";

export interface Manager {
    /**
     * Event fired when manager is ready
     * @event Manager#ready
     */
    on(event: "ready", listener: () => void): this;

    /**
     * Event is fired when there is a new post
     * @event Manager#new-post
     * @param {post} post Reddit post
     */
    on(event: "new-post", listener: (post: post) => void): this;

    /**
     * Event is fired when there is an error
     * @event Manager#error
     * @param {error} error
     */
    on(event: "error", listener: (error: error) => void): this;
}
export class Manager extends EventEmitter {
    private date = new Date().getTime();
    constructor(subreddit_name: string) {
        super();
        this.checkSubreddit(`https://reddit.com/r/${subreddit_name}/.rss`);
        this.sendRSS(`https://reddit.com/r/${subreddit_name}/.rss`);
    }
    public async checkSubreddit(url: string) {
        const res = await axios.get(url);
        if (res.request._redirectable._redirectCount > 1) {
            this.emit("error", {
                status: 404,
                description: "Subreddit not found",
            });
            process.exit();
        } else {
            this.emit("ready");
        }
    }
    public async sendRSS(url: string) {
        const rss = await axios.get(url);
        const json = JSON.parse(toJson(rss.data));
        if (!json.feed.entry) return;
        json.feed.entry.forEach((post) => {
            if (new Date(post.published).getTime() <= this.date) return;
            this.emit("new-post", post);
        });
    }
}
