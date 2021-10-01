import re as reg
import time
import urllib.request as url
import winsound
from pyyoutube import Api
import wikihowunofficialapi as wha
import wikipedia
import wikipedia.exceptions as we
import requests
import json
from word2word import Word2word as translate
import py8fact as facts
from translate import Translator

api = Api(api_key="api key here")
wordstolookfor = ["why", "how", "who", "?", "what"]
pagetit = ""
print('"gs:" to only search Google \n'
      '"bn:" to only search Bing\n'
      '"pip:" to search pypi.org\n'
      '"yt:" to search videos on YouTube (Work In Progress)\n'
      '"tr:" to translate word(s) (Work In Progress)\n'
      '"rickroll" to generate a rickroll link so that you can troll your friends ;)\n'
      '"random" to find a random Wikipedia article\n'
      '"fact" to generate a random fact')
searchforwhat = input("searching for?: ")

getaritcles = wha.search_wikihow(searchforwhat)
firstarticle = getaritcles[0]
firstarticlestr = str(firstarticle)
# print(firstarticlestr)

i = 0
q = 0
title = ""
content = ""
search_results = ""
f = 0
string = ""
string2 = ""
slow = searchforwhat.lower()
slist = slow.split()

if slist[0] == "random":
    searchforwhat = f"How to {wha.random_article()}"

splitstringlist = firstarticlestr.split()
l = 1
while i < (len(splitstringlist)):
    string += f"{splitstringlist[i]}-"
    i = i + 1
string8 = ""
while l < (len(slist)):
    string8 += f"{slist[l]}-"
    l = l + 1
j = 1
h = 1
y = 1
t = 0
string4 = ""
stringy = ""
stringslicedy = ""
if slist[0] == "who" or slist[0] == "gs:":
    while j < (len(slist)):
        string2 += f"{slist[j]}%20"
        j = j + 1
if slist[0] == "bg:":
    while h < (len(slist)):
        string4 += f"{slist[h]}+"
        h = h + 1

if slist[0] == "yt:":
    while y < (len(slist)):
        stringy += f"{slist[y]}%20"
        y = y + 1
if slist[0] == "who" or slist[0] == "gs:":
    stringsliced2 = string2[0:len(string2) - 3]

if slist[0] == "how":
    stringsliced = string[0:len(string) - 1]
if slist[0] == "pip:":
    stringsliced5 = string8[0:len(string8) - 1]
if slist[0] == "bg:":
    stringsliced4 = string4[0:len(string4) - 1]
if slist[0] == "yt:":
    stringslicedy = stringy[0:len(stringy) - 3]
