// const P = prompt("pilih : kertas,gunting,batu");

// const comp = math.random();
// console.log("comp");

// memunculkan kertas, gunting, atau batu
let tanya = true;
while (tanya){
let p = prompt("pilih : kertas,gunting,batu");

let comp = Math.floor(Math.random() * 10 + 1);
if(comp <  0.34){
     comp = "kertas";

}else if (comp >= 0.34 && comp < 0.67){
     comp = "gunting";

}else{
     comp = "batu";
}

console.log(comp);

// Rules

let hasil = "";
if (p == comp){
     hasil = "seri";
}else if(p == "kertas"){
     if(comp == "batu" ){
          hasil = "menang";
     }else{
          hasil = "kalah";
     }
}else if(p == "gunting"){
     if(comp == "kertas" ){
          hasil = "kalah";
     }else{
          hasil = "menang";
     }
}else if(p == "batu"){
     if(comp == "kertas" ){
          hasil = "kalah";
     }else{
          hasil = "menang";
     }
}else{
     hasil = "masukan pilihan yang BENAR";
}

if (p == comp){
     hasil = "seri";
}else{
     hasil = "masukan pilahan yang benar"
}

alert("kamu memilih : "+ p +" dan computer memilih : "+comp+"\nmaka hasilnya : kamu "+ hasil);

     tanya = confirm();

}
alert("terimakasih telah bermain !!!")