import requests

# main code of the fancy font
class Font:
    def __init__(self):
        pass

    @staticmethod
    def base(style: str, message: str) -> dict:
        """
        Available style options: aesthetic, base64, fliptext, fancy, reverse
        """

        return requests.get(f'https://api.deltaa.me/{style}?text={message}').json()

    def aesthetic(self):
        print(f"Fancy: {Font.base('aesthetic', input('Enter the text: '))['aesthetic']}")

    def fliptext(self) -> None:
        print(f"Fancy: {Font.base('fliptext', input('Enter the text: '))['fliptext']}")

    def fancy(self) -> None:
        print(f"Fancy: {Font.base('fancy', input('Enter the text: '))['fancy']}")

    def reverse(self) -> None:
        print(f"Reverse: {input('Enter the text: ')[::-1]}")
