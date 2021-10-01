# pip3 install minichat
from minichat import minichat
import os

bot = minichat.Minichat()

os.system("cls" if os.name == "nt" else "clear")

while True:
    msg = input("You: ")
    if msg == ".exit":
        break

    response = bot.chat(msg)
    print(f"Bot: {response}")
