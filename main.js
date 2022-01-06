var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('work-minuts');
var ws = document.getElementById('work-seconds');

var bm = document.getElementById('break-minuts');
var bs = document.getElementById('break-seconds');

var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(Timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    stopInterval()
    startTimer = undefined;
})


pause.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})

// start timer
function Timer(){
    //work time count
    if(ws.innerText != 0){
        ws.innerText--;
    } 
    else if(wm.innerText != 0 && ws.innerText == 0){
            ws.innerText = 59;
            wm.innerText--;
    }

    // break time count
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        }
        else if(bm.innerText == 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }
}

function stopInterval(){
    clearInterval(startTimer);
}