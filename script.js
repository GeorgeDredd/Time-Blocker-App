const weeks = document.getElementById("weeks");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");


function countdown() {
    const endDate = new Date("01 June 2023");
    const currentDate = new Date();
    // returns in milli seconds
    const timeLeft = endDate  - currentDate;

    // console.log(endDate);


    // divide to 1000 to change to seconds
    let secsLeft = Math.floor(timeLeft / 1000);   
    let minsLeft = Math.floor(secsLeft / 60);  
    let hrsLeft = Math.floor(minsLeft / 60);  
    let daysLeft = Math.floor(hrsLeft / 24);
    let weeksLeft = Math.floor(daysLeft / 7);

    // Get remainder of division
    secsLeft = secsLeft % 60;
    minsLeft = minsLeft % 60;
    hrsLeft = hrsLeft % 24;
    

    weeks.innerHTML = formatTime(weeksLeft);
    days.innerHTML = formatTime(daysLeft);
    hours.innerHTML = formatTime(hrsLeft)
    mins.innerHTML = formatTime(minsLeft);
    secs.innerHTML = formatTime(secsLeft);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// countdown();
// call function every 1000 milliseconds i.e 1seconds
setInterval(countdown, 1000);