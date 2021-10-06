function totalNumbers() {
  for (let numbers = 0; numbers <= 100; numbers++)
    console.log(`${numbers}: Even ${numbers % 2 === 0 ? "✅" : "❌"}`);
}

totalNumbers();
