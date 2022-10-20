window.onload=function(){
    document.getElementById('nick').innerHTML = localStorage.getItem('nick');
}
function Img()
{
    document.getElementById("img").classList.add("backgr");
}
function Clear()
{
    document.getElementById("img").classList.remove("windowK", "windowM", "windowN", "backgr");
}
function Open(str){
    localStorage.setItem('test', str);
    window.location.href=".\\lr9.2.html";
}