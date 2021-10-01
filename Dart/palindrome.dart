import 'dart:convert';
import 'dart:io';

/// Checks if the word is palindrome
void main() {
  bool next = true;

  while (next) {
    stdout.write('\nEnter a word: ');
    final String? input = stdin.readLineSync(encoding: Encoding.getByName('utf-8')!);
    if (input == null || input.isEmpty) {
      print('Inputed received no value :(');
      return;
    }

    final String reversed = input.split('').reversed.join('');
    print('Input: $input');
    print('Reversed: $reversed');
    print('Is a palindrome: ${input == reversed ? 'Yes' : 'No'}');
    
    stdout.write('\nDo you want to continue? (Y/N): ');
    next = stdin.readLineSync(encoding: Encoding.getByName('utf-8')!)?.toLowerCase() == 'y';
  }
}