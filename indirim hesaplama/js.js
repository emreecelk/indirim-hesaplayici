let urunler = [100, 200, 300, 400, 500];

let indirimOrani = parseFloat(prompt("İndirim oranını girin (örneğin, %20 için 20 yazın):"));

let index = 1;
for (let fiyat of urunler) {
    let indirimliFiyat = fiyat - (fiyat * indirimOrani / 100);
    console.log(`Ürün ${index}: ${fiyat} TL -> İndirimli Fiyat: ${indirimliFiyat.toFixed(2)} TL`);
    index++;
}
