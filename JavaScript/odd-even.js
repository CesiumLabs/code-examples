function totalNumbers() {
    for (const numbers = 0; numbers <= 100; numbers++) {
        const EvenCheck = Number.isInteger(numbers / 2) ? "✅" : "❌";
        console.log(`${numbers}: Even ${EvenCheck}`)
    };
};

totalNumbers();
