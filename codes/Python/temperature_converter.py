from termcolor import colored
import re

print(colored("""

████████╗███████╗███╗░░░███╗██████╗░  ░█████╗░░█████╗░███╗░░██╗██╗░░░██╗███████╗██████╗░████████╗
╚══██╔══╝██╔════╝████╗░████║██╔══██╗  ██╔══██╗██╔══██╗████╗░██║██║░░░██║██╔════╝██╔══██╗╚══██╔══╝
░░░██║░░░█████╗░░██╔████╔██║██████╔╝  ██║░░╚═╝██║░░██║██╔██╗██║╚██╗░██╔╝█████╗░░██████╔╝░░░██║░░░
░░░██║░░░██╔══╝░░██║╚██╔╝██║██╔═══╝░  ██║░░██╗██║░░██║██║╚████║░╚████╔╝░██╔══╝░░██╔══██╗░░░██║░░░
░░░██║░░░███████╗██║░╚═╝░██║██║░░░░░  ╚█████╔╝╚█████╔╝██║░╚███║░░╚██╔╝░░███████╗██║░░██║░░░██║░░░
░░░╚═╝░░░╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░  ░╚════╝░░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░
""", "cyan"))

print(colored("Usage : <value> [F | C (default)]", "green"))
print(colored("<> required | [] optional (P.S) Dont literally type out the brackets!\n\n\n", "blue"))


def start():

    source = input(colored("Enter the temperature : ", "yellow"))
    defaultFormat = "C"

    matches = re.match(r'([+\-]?[0-9]+[.]?[0-9]*)([C|F])?',source.replace(" ", ""), re.M | re.I)
    
    if not matches:
        print(colored("Invalid format : " + source, "red"))
        return
    if matches.group(2):
        defaultFormat = matches.group(2)

    target = float(matches.group(1))

    if defaultFormat.lower() == "c":
        temp = (9/5 * target) + 32
        print(
            colored(f"\nTemperature in (F) from (C) {str(round(target,2))} = {str(round(temp,2))} F", "blue"))
    elif defaultFormat.lower() == "f":
        temp = (target - 32) * (5/9)
        print(
            colored(f"\nTemperature in (C) from (F) {str(round(target,2))} = {str(round(temp,2))} C", "blue"))

start()