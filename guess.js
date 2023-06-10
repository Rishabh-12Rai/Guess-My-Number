const rand=Math.floor(Math.random()*20)+1;
var score=20;
var start=false;

function easy(){
    score=20;
    document.getElementsByClassName('score')[0].innerText=score;
    document.getElementsByClassName('btn di')[0].disabled = true;
    document.getElementsByClassName('btn di')[1].disabled = true;
    document.getElementsByClassName('btn di')[2].disabled = true;
}

function medium(){
    score=10;
    document.getElementsByClassName('score')[0].innerText=score;
    document.getElementsByClassName('btn di')[0].disabled = true;
    document.getElementsByClassName('btn di')[1].disabled = true;
    document.getElementsByClassName('btn di')[2].disabled = true;
}

function hard(){
    score=5;
    document.getElementsByClassName('score')[0].innerText=score;
    document.getElementsByClassName('btn di')[2].disabled = true;
    document.getElementsByClassName('btn di')[1].disabled = true;
    document.getElementsByClassName('btn di')[0].disabled = true;
}


function check(){
    var num = document.getElementsByClassName('guess')[0].value;
    if(score!=0){
    if(num>rand){
        document.getElementsByClassName('message')[0].innerText="High!!";
        score--;
    }
    else if(num<rand){
        document.getElementsByClassName('message')[0].innerText="Low!!";
        score--;
    }
    else{
        document.getElementsByClassName('message')[0].innerText="You guessed it!!";
        correct();
    }
    }
    else{
        wrong();
    }
    document.getElementsByClassName('score')[0].innerText=score;
}

function correct(){
    document.getElementsByClassName('highscore')[0].innerText = score;
    document.getElementsByClassName('btn check')[0].disabled = true;
    document.getElementsByClassName('number')[0].innerText = rand;
    document.body.style.backgroundColor="#60b347";
}

function wrong() {
    document.getElementsByClassName('message')[0].innerText = "You Lost ðŸ‘ŽðŸ‘ŽðŸ‘Ž";
    document.getElementsByClassName('btn check')[0].disabled = true;
    document.body.style.backgroundColor="#ff0000";
}

function again() {
    location.reload();
}
