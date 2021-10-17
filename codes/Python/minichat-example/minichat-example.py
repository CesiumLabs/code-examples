# pip3 install minichat
from minichat import minichat
from os import system

bot = minichat.Minichat()

system("cls" if os.name == "nt" else "clear")

while True:
    msg = input("You: ")
    if msg == ".exit":
        break

    print(f"Bot: {bot.chat(msg)}")
