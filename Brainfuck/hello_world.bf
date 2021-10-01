You can't take this whole file and run it as one piece of code you have to take each method separately (I'm too lazy to make a cell eraser at the moment might add it later)

Method 1 (the most readable and beginner friendly one imo but also very unoptimised):
+++++++++           Sets cell 0 to 9
[                   Loops until cell 0 is 0
    >++++++++       Adds 8 to cell 1
    >+++++++++++    Adds 11 to cell 2
    >++++++++++++   Adds 12 to cell 3
    >++++++++++++   Adds 12 to cell 4
    >++++++++++++   Adds 12 to cell 5
    >++++           Adds 4 to cell 6
    >++++++++++     Adds 10 to cell 7
    >++++++++++++   Adds 12 to cell 8
    >+++++++++++++  Adds 13 to cell 9
    >++++++++++++   Adds 12 to cell 10
    >+++++++++++    Adds 11 to cell 11
    >++++           Adds 4 to cell 12
    <<<<<<<<<<<<-   Returns back to cell 0 and subtracts 1 from it
]
At this point the pointer is on the cell 0 and the values are the following:
Cell 0: 0; Cell 1: 72; Cell 2: 99; Cell 3: 108; Cell 4: 108; Cell 5: 108; Cell 6: 36; Cell 7: 90; Cell 8: 108; Cell 9: 117; Cell 10: 108; Cell 11: 99; Cell 12: 36
>.      Prints cell 1 (ASCII 72 = H)
>++.    Adds 2 to cell 2 and prints it (was 99 now is 101 which corresponds to e)
>.      Prints cell 3 (ASCII 108 = l)
>.      Prints cell 4 (ASCII 108 = l)
>+++.   Adds 3 to cell 5 and prints it (was 108 now is 111 which corresponds to o)
>----.  Subtracts 4 from cell 6 and prints it (was 36 now is 32 which corresponds to a space)
>---.   Subracts 3 from cell 7 and prints it (was 90 now is 87 which corresponds to W)
>+++.   Adds 3 to cell 8 and prints it (was 108 now is 111 which corresponds to o)
>---.   Subtracts 3 from cell 9 and prints it (was 117 now is 114 which corresponds to r)
>.      Prints cell 10 (ASCII 108 = l)
>+.     Adds 1 to cell 11 and prints it (was 99 now is 100 which corresponds to d)
>---.   Subtracts 3 from cell 12 and prints it (was 36 now is 33 which corresponds to an exclamation mark)

Method 2 (basically brainfuckified method 1):
+++++++++[>++++++++>+++++++++++>++++++++++++>++++++++++++>++++++++++++>++++>++++++++++>++++++++++++>+++++++++++++>++++++++++++>+++++++++++>++++<<<<<<<<<<<<-]>.>++.>.>.>+++.>----.>---.>+++.>---.>.>+.>---.

Method 3 (bit more optimised):
++++++++        Sets cell 0 to 8
[               Loop until cell 0 is 0
                Pointer is on cell 0
    >++++       Sets cell 1 to 4; this will always make cell 1 have the value of 4 since it is cleared by the loop
    [           Loop until cell 1 is 0 which means 4 times since we always subtract 1 from cell 1 at the end of the block
        >++     Adds 2 to cell 2
        >+++    Adds 3 to cell 3
        >+++    Adds 3 to cell 4
        >+      Adds 1 to cell 5
        <<<<-   Subtracts 1 from cell 1
    ]
    Pointer is on cell 1
    >+  Adds 1 to cell 2
    >+  Adds 1 to cell 3
    >-  Subtracts 1 from cell 4
    [<] Moves to the left until it finds a cell with the value of 0; that is cell 1 since it is cleared by the loop
    <-  Subtract 1 from cell 0
    Pointer is on cell 0
]
Pointer is on cell 0
Cell values are the following:
Cell 0: 0; Cell 1: 0; Cell 2: 72; Cell 3: 104; Cell 4: 88; Cell 5: 32
>>.         Prints cell 2 (ASCII 72 = H)
>---.       Subtracts 3 from cell 3 and print it (was 104 now is 101 which corresponds to e)
+++++++..   Adds 7 to cell 3 and prints it twice (was 101 now is 108 which corresponds to l; printed twice makes it ll)
+++.        Adds 3 to cell 3 and prints it (was 108 now is 111 which corresponds to o)
>>.         Prints cell 5 (ASCII 32 = a space)
<-.         Subtracts 1 from cell 4 and prints it (was 88 now is 87 which corresponds to W)
<.          Prints cell 3 (ASCII 111 = o)
+++.        Adds 3 to cell 3 and prints it (was 111 now is 114 which corresponds to r)
------.     Subtracts 6 from cell 3 and prints it (was 114 now is 108 which corresponds to l)
--------.   Subtracts 8 from cell 3 and prints it (was 108 now is 100 which corresponds to d)
>>+.        Adds 1 to cell 5 and prints it (was 32 now is 33 which corresponds to an exclamation mark)

Method 4 (once again basically just brainfuckified method 3):
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>-[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.