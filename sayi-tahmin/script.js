'use strict'

let score=0;
var highscore;
var scores=[];
let secretnumber=Math.trunc(Math.random()*20)+1;

const btn=document.querySelector('.btn');
console.log(secretnumber)

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

btn.addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(secretnumber);
    if(!guess)
    {
        displayMessage("Lütfen bir sayı giriniz");  
    }
    else if(guess>secretnumber)
    {   
        displayMessage('Daha küçük');
        document.querySelector('.guess').value='';
        score=score+1;
        document.querySelector('.label-score').textContent='Skor:'+score;
        console.log(score);
    }
    else if(guess<secretnumber){
        document.querySelector('.guess').value='';
        displayMessage('Daha büyük');
        score=score+1;
        document.querySelector('.label-score').textContent='Skor:'+score;
        console.log(score); 
    }
    else if(guess===secretnumber){
        score=score+1;
        document.querySelector('.guess').value='';
        document.querySelector('.label-score').textContent='Skor:'+score;
        document.querySelector('body').style.backgroundColor='#60b347';
        displayMessage('Tebrikler');
        scores.push(score);
        var max = Math.min(...scores);
        console.log(max);
        document.querySelector('.label-high-score').textContent='En yüksek skor:'+max;


    }
//const max = Math.max(3, 5, 8)

});

document.querySelector('.again').addEventListener('click',function(){
    score=0;
    document.querySelector('.label-score').textContent='Skor:'+score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.guess').value='';
    secretnumber=Math.trunc(Math.random()*20)+1;
});


