// Q2 String Manipulation Report
let product = " wireless headphones PRO ";
let cleaned = product.trim().toLowerCase().split(" ")
    .filter(w=>w)
    .map(w=>w[0].toUpperCase()+w.slice(1))
    .join(" ")
    .replace("Pro","Pro Edition");
console.log(cleaned, cleaned.length);
