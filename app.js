var sec = document.getElementById('sec');
var timer;

//Function for interval

function mrInterval(){
    timer = setInterval(() => {
        if (sec.value>0){
            var newVal = sec.value-1;
        }
        sec.value=newVal;
        //document.getElementById('tmr').innerHTML=sec.value;

        if (sec.value==0){
            clearInterval(timer);
        }
    }, 1000);
}

//startButtonClick

function startTimer(){
    mrInterval();
    document.getElementById('start').disabled=true;
}

//Function that pauses timer

function pauseTimer(){
    clearInterval(timer);
    document.getElementById('start').disabled=false;

}