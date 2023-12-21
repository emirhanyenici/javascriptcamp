function addToCart(productName = "Elma" , quantity) {
    console.log("Sepete Eklendi : ürün : " + productName + " adet : " + quantity)
}

addToCart("Yumurta" , 10)

let sayHello = ()=>{
    console.log("Hello World")
}

sayHello()

let sayHello2 = function(){
    console.log("hello world 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2 ,20)
addToCart2("Limon", 3, 15)

//obje notasyonu
let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+ product.productName)
    console.log("adet : "+ product.quantity)
    console.log("fiyat : "+ product.unitPrice)
}

addToCart3(product1)
// bu referans tip, objeler referans tiptir
// biz product2 yi oluşturduğumuzda product2 stackde onun product bilgileri heapde tutulur
// sonra yapılan eşitleme durumunda product2 nin referans numarası product3 ün referans numarası olur
// bu durumda 2 product da 1 referans numarasına gider ve 1 adet referans tipimiz olur
// yani burda referans numaraları değişir olay bellekte bulunduğu referans numarasında

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"armut", unitPrice:10, quantity:5}
product2=product3
product2.productName = "Karpuz"
console.log(product3.productName)

// sayılar değer tip objeler arrayler referans tip
// bellekte stack denilen yerde tutulur
// değer tiplerde atama yaparken değeri atıyorsun ve işin bitiyor
// sonrasında sayi1 = sayi 2 yaptık sayi2 nin değeri 20, sayi1 e atandı
// sonra sayi2 = 100 oldu sonra sayı1 yazdıtdık değer 20 geldi.
let sayi1=10
let sayi2=20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

// functionda bulunan products ile array olan products farklı şeyler 
// function içerisindekine x de diyebilirsin

// fonksiyon içerisi products yer,ne x olsa ve console log products olsa
// bizim çıktımız aynı olur ama neden çünkü aşşağıda yazdırdığımız
// addtoproducts üzerindeki blogu ele alır ve o çıktıyı verir.
// yani bir üst global blogu ele alır
function addToCart4(products) {
    console.log(products)
    
}
let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"armut", unitPrice:10, quantity:5},
    {productName:"karpuz", unitPrice:10, quantity:5}
]
// sen burda addToCart4 e products dersen let içerisinde olan productı
// function içerisindeki x e atıyor sonra çalışstırıyor
addToCart4(products)

function add(...numbers) { //rest operatörü kullanılırken rest en son olur
    // ...numbers,birsey olmaz olması gerekn parametre ilke gelmeli
    // birsey,...numbers olmalı fakat bu durumda elimizde olan 
    // 20,30 değerlerinin ilki birseye atanır birseyin değeri 20 olur
    // numbersın değeri 30 olur

    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }    
    console.log(total)
}

add(20,30)
// add(20,30,40)
// add(20,30,40,50)


let numbers =[30.10,500,600,120] // bize böyle bir array geldiğini varsayıcaz apiden
// gönderdiğin sayılardan en yükseğini verir sana
console.log(Math.max(...numbers))    // burada biz ... yapıyoruz ki apiden gelen arrayi spread etsin yani ayırsın 
// eğer biz çıktıyı console.log(numbers) olarak alsaydık çıktımız aray olacaktı
// spread ayrıştırır rest toparlar

// arrayde [] notasyonu
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"}, 
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]

console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)

// objede {} notasyonu
let newproductName, newUnitPrice, newQuantity

({productName:newproductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName:"Elma", unitPrice:10, quantity:5})
console.log(newproductName)