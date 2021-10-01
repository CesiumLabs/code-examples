function totalNumbers() {
    for (var numbers: number = 0; numbers <= 100; numbers++) {
        var EvenCheck = Number.isInteger(numbers / 2) ? "✅" : "❌";
        console.log(`${numbers}: Even ${EvenCheck}`)
    };
};

totalNumbers();