# this file is being imported in main file
# and is used as Main Menu

from time import sleep
from .chatbot import ChatBot
from .user import User
from .font import Font


def Generator():
    print(f"""
    =========================
    FANCY FONT GENERATOR:
    1. Aesthetic
    2. Fliptext
    3. Fancy
    4. Reverse
    
    Press any other button
    to go back to main menu.
    """)

    opt = str(input('Enter the Number corresponding to the option:'))

    if opt == '1':
        Font().aesthetic()
        sleep(3)
        Generator()

    elif opt == '2':
        Font().fliptext()
        sleep(3)
        Generator()

    elif opt == '3':
        Font().fancy()
        sleep(3)
        Generator()

    elif opt == '4':
        Font().reverse()
        sleep(3)
        Generator()

    else:
        start()


def MenuContent():    

    print(f"""
    ========================================


    Hi ! Choose the number corresponding to 
    the given options to get started:

    1. ChatBot.
    2. Fake User Data (that looks real!).
    3. Fancy Font Generator.
    4. Exit.

    Note: My Ratelimit = 1 Request / Second
    Credit: EitoZX
    """)


def start():
    MenuContent()
    opt = str(input('Select: '))
    
    if opt == '1':
        ChatBot().bot()
        sleep(3)
        start()

    elif opt == '2':
        User().user()
        sleep(3)
        start()

    elif opt == '3':
        Generator()
        sleep(3)
        # start()

    elif opt == '4':
        print("\n\ncya soon!")
        exit()

    else:
        start()
