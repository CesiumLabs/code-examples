import requests

class User:
    def __init__(self):
        pass

    @staticmethod
    def base():
        return requests.get('https://api.deltaa.me/users').json()['users'][0]

    def user(self) -> None:
        base = User.base()

        print(f"""

        USER DATA
        -------------
        Full Name: {base['name']} {base['surname']}
        From: {base['from']}
        City: {base['city']}
        Phone: {base['phone']}
        Address: {base['address']}
        Email: {base['email']}        
        
        """)
