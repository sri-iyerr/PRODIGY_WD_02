var ms = 0, s = 0, m = 0;
var timer;

var stopwtchEl = document.querySelector(".stopwatch");
var lapsContainer = document.querySelector(".laps");

function start(){
    if(!timer){
        timer = setInterval(run, 10);
    }
    
}

function run(){
    stopwtchEl.textContent = (m < 10 ? "0"+m : m) + ":" + (s < 10 ? "0"+s : s) + ":" + (ms < 10 ? "0"+ms : ms);
    ms++;
    if(ms == 100){
        ms = 0;
        s++;
    }
    if(s == 60){
        s = 0;
        m++;
    }
}

function pause(){
    clearInterval(timer);
    timer = false;
}

function stop(){
    clearInterval(timer);
    timer = false;
    ms = 0;
    s = 0;
    m = 0;
    stopwtchEl.textContent = (m < 10 ? "0"+m : m) + ":" + (s < 10 ? "0"+s : s) + ":" + (ms < 10 ? "0"+ms : ms);
}

function restart(){
    stop();
    start();
}

function lap(){
    if(timer){
        var li = document.createElement("li");
        li.innerText =  (m < 10 ? "0"+m : m) + ":" + (s < 10 ? "0"+s : s) + ":" + (ms < 10 ? "0"+ms : ms);
        lapsContainer.appendChild(li);
    }
}

function resetLaps(){
    lapsContainer.innerHTML = "";
}