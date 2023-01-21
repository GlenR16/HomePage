const d = new Date();
document.getElementById("main_time").textContent = d.toLocaleTimeString();
document.getElementById("main_date").textContent = d.toDateString();
yts = document.getElementById("yts");
gs = document.getElementById("gs");
ds = document.getElementById("ds");


function refreshTime(){
    document.getElementById("main_time").textContent = new Date().toLocaleTimeString();
}
setInterval(refreshTime, 1000);
function google_search(text){
    if( !text ) {return false;}
    window.location.assign('http://www.google.com/search?q='+text);
    return false;
}
function youtube_search(text){
    if( !text ) {return false;}
    window.location.assign('https://www.youtube.com/results?search_query='+text);
    return false;
}
function drive_search(text){
    if( !text ) {return false;}
    window.location.assign('https://drive.google.com/drive/search?q='+text);
    return false;
}
function focusitem(id){
    switch(id){
        case "gs":
            yts.style.width = "10%";
            ds.style.width = "10%";
            gs.style.width = "80%";
            break;
        case "yts":
            gs.style.width = "10%";
            ds.style.width = "10%";
            yts.style.width = "80%";
            break;
        case "ds":
            yts.style.width = "10%";
            gs.style.width = "10%";
            ds.style.width = "80%";
            break;
    }
}
function bluritem(){
    yts.value = "";
    gs.value = "";
    ds.value = "";
    yts.style.width = "100%";
    gs.style.width = "100%";
    ds.style.width = "100%";
}
numbers = ["one","two","three","four","five","six","seven","eight"];
colours = ["red","green","yellow","blue"];
blocks = ["HTML","CSS","JS","C++","Python","Java","Bash","GoLang","C","Django","AIML","Cybersec","mySQL","SQLite3","Linux", "Git"];

function animatebox(){
    for (let i = 1; i < 11; i++) {
        item = document.getElementById(i).children;
        for (let j = 0;j<6;j++){
            item[j].classList.add(numbers[getRandomInt(numbers.length)]);
            item[j].classList.add(colours[getRandomInt(colours.length)]);
            item[j].innerHTML = blocks[getRandomInt(blocks.length)];
        }
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
$('.design').on('mouseover', 'span', function() {
    if (this.classList.contains("hovered")){
        this.classList.remove("hovered");
    }
    else{
        this.classList.add("hovered");
    }
});