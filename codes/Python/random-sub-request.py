import random
import requests
print(requests.get(f"https://www.reddit.com/r/{random.choice(['memes', 'neko', 'movies'])}/random.json").json()) # you can do whatever you want with these values now , and example ( how to get the link of the post) : result['url]
