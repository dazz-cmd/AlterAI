let phase = "work";

let round = 1;

let totalSeconds = 25 * 60;


let timer = null;


const timeElement = document.getElementById("time");
const phaseElement = document.getElementById("phase");
const roundElement = document.getElementById("round");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");


// 更新时间显示
function updateTime(){

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    timeElement.innerText =
        String(minutes).padStart(2,"0")
        + ":"
        +
        String(seconds).padStart(2,"0");


    phaseElement.innerText =
        phase === "work"
        ? "专注时间"
        : phase === "short_break"
        ? "短休息"
        : "长休息";


    roundElement.innerText =
        "第 " + round + " / 3 轮";
}


// 切换下一阶段
function nextPhase(){

    if(phase === "work"){

        if(round < 3){

            phase = "short_break";

            totalSeconds = 5 * 60;

        }else{

            phase = "short_break";

            totalSeconds = 5 * 60;

        }


    }else if(phase === "short_break"){


        if(round < 3){

            round++;

            phase = "work";

            totalSeconds = 25 * 60;


        }else{

            phase = "long_break";

            totalSeconds = 15 * 60;

        }


    }else{


        phase = "work";

        round = 1;

        totalSeconds = 25 * 60;


    }


    updateTime();

}



// 开始
startBtn.onclick=function(){

    if(timer !== null){
        return;
    }


    timer=setInterval(function(){


        if(totalSeconds>0){

            totalSeconds--;

            updateTime();


        }else{


            nextPhase();


        }


    },1000);


};



// 暂停
pauseBtn.onclick=function(){

    clearInterval(timer);

    timer=null;

};



// 重置
resetBtn.onclick=function(){

    clearInterval(timer);

    timer=null;

    phase="work";

    round=1;

    totalSeconds=25*60;

    updateTime();

};


updateTime();