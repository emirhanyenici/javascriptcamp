//sepet oluşturduk normalde apiden gelir biz manuel yaptık

let cart = [
    {id:1, prdouctName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, prdouctName:"Bardak", quantity:2, unitPrice:30},
    {id:3, prdouctName:"Kalem", quantity:1, unitPrice:20},
    {id:4, prdouctName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, prdouctName:"Kitap", quantity:3, unitPrice:30},
    {id:6, prdouctName:"Pot", quantity:5, unitPrice:150},
]

// şimdi sepete ekledik sonrsasındaki durum sepeti göstericez burda
// angular react vs tek sayfa uygulamaları SPA 
// map iterasyon yaparak arrayi tek tek dolaşır bu 6 ürün içerisinde dolaşır
// ve istersen yeni array verebilir 7. ürün sonradan old için gelmez

// burada dediğimiz şey sepeti dolaş her bir product için
// bu productı biz verdik hergangi bir şey olabilir 
// productın productName ini yazdır

//cart.map(product=>console.log(product.prdouctName))
// birden fazla ,ilem için
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.prdouctName + ": " + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")

//acc kısaltmadır akümülatör başlangıç değeri
// toplamaya 0 dan başlasın diye 0 koyduk ürünlerin fiyatlarını akümülatöre ekliyor

let total = cart.reduce((acc,product)=>acc+product.unitPrice* product.quantity, 0)
console.log(total)



// filtreleme yapmak için kullanılır
// yedek array oluşturuyor filter ve yeni arrayın içine atıyor onları uyanları
let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)


cart.push({id:7, prdouctName:"Ruhsat", quantity:1, unitPrice:20 })
// referans tiplerde cart içindeki data gitmez bellekteki adresi gider
// sen burada fonksiyonu addToCart ı carta yüklüyorsun
// yani onu bellekteki adrese yolluyorsun
 function addToCart(sepet){
    sepet.push({id:7, prdouctName:"Ruhsat", quantity:1, unitPrice:20 })
 }
// bellekteki adrese yolladıktan sonra sen yazdırdığında
// bellekteki adresi aldığı için referans tipte hepsini yazcak
addToCart(cart)

console.log(cart)

 // değer atamalarda değer atanıyor ve işi bitiyor çıktı ondan 10 oldu
let sayi = 10

function sayiTopla(number){
   number += 1
}
 sayiTopla(sayi)
console.log(sayi)