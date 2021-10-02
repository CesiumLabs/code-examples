/* 
Caesar Cipher is a type of substitution cipher in which each letter in the plaintext
is replaced by a letter of some fixed number of positions down the alphabet.
The method is named after Julius Caesar, who used it in his private correspondence.
*/

const plainText = "HacktoberFest 2021";  // Normal text to be encryted
const encryptValue = 5;                  // Encryption value

var encrytedText = "";

// Decryption function
function decryption(text)
{
    var result="";
    for(var i=0; i<text.length; i++)
    {
        let character = text.charAt(i);

        if(character==' ')
            result +=' ';

        else if(character == character.toUpperCase()) 
            result += String.fromCharCode((text.charCodeAt(i) - encryptValue - 65)%26 + 65); 

        else
            result += String.fromCharCode((text.charCodeAt(i) - encryptValue - 97)%26 + 97); 
    }
    return result;
}

// Encryption function
function encryption(text)
{
    var result="";
    for(var i=0; i<text.length; i++)
    {
        let character = text.charAt(i);

        if(character==' ')
            result +=' ';

        else if(character == character.toUpperCase()) 
            result += String.fromCharCode((text.charCodeAt(i) + encryptValue - 65)%26 + 65); 

        else
            result += String.fromCharCode((text.charCodeAt(i) + encryptValue - 97)%26 + 97); 
    }
    encrytedText = result;
    return result;
}

console.log("Encrypted Text : " + encryption(plainText));
console.log("Decrypted Text : " + decryption(encrytedText));
