import requests

# main code of the fancy font
class Font:
    def __init__(self):
        pass

    @staticmethod
    def base(style : str, message : str):

        """
        Available style options: aesthetic, base64, fliptext, fancy, reverse
        """

        source = requests.get(f'https://api.deltaa.me/{style}?text={message}')
        data = source.json()
        reply = data

        return reply

    def aesthetic(self):
        text = str(input("Enter the text: "))

        aesthetic = Font.base('aesthetic' , text)['aesthetic']
        print(f"Aesthetic: {aesthetic}")

    def fliptext(self):
        text = str(input("Enter the text: "))

        fliptext = Font.base('fliptext' , text)['fliptext']
        print(f"FlipText: {fliptext}")

    def fancy(self):
        text = str(input("Enter the text: "))

        fancy = Font.base('fancy' , text)['fancy']
        print(f"Fancy: {fancy}")

    def reverse(self):
        text = str(input("Enter the text: "))

        reverse = text[::-1]
        print(f"Reverse: {reverse}")