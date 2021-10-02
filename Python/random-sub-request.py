from random import choice
from requests import get
print(get(f"https://www.reddit.com/r/{choice(['memes', 'neko', 'movies'])}/random/.json").json())
