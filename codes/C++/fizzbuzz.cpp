#include <string>
#include <iostream>

using std::cout;
using std::cin;
using std::endl;
using std::string;

int main() {
	int end;
	int start;
	cout << "What number do you want to start on?\n";
	cin >> start;
	cout << "What number do you want to stop on?\n";
	cin >> end;
	system("cls");
	int curr = start;
	while (curr <= end) {
		string output = "";
		if(curr % 3 == 0) output += "Fizz";
		if(curr % 5 == 0) output += "Buzz";
		if(output == "") output = std::to_string(curr);
		cout << output << endl;
		curr++;
	}

	return 0;
}