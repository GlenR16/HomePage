const d = new Date();
document.getElementById("main_time").textContent = d.toLocaleTimeString();
document.getElementById("main_date").textContent = d.toDateString();

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