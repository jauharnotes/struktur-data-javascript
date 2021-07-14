let fruit = {
    name: "grapefruite",
    description: "Popular and Famous Fruit.",
    colors: ["perple", "green"],
    isSmall: true,
    order: 1,
}

console.log(fruit["name"]);
console.log(fruit.description);
console.log(fruit.owner);
console.log(fruit.owner || "jauhar");

let keys = Object.keys(fruit);
console.log(keys);

let values = Object.values(fruit);
console.log(values);

let entries = Object.entries(fruit);
console.log(entries);

fruit.price = 2500;
console.log(fruit);

fruit.price = 3400;
console.log(fruit);

delete fruit.price;
console.log(fruit);