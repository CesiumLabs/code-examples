# Problem Statement

"""
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "   hell o   wo   rld code  "
Output: 4
Explanation: The last word is "code" with length 4.

"""

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s = s[::-1]
        count = 0
        for i in range(len(s)):
            if s[i] != " ":
                count += 1
            if s[i] == " " and count != 0:
                break
        return count