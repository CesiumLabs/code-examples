import requests

class User:
    def __init__(self):
        pass

    @staticmethod
    def base():
        source = requests.get('https://api.deltaa.me/users')
        data = source.json()
        reply = data['users'][0]
        
        return reply

    def user(self):
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