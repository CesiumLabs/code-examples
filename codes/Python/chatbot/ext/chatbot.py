import requests
from urllib.parse import quote

class ChatBot:
    def __init__(self):
        user = input("Enter Your Name: ")
        self.user = user

    @staticmethod
    def chat(message: str):
        return requests.get(f'https://api.deltaa.me/chatbot?message={quote(message)}').json()['message']

    # this is the main method to use chatbot
    def bot(self):
        intro = f"""
            Hi {self.user}! I'm a Simple Chatbot

        Write Something to start the conversation...

        """
        print(intro)

        while True:
            userMessage = input("You: ")
            print(f"Bot: {ChatBot.chat(userMessage)}\n")
            
            # to break chat loop
            # if user says 'Bye' or 'bye', 

            if userMessage.lower() == "bye":
                break
