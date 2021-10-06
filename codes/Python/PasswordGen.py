import random


def PasswordGen():
    AlphaNum = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "M",
        "N",
        "O",
        "p",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ]

    Symbols = [
        "@",
        "#",
        "$",
        "%",
        "=",
        ":",
        "?",
        ".",
        "/",
        "|",
        "~",
        ">",
        "*",
        "(",
        ")",
        "<",
    ]

    Allowed = AlphaNum

    print(
        "\33[92m" + "\33[1m" + "What should be the password length? " + "\33[0m",
        end="",
    )
    length = int(input(""))
    if length:
        print(
            "\33[33m"
            + "\33[1m"
            + "Do you want special characters in your password? "
            + "\33[0m",
            end="",
        )
        special = input("")
        if special:
            if "yes" in special.lower():
                Allowed += Symbols
            Password = ""
            for i in range(length):
                Password = Password + random.choice(Allowed)
            print("\33[1m" + "Password: " + "\33[92m" + Password + "\33[0m" + "\n")
        else:
            Password = ""
            for i in range(length):
                Password = Password + random.choice(Allowed)
            print("\33[1m" + "Password: " + "\33[92m" + Password + "\33[0m" + "\n")
    else:
        PasswordGen()


PasswordGen()


# Output: https://i.imgur.com/VzYtf8Z.png