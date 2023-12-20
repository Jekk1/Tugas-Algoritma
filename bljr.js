
// nyoba 
let angka1 = 5;
let angka2 = 3;
let hasilpenjumlahan = angka1 + angka2;

console.log (`hasil penjumlahan dari ${angka1} dan ${angka2} adalah ${hasilpenjumlahan}`)


// nomor1
let interger1 = 1;
let interger2 = 2;
let interger3 = 3;

if (interger1>interger2 && interger1>interger3 ){
    console.log(interger1)
}

else if ( interger2 > interger3 && interger2>interger1){
    console.log(interger2)

}

else {
    console.log (interger3)
}

// nomor3
let userlampu = 1

if ( userlampu ===0){
    console.log (`lampu off`)

}

else if ( userlampu ===1) {
    console.log (`lampu on`)
}

else {
    console.log(`eror`)
}


// nomor4

let barang1 = 30000;
let barang2 = 40000;
let barang3 = 60000;
let hargabarangtotal = barang1 + barang2 + barang3;

if  (hargabarangtotal>100000){

    let diskon = hargabarangtotal * 0.1;
    let hasilabisdiskon = hargabarangtotal - diskon;
    console.log(hasilabisdiskon)

}

else {
    console.log(`ga diskon lol`)
}


// nomor5

let lembur = 3;

if(lembur<6){
    let lemburunder6 = 100000;
    console.log(lemburunder6)
}

else if ( lembur>6){
    let lemburhigher6 = 300000;
    console.log(lemburhigher6)
}

else {
    let lembur6jam = 200000;
    console.log(lembur6jam)
}

// nomor6

let tinggi_air = 650;

if(tinggi_air<500){
 kondisi='Aman' 
}

else if(tinggi_air <=600){
   kondisi='Waspada'
}

else if (tinggi_air<=650){
    kondisi='Siaga1'

}

else if(tinggi_air >=650){
    kondisi='Siaga2'
}

console.log(kondisi)

//Nomor 6 adalah cara yang paling ampuh dalam membuat algoritma javascript
// yang lainnya aga aneh 