if slist[0] == "tr:":
    c = 1
        translatesentence = ""

    tr = 0
    lang = input("translate to? (provide a language code [eg: french -> fr])")
    lan= lang.upper()
    langlist = {
        'AA': 'Afar',
        'AB': 'Abkhazian',
        'AB': 'Alberta',
        'AE': '	American Eskimo',
        'AF': 'Afrikaans',
        'AF': 'Anglo-French',
        'AM': 'Amharic',
        'AR': 'Arabic',
        'AR-AE': 'United Arab Emirate Arabic',
        'AR-BH': 'Bahraini Arabic',
        'AR-DZ': 'Algerian Arabic',
        'AR-EG': 'Egyptian Arabic',
        'AR-IQ': 'Iraqi Arabic',
        'AR-JO': 'Jordanian Arabic',
        'AR-KW': 'Kuwaiti Arabic',
        'AR-LB': 'Lebanese Arabic',
        'AR-LY': 'Libyan Arabic',
        'AR-MA': 'Moroccan Arabic',
        'AR-OM': 'Omani Arabic',
        'AR-QA': 'Qatari Arabic',
        'AR-SA': 'Saudi Arabian Arabic',
        'AR-SY': 'Syrian Arabic',
        'AR-TN': 'Tunisian Arabia',
        'AR-YE': 'Yemeni Arabic',
        'AS': 'Assamese',
        'AY': 'Aymara',
        'AZ': 'Azerbaijani',
        'BA': 'Bashkir',
        'BE': 'Byelorussian',
        'BG': 'Bulgarian',
        'BH': 'Bihari',
        'BI': 'Bislama',
        'BN': 'Bangla',
        'BO': 'Tibetan',
        'BP': 'Brazilian Portuguese',
        'BR': 'Breton',
        'CA': 'Catalan',
        'CF': 'Canadian French',
        'CH': 'Colloquial Hebrew',
        'CO': 'Corsican',
        'CR': 'Czech Republic',
        'CS': 'Czech',
        'CY': 'Welsh',
        'DE': 'DEutsch (German)',
        'DE-AT': 'German (Austria)',
        'DE-CH': 'German (Switzerland)',
        'DE-LI': 'German (Liechtenstein)',
        'DE-LU': 'German (Luxembourg)',
        'DR': 'Dominican Republic',
        'DT': 'Deutsch (German)',
        'DZ': 'Bhutani',
        'EF': 'English French',
        'EG': 'English German',
        'EJ': 'English Japanese',
        'EL': 'Greek',
        'EN': 'English',
        'EN-AU': 'Australian English',
        'EN-BZ': 'English (Belize)',
        'EN-CA': 'Canadian English',
        'EN-GB': 'English (United Kingdom)',
        'EN-IE': 'English (Ireland)',
        'EN-JM': 'English (Jamaica)',
        'EN-NZ': 'English (New Zealand)',
        'EN-TT': 'English (Trinidad)',
        'EN-US': 'English (United States)',
        'EN-ZA': 'English (South Africa)',
        'EO': 'Esperanto',
        'EP': 'European Portuguese',
        'ER': 'English Russian',
        'ES': 'Spanish',
        'ES-AR': 'Spanish (Argentina)',
        'ES-BO': 'Spanish (Bolivia)',
        'ES-CL': 'Spanish (Chile)',
        'ES-CO': 'Spanish (Colombia)',
        'ES-CR': 'Spanish (Costa Rica)',
        'ES-DO': 'Spanish (Dominican Republic)',
        'ES-EC': 'Spanish (Ecuador)',
        'ES-GT': 'Spanish (Guatemala)',
        'ES-HN': 'Spanish (Honduras)',
        'ES-MX': 'Spanish (Mexico)',
        'ES-NI': 'Spanish (Nicaragua)',
        'ES-PA': 'Spanish (Panama)',
        'ES-PE': 'Spanish (Peru)',
        'ES-PR': 'Spanish (Puerto Rico)',
        'ES-PY': 'Spanish (Paraguay)',
        'ES-SV': 'Spanish (El Salvador)',
        'ES-UY': 'Spanish (Uruguay)',
        'ES-VE': 'Spanish (Venezuela)',
        'ET': 'Estonian',
        'EU': 'Basque',
        'FA': 'Farsi (Persian)',
        'FE': 'Foreignish English',
        'FI': 'Finnish',
        'FJ': 'Fiji',
        'FO': 'Faroese',
        'FR': 'French',
        'FR-BE': 'French (Belgium)',
        'FR-CA': 'French (Canada)',
        'FR-CH': 'French (Switzerland)',
        'FR-LU': 'French (Luxembourg)',
        'FY': 'Frisian',
        'GA': 'Gaelic (Irish)',
        'GD': 'Scots Gaelic',
        'GL': 'Galician',
        'GL': 'Great Lakes (USA)',
        'GN': 'Guarani',
        'GU': 'Gujarati',
        'HA': 'Hausa',
        'HE': 'Hebrew',
        'HI': 'Hindi',
        'HM': 'Hangul Mal (Kor) Korean Speaking Language',
        'HR': 'Croatian',
        'HU': 'Hungarian',
        'HY': 'Armenian',
        'IA': 'Interlingua',
        'IE': 'Interlingue',
        'IK': 'Inupiak',
        'IL': 'Illinois',
        'IN': 'Indonesian',
        'IS': 'Icelandic',
        'IT': 'Italian',
        'IT-CH': 'Italian (Switzerland)',
        'IW': 'Hebrew',
        'JA': 'Japanese',
        'JI': 'Yiddish',
        'JV': 'Javanese',
        'KA': 'Georgian',
        'KK': 'Kazakh',
        'KL': 'Greenlandic',
        'KM': 'Cambodian',
        'KN': 'Kannada',
        'KO': 'Korean',
        'KO': 'Korean (Johab)',
        'KS': 'Kashmiri',
        'KU': 'Kurdish',
        'KY': 'Kirghiz',
        'LA': 'Latin',
        'LN': 'Lingala',
        'LO': 'Laothian',
        'LS': 'Los Santos',
        'LT': 'Lithuanian',
        'LV': 'Latvian',
        'LV': 'Lettish',
        'MG': 'Malagasy',
        'MI': 'Maori',
    }
    translatedsentence = ""
    while c < len(slist):
        translatesentence = translatesentence + slist[c] + " "
        c += 1
    print(translatesentence)
    if langlist.get(lan) != None:
        lan_conf = input(f'Did you mean {langlist.get(lan)}? REACT WITH: "yes"/ "no" ')
        if "yes" in lan_conf.lower():
            usemodel = input(
                "Do you want to use a Word to Word model( Recommended for single word translations) or the Google Translator Model( Recommended for sentence translations) ? React with 1 or 2 ")
            if "1" in usemodel.lower():
                translatesentence_split = translatesentence.split()

                while tr < len(translatesentence_split):

                    en_to_lang = translate("en", f"{lan.lower()}")

                    translated_word = en_to_lang(translatesentence_split[tr])

                    print(f'"{translatesentence_split[tr]}" can be translated to {langlist.get(lan)} as:')

                    while t < len(translated_word):
                        print(translated_word[t])

                        t += 1

                    wrd = translatesentence[0]

                    translatedsentence = translatedsentence + translated_word[0] + " "

                    tr += 1

                    t = 0

                print(

                    f'Thus you could write "{translatesentence}" as "{translatedsentence}" [TRANSLATION MAY BE INCORRECT]')
            elif "2" in usemodel.lower():
                lan_from = input("translate from? (provide a language code [eg: french -> fr])")


                translator = Translator(to_lang=f"{lan.lower()}", from_lang="EN")
                translation = translator.translate(translatesentence)
                print(translation)

        elif "no" in lan_conf.lower():
            print(
                "Well that's weird. Maybe you made a mistake in the language code? Since this is still Work In Progress, you could expect stuff like this. ")
    else:
        print(
            "Well it looks like the language code doesn't exist :O")

