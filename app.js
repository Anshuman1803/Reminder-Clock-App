const Time_Hour = document.getElementById("Time_Hour");
const Time_Minute = document.getElementById("Time_Minute");
const Time_Second = document.getElementById("Time_Second");
const Time_AMPM = document.getElementById("Time_AMPM");
const DynamicMessage = document.getElementById("DynamicMessage");

const Reminder_Poster = document.getElementById("Reminder_Poster");
const DynamicMessage2 = document.getElementById("DynamicMessage2");
const SetAlarm_Btn = document.getElementById("SetAlarm_Btn");
const SetWakeTime = document.getElementById("SetWakeTime");
const SetNapTime = document.getElementById("SetNapTime");
const SetLunchTime = document.getElementById("SetLunchTime");
const SetNightTime = document.getElementById("SetNightTime");
const WakeUPLabel = document.getElementById("WakeUPLabel");
const LunchTimeLabel = document.getElementById("LunchTimeLabel");
const NapTimeLabel = document.getElementById("NapTimeLabel");
const NightTimeLabel = document.getElementById("NightTimeLabel");



function setTime() {
    let newDate = new Date();
    let newHour = newDate.getHours();
    let newMin = newDate.getMinutes();
    let newSec = newDate.getSeconds();
    let AMPM = "AM";

    if (newHour > 12) {
        newHour -= 12;
        AMPM = "PM";
    }
    if(newHour >=0 && newHour <=11 && AMPM ==='AM'){
        DynamicMessage.innerText = "GOOD MORNING!! WAKE UP !!"
    }
    if(newHour >=12 && newHour <4 && AMPM ==='PM'){
        DynamicMessage.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"
    }
    if(newHour >=4 && newHour <8 && AMPM ==='PM'){
        DynamicMessage.innerText = "GOOD EVENING !!"
    }
    if(newHour >=8 && newHour <12 && AMPM ==='PM'){
        DynamicMessage.innerText = "GOOD NIGHT !!"
    }

    if(newMin <=9){
        newMin = '0' + newMin;
    }

    if(newSec <=9){
        newSec = '0' + newSec;
    }

    Time_Hour.innerText = newHour;
    Time_Minute.innerText = newMin;
    Time_Second.innerText = newSec;
    Time_AMPM.innerText = AMPM;
}

setInterval(setTime, 1000);



SetAlarm_Btn.addEventListener('mouseover', ()=>{
    SetAlarm_Btn.innerHTML = "Party time!";
})

SetAlarm_Btn.addEventListener('mouseout', ()=>{
    SetAlarm_Btn.innerHTML = "Set Alarm";
})
SetAlarm_Btn.addEventListener('click', ()=>{
    let wakeSelectedIndex = SetWakeTime.selectedIndex;
    let napSelectedIndex = SetNapTime.selectedIndex;
    let lunchSelectedIndex = SetLunchTime.selectedIndex;
    let nightSelectedIndex = SetNightTime.selectedIndex;
    

    
    WakeUPLabel.innerText = SetWakeTime.children[wakeSelectedIndex].innerText;
    LunchTimeLabel.innerText = SetNapTime.children[napSelectedIndex].innerText;
    NapTimeLabel.innerText = SetLunchTime.children[lunchSelectedIndex].innerText;
    NightTimeLabel.innerText = SetNightTime.children[nightSelectedIndex].innerText;
})
