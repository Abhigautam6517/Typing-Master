const setofWords = ["My name Is Abhsiehk Gautam",
"China's superstar Eileen final after topping the leaderboard in qualifying.",
"Each heading is a quote from something somewhere or other. To the person who emails me 11 correct identifications, I’ll buy you a drink at Martin’s Taver",
"fter spending trillions and trillions of dollars on COVID, the couch cushions to find another $10 billion for actual COVID treatment. How did this happen",
"Start off with the fact that most  to the poor pitiful state governments that are presently drowning in cash."];

const msg = document.getElementById('msg');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
let startTime, endTime;


const playGame=()=>{
    let randomNumber = Math.floor(Math.random()*setofWords.length);
    msg.innerText = setofWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText="Done";


}
const endPlay=()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    console.log(totalTime);

    let totalstr = text.value;
    let wordcount = wordcounter(totalstr);

    let speed = Math.round((wordcount / totalTime) *60);

    let finalmsg = `Your speed are ${speed}`;
    finalmsg+=compareWords(msg.innerText,totalstr);
    msg.innerText=finalmsg;

}
const wordcounter=(str)=>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
}



const compareWords=(str1, str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;

    words1.forEach(function(item, index){
        if(item==words2[index]){
            count++;
        }
        
    });

    let errorwords = (words1.length - count);
    return (`${count} Total words are ${words1.length}`);

}



btn.addEventListener('click',function(){
    console.log(this);
    if(this.innerText=='Start'){
        text.disabled=false;
        playGame();

    }
    else if(this.innerText=='Done'){  
        btn.innerText="Start";   
        text.disabled=true;
        text.value="";
        endPlay();
        

    }
})
