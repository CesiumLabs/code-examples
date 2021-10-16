import random

f = open('./nounlist.txt', 'r')
words_list = f.read().splitlines()
f.close()

words_len = len(words_list) - 1 # minus one to prevent IndexError

def get_word():
    # assuming this is a HUGE array, using random.randint is better than random.choice
    return words_list[random.randint(0, words_len)].lower()

def game(word):
    number_of_guesses=8
    guessed=False
    guessed_letters=[]
    guessed_words=[]
    completed_word='_'*len(word)

    print(completed_word)
    print(f'Hint: Number of letters={len(word)}')
    
    while guessed!=True and number_of_guesses>0:
        print('Guess a Letter.\n')
        ch_guess=input().lower()
        
        if len(ch_guess)==1 and ch_guess.isalpha():
            if ch_guess in guessed_letters:
                print('Already guessed this letter.')
            elif ch_guess not in word:
                print('Incorrect Guess.')
                number_of_guesses-=1
                guessed_letters.append(ch_guess)
            else:
                print('Right Guess.')
                guessed_letters.append(ch_guess)
                completed_word_list = list(completed_word)
                index_list=[i for i,alpha in enumerate(word) if alpha==ch_guess]
                for i in index_list:
                    completed_word_list[i]= ch_guess
                completed_word=''.join(completed_word_list)

                if '_' not in completed_word:
                    guessed=True
        
        elif len(ch_guess)==len(word) and ch_guess.isalpha():
            if ch_guess in guessed_words:
                print('You already guessed this word, Try Again.')
            elif ch_guess!=word:
                print('Incorrect Guess')
                number_of_guesses-=1
                guessed_words.append(ch_guess)
            else:
                guessed=True
                completed_word=word
        else:
            print('Ehh. Incorrect Guess')
        print(completed_word)
        print(f'Number of guesses remaining: {number_of_guesses}\n')
        print('\n')
    if guessed:
        print('You Win.You Have guessed the word.')
    else:
        print(f"You Lost.You Couldn't guess the word.\n The word was {word}")

if __name__ =='__main__':
    print('********Lets Play Hangman********')
    word=get_word()
    game(word)
    ch='y'
    while ch!='n':
        ch=input('\nWanna play again?(Y/N)').lower()
        if ch=='y':
            word=get_word()
            game(word)
        else:
            print('Thank you for playing')
