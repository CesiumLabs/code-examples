from random import choice

alnum = list("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
special_chars = list("@#$%=:?./|~>*()<")

while True:
    chars_list = list(alnum) # copy the array

    length = 0
    try:
        length = int(input("\33[92m\33[1mWhat should be the password length? \33[0m"))
    except ValueError:
        print("Value must be a number!")
        continue
    
    if length < 1:
        print("Value must be greater than 0!")
        continue
    
    special = input("\33[33m\33[1mDo you want special characters in your password? \33[0m").lower()
    if "yes" in special:
        chars_list += special_chars
    
    pw = "".join([choice(chars_list) for _ in range(length)])
    print("\33[1mPassword: \33[92m" + pw + "\33[0m\n")
    break
