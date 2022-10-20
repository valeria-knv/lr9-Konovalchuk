const cards = {
    ".\\6_of_clubs.png" : 6,
    ".\\6_of_diamonds.png" : 6,
    ".\\6_of_hearts.png" : 6,
    ".\\6_of_spades.png": 6,
  
    ".\\7_of_clubs.png" : 7,
    ".\\7_of_diamonds.png" : 7,
    ".\\7_of_hearts.png" : 7,
    ".\\7_of_spades.png" : 7,
  
    ".\\8_of_clubs.png" : 8,
    ".\\8_of_diamonds.png" : 8,
    ".\\8_of_hearts.png" : 8,
    ".\\8_of_spades.png" : 8,
  
    ".\\9_of_clubs.png" : 9,
    ".\\9_of_diamonds.png" : 9,
    ".\\9_of_hearts.png" : 9,
    ".\\9_of_spades.png" : 9,
  
    ".\\10_of_clubs.png" : 10,
    ".\\10_of_diamonds.png" : 10,
    ".\\10_of_hearts.png" : 10,
    ".\\10_of_spades.png":10,
  
    ".\\jack_of_clubs2.png" : 2,
    ".\\jack_of_diamonds2.png" : 2,
    ".\\jack_of_hearts2.png" : 2,
    ".\\jack_of_spades2.png" : 2,
  
    ".\\queen_of_clubs2.png" : 3,
    ".\\queen_of_diamonds2.png" : 3,
    ".\\queen_of_hearts2.png" : 3,
    ".\\queen_of_spades2.png" : 3,
  
    ".\\king_of_clubs2.png" : 4,
    ".\\king_of_diamonds2.png" : 4,
    ".\\king_of_hearts2.png" : 4,
    ".\\king_of_spades2.png" : 4,
  
    ".\\ace_of_clubs.png" : 11,
    ".\\ace_of_diamonds.png" : 11,
    ".\\ace_of_hearts.png" : 11,
    ".\\ace_of_spades2.png" : 11,
};

function GetRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
window.onload=function(){
    document.getElementById('nick').innerHTML = localStorage.getItem('nick');
    document.getElementById('Midoria').setAttribute("src", localStorage.getItem('test'));
}

let a = 0, b = 0, countA = 0, countB = 0, count = 0;

function Figth(){
    a = GetRandom(0, 35);
    b = GetRandom(0, 35)
    document.getElementById('left').setAttribute("src", Object.keys(cards)[a]);
    document.getElementById('right').setAttribute("src", Object.keys(cards)[b]);
    countA += Object.values(cards)[a];
    countB += Object.values(cards)[b];
    count++;
    console.log(countA);
    console.log(countB);
    document.getElementById('points').innerHTML += countA + ":" + countB + '<br>';
    if(count == 3){
        if(countA > countB){
            alert(localStorage.getItem('nick') + " wins! Congratulations!");
        }
        else{
            if(countB > countA){
                alert("Computer wins... Try next time!");
            }
            else{
                alert("Draw. Try again!");
            }
        }

        document.getElementById('btn').innerHTML = "Restart";
        document.getElementById('btn').onclick = function(){
            window.location.href=".\\lr9.2.html";
        }
    }
}