elif slist[0] == "fact":
    print(facts.random_fact())
elif slist[0] == "how":
    t0 = time.time()

    articleurl = wha.Article(f'https://www.wikihow.com/{stringsliced}')

    print(articleurl.summary)

    t1 = time.time()
    total = t1 - t0
    print(f"Took approximately {total.__round__()} seconds to load results from WikiHow")
    print(f"For more information on {firstarticlestr.title()}, visit {articleurl.url} ")
    print("Keep in Mind :")
    while f < len(articleurl.tips):
        print(f"> {articleurl.tips[f]}")
        f = f + 1
    winsound.MessageBeep()
elif slist[0] == "rickroll":

    print(f"dis.gd/threads")
    winsound.MessageBeep()
elif slist[0] == "who" or slist[0] == "gs:":
    print(f"visit: https://www.google.com/search?q={stringsliced2}")
elif slist[0] == "yt:":
    request = requests.get(
        f"https://youtube.googleapis.com/youtube/v3/search?part=snippet&q={stringslicedy}&type=video&key=AIzaSyDEbqnLJiWP7T9IrIDFe4yjkOIYlt6g2e0")
    response = request.json()

    print(response)

    html = url.urlopen(f"https://www.youtube.com/results?search_query={stringslicedy}")
    print(f"https://www.youtube.com/results?search_query={stringslicedy}")
    Vid_ID = reg.findall(r"watch\?v=(\S{11})", html.read().decode())

    q_copy = q
    print("List of Popular Videos found on Youtube:")
    code_list = []
    countr = 0
    while countr < len((response['items'])):
        code_list == code_list.append(response['items'][countr]['id']['videoId'])
        countr += 1

    while q < len(code_list):
        q_copy = q

        title = response['items'][q]['snippet']['title']

        url = f"{q + 1} https://www.youtube.com/watch?v={code_list[q]} "

        print(f"{url} | {title}")
        q = q + 1
        q_copy = q_copy + 1
    print(f"Found {q} URLs (Popular Videos)")
    q = 0
    print("List of all videos on YouTube")
    while q < len(Vid_ID):
        url = f"{q + 1} https://www.youtube.com/watch?v={Vid_ID[q]} "

        print(f"{url}")
        q = q + 1

    print(f"Found {q} URLs ")

elif slist[0] == "pip:":
    print(f"visit: https://pypi.org/search/?q={stringsliced5}/")
elif slist[0] == "bg:":
    print(f"visit: https://www.bing.com/search?q={stringsliced4}")

else:

    try:
        pagetit = wikipedia.page(slow.strip()).title
        if pagetit in slow:
            t0 = time.time()
            print(wikipedia.summary(searchforwhat.lower()))

            t1 = time.time()
            total = t1 - t0
            print(f"Took approximately {total.__round__()}({total}) seconds to load results from Wikipedia")
            print(f"For more information on {searchforwhat.title()}, visit {wikipedia.page(searchforwhat).url} ")
            winsound.MessageBeep()
        else:
            if slist[0] != "random":

                print(f"searched for {searchforwhat.lower()} but found {pagetit.lower()}")
                t0 = time.time()
                print(wikipedia.summary(searchforwhat.lower()))

                t1 = time.time()
                total = t1 - t0
                print(f"Took approximately {total.__round__()}({total}) seconds to load results from Wikipedia")
                print(f"For more information on {pagetit.title()}, visit {wikipedia.page(searchforwhat).url} ")
                winsound.MessageBeep()
            else:

                t0 = time.time()
                print(wikipedia.summary(searchforwhat.lower()))
                t1 = time.time()
                total = t1 - t0
                print(f"Took approximately {total.__round__()}({total}) seconds to load results from Wikipedia")

                winsound.MessageBeep()

    except we.PageError as e:
        print("""\033[1;33;40m Uh Oh an error has occurred!:(
        Try rephrasing the question, or try again! \033[0;37;40m""")
        # print(f"searched for {searchforwhat.lower()} but found {pagetit.lower()}")
    except we.DisambiguationError as e:
        print(
            "\033[1;33;40m Uh Oh, Looks like what you searched was too strong! Even for Wikipedia! Try rephrasing the question")
    except NameError as e:
        print("\033[1;33;40m Wait, did you just find a glitch in the Matrix?")
# if close.lower()=="true":
print("Press ENTER to close ...")
input()
