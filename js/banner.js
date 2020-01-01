var banners = ["img/destaque-home.png","img/destaque-home-2.png"];
var bannerAtual = 0;
//pausar banner
var button = document.querySelector('#contrl');

function trocarBanner(){
    bannerAtual =(bannerAtual+1)%2;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}
var time = setInterval(trocarBanner,1000);
console.log("uhu");
function teste(){
    console.log("entrou na funcao");
    if(button.innerHTML == "Pausar"){
        clearInterval(time);
        button.innerHTML = "Play"
    }else{
        setInterval(trocarBanner,1000);
        button.innerHTML = "Pausar"
    }
};
button.onclick = teste;
