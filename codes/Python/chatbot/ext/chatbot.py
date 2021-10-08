import requests


class ChatBot:
    def __init__(self):
        user = str(input("Enter Your Name: "))
        self.user = user

    @staticmethod
    def chat(message : str):
        source = requests.get(f'https://api.deltaa.me/chatbot?message={message}')
        data = source.json()
        reply = data['message']
        
        return reply

    # this is the main method to use chatbot
    def bot(self):
        intro = f"""
            Hi {self.user}! I'm a Simple Chatbot

        Write Something to start the conversation...

        """
        print(intro)

        while True:
            userMessage = str(input("You: "))
            print(f"Bot: {ChatBot.chat(userMessage)}")
            print('\n')
            
            # to break chat loop
            # if user says 'Bye' or 'bye', 

            stop = ['Bye', 'bye']
            if userMessage in stop:
                break