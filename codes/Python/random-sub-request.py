import random
import requests
Rads = random.choice([memes , neko , movies]) # add all the sub reddits of your choice
 response = requests.get("https://www.reddit.com/r/${Rads}/random/.json")
 result = response.json()
 print(result) # you can do whatever you want with these values now , and example ( how to get the link of the post) : result['url]
