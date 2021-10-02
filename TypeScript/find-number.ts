function findNumber(input: string, cb: (output: number[]) => void): void {
  cb(
      input
          .replace(/\D+/g, " ")
          .trim()
          .split(" ")
          .map((number) => parseInt(number))
          .filter((c) => c)
          .sort((a, b) => a - b)
  );
}

findNumber("abc", (cb: number[]) => console.log(cb));
findNumber("a1b2c", (cb: number[]) => console.log(cb));
