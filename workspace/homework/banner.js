HTMLCollection.prototype.forEach = Array.prototype.forEach;
const imageDiv = document.querySelectorAll("div.banner-list div");
const banner = document.querySelector("div.banner-list");
const next = document.querySelector("div.next");
const prev = document.querySelector("div.prev");
const lastImageDiv = document.createElement("div");
const firstImageDiv = document.createElement("div");
const countList = document.getElementsByClassName("countList");
let checkArrow = false;
let count = 1;
let auto = setInterval(autoSlide, 6000);

imageDiv.forEach((div, i) => div.style.backgroundImage = `url(image/somgo${i+1}.png)`);

banner.appendChild(lastImageDiv);
lastImageDiv.style.backgroundImage = `url(image/somgo1.png)`;

banner.insertBefore(firstImageDiv, document.querySelector("div.banner-list div"));
firstImageDiv.style.backgroundImage = `url(image/somgo${imageDiv.length}.png)`;
console.log('이미지 :' + imageDiv.length);
banner.style.transform = `translate(-970.5px)`;
// console.log(countList);
countList[0].innerHTML = `${count}/${imageDiv.length}`;

function autoSlide(){
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-970.5 * ++count}px)`;
    if(count == 4) {
        count = 1;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-970.5px)";
        }, 300);
    }
    countList[0].innerHTML = `${count}/${imageDiv.length}`;
}

prev.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-970.5 * --count}px)`;
    if(count == 0) {
        count = 3;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(${-970.5 * (imageDiv.length)}px)`;
        }, 300);
    }
    countList[0].innerHTML = `${count}/${imageDiv.length}`;
    auto = setInterval(autoSlide, 6000);
    setTimeout(()=>{checkArrow = false}, 300);
});


next.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-970.5 * ++count}px)`;
    if(count == 4) {
        count = 1;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-970.5px)";
        }, 300);
    }
    countList[0].innerHTML = `${count}/${imageDiv.length}`;
    auto = setInterval(autoSlide, 6000);
    setTimeout(()=>{checkArrow = false}, 300);
});