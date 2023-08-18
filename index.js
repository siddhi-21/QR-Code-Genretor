let menuBtn=document.querySelector("#menuBtn");
let menu=document.querySelector(".menu");
let qr_btn=document.querySelector("#qr-btn");
let qr_code=document.querySelector("#qr-code");
let form=document.querySelector("#Genrate_form");
let saveLink_btn=document.querySelector("#qr-download");

menuBtn.onclick=function(){
    menu.classList.toggle("open-menu");
    if(menu.classList.contains("open-menu")){
        menuBtn.src="close.png";
    }
   else{
    menuBtn.src="menu.png"
   }
}
form.addEventListener("submit",function(e){
e.preventDefault();

clearUI();
let url=document.querySelector("#url").value;
let size=document.querySelector("#select").value;
if(url===''){
    alert("please enter URL or Text..");
}
else{


setTimeout(() => {
    qrGenretor(url,size);

 
}, 500);
}


});
function qrGenretor(url,size){
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });


}
function clearUI(){
    document.querySelector("#qrcode").innerHTML=''
}


