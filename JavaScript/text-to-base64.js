const toText = (text) => atob(text);
const toBase64 = (text) => btoa(text);

const text = prompt("Enter a text:", ""); // Hello World
const base64 = toBase64(text);
const normalized = toText(base64);

console.log(`Original: ${text}`);
// -> Original: Hello World

console.log(`Base64: ${base64}`);
// -> Base64: SGVsbG8gV29ybGQ=

console.log(`Normalized: ${normalized}`);
// -> Normalized: Hello World
