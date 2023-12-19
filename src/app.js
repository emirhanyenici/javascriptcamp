console.log("MERHABA AMK")
//JS type safe değildir
let dolarDun = 9.20
let dolarBugun = 9.30
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2 //sabit değiştirilemez const
//euroDun = 11

console.log(euroDun)
// array = diziler
//camelCasing
//PascalCasing  ctrl +k+c comment yapar
let konutKredileri = ["Konut Kredisi", "Emlak konut kredisi", "Kamu konut kredisi"]

console.log("<ul>")
for (let i = 0; i<konutKredileri.length; i++) {
    console.log("<li>" +konutKredileri[i]+"</li>");
    
}

console.log("</ul>")


 console.log(konutKredileri)