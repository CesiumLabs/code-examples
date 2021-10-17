const crypto = require("crypto");

function password(length = 20, wishlist = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$") {
  return Array.from(crypto.randomFillSync(new Uint32Array(length)), x => wishlist[x % wishlist.length]).join("");
}

console.log(password());
