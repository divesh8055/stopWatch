let secondss = 0;
let hourss = 0;
let minutess = 0;
let millisecond = 0;
var stopped = 0;

function startFunction(){
    if(!stopped)
    {
        clock = window.setInterval(stopWatch, 10);
        stopped = 1; 
    }
}

function pauseFunction(){
    if(stopped)
    {
        window.clearInterval(clock);
        stopped = 0;
    }
}

function resetFunction(){
    if(stopped)
    {
        window.clearInterval(clock);
        stopped = 0;
    }
    secondss = 0;
    hourss = 0;
    minutess = 0;
    millisecond = 0;
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("millisecond").innerHTML = "00";
}

function stopWatch(){
    millisecond++;
    if(millisecond/100===1)
    {
        millisecond = 0;
        secondss++;
    }
    
    if(secondss/60===1)
    {
        secondss = 0;
        minutess++;
    }

    if(minutess/60===1)
    {
        minutess = 0;
        hourss++;
    }

    if(Math.floor(millisecond/10) === 0)
        document.getElementById("millisecond").innerHTML = '0' + millisecond;
    if(Math.floor(millisecond/10) !== 0)
        document.getElementById("millisecond").innerHTML = millisecond;
    if(Math.floor(secondss/10) === 0)
        document.getElementById("second").innerHTML = '0' + secondss;
    if(Math.floor(secondss/10) !== 0)
        document.getElementById("second").innerHTML = secondss;
    if(Math.floor(minutess/10) === 0)
        document.getElementById("minute").innerHTML = '0' + minutess;
    if(Math.floor(minutess/10) !== 0)
        document.getElementById("minute").innerHTML = minutess;
    if(Math.floor(hourss/10) === 0)
        document.getElementById("hour").innerHTML = '0' + hourss;
    if(Math.floor(hourss/10) !== 0)
        document.getElementById("hour").innerHTML = hourss;
}

