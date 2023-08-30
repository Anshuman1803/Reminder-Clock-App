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

    
    if (newHour >= 12 && newHour < 16) {
        DynamicMessage.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP"
    }
    if (newHour >= 16 && newHour < 20 && AMPM === 'PM') {
        DynamicMessage.innerText = "GOOD EVENING !!"
    }
    if (newHour >= 20 && newHour < 23 && AMPM === 'PM') {
        DynamicMessage.innerText = "GOOD NIGHT !!"
    }
    
    if (newHour >= 12) {
        AMPM = "PM";
    }

    if (newHour > 12) {
        newHour -= 12;
    }


    if (newMin <= 9) {
        newMin = '0' + newMin;
    }

    if (newSec <= 9) {
        newSec = '0' + newSec;
    }
    if (newHour == 0) {
        newHour = 12;
    }
    Time_Hour.innerText = newHour;
    Time_Minute.innerText = newMin;
    Time_Second.innerText = newSec;
    Time_AMPM.innerText = AMPM;
}

setInterval(setTime, 1000);



SetAlarm_Btn.addEventListener('mouseover', () => {
    SetAlarm_Btn.innerHTML = "Party time!";
})

SetAlarm_Btn.addEventListener('mouseout', () => {
    SetAlarm_Btn.innerHTML = "Set Alarm";
})
SetAlarm_Btn.addEventListener('click', () => {
    let date = new Date();
    let hours = date.getHours();

    // These lines of code give the selected index of the select option.
    let wakeSelectedIndex = SetWakeTime.selectedIndex;
    let napSelectedIndex = SetNapTime.selectedIndex;
    let lunchSelectedIndex = SetLunchTime.selectedIndex;
    let nightSelectedIndex = SetNightTime.selectedIndex;


    // THese line of code set the innerText of each label as the user select the option.
    WakeUPLabel.innerText = SetWakeTime.children[wakeSelectedIndex].innerText;
    LunchTimeLabel.innerText = SetNapTime.children[napSelectedIndex].innerText;
    NapTimeLabel.innerText = SetLunchTime.children[lunchSelectedIndex].innerText;
    NightTimeLabel.innerText = SetNightTime.children[nightSelectedIndex].innerText;

    if (Number(SetLunchTime.value) === hours) {
        DynamicMessage2.innerText = "LET'S HAVE SOME LUNCH !!";
        Reminder_Poster.src = "./Images/LunchPoster.svg";
    }
    else if (Number(SetNapTime.value) === hours) {
        DynamicMessage2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        Reminder_Poster.src = "./Images/lunch_image.png";
    }
    else if (Number(SetNightTime.value) === hours) {
        DynamicMessage2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        Reminder_Poster.src = "./Images/NightPoster.svg";
    } else {
        DynamicMessage2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        Reminder_Poster.src = "./Images/WakeUpPoster.svg";
    }
})
