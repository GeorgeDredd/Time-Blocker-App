const classes = (classesName) => {
    return document.getElementsByClassName(classesName);
}


const secs = classes("secs");
const mins = classes("mins");
const hours = classes("hours");
const days = classes("days");
const weeks = classes("weeks");
const countCon = classes("countdownContainer");


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;   
const week = day * 7;
let timerId;


// Array.from(weeks).forEach((week) => {
//     console.log(week);
// })

// for (let week of weeks) {
//     console.log(week);
// }


function countdown() { 
    endTime(new Date("June 18 2023"), 0);
    endTime(new Date("May 10 2023 05:00:00"), 1);
}

let endTime = (end, index) => {     
    // To repeatedly get today in seconds
    const currentDate = new Date();
    // returns in milli seconds
    const timeLeft = end - currentDate;

    // Method-1
    let secsLeft = Math.floor((timeLeft % minute) / second);   
    let minsLeft = Math.floor((timeLeft % hour) / minute);  
    let hrsLeft = Math.floor((timeLeft % day) / hour);  
    let daysLeft = Math.floor((timeLeft % week) / day);
    let weeksLeft = Math.floor(timeLeft / week);


    // // Method-2     
    //  let weeksLeft = Math.floor(timeLeft / 1000 / 60 / 60 / 24 /7);
    //  let daysLeft = Math.floor(timeLeft / 1000 / 60 / 60 / 24) % 7;
    //  let hrsLeft = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    //  let minsLeft = Math.floor(timeLeft / 1000 / 60) % 60;
    //  let secsLeft = Math.floor(timeLeft / 1000) % 60;



    // // Method-3
    // // divide to 1000 to change to seconds
    // let secsLeft = Math.floor(timeLeft / 1000);   
    // let minsLeft = Math.floor(secsLeft / 60);  
    // let hrsLeft = Math.floor(minsLeft / 60);  
    // let daysLeft = Math.floor(hrsLeft / 24);
    // let weeksLeft = Math.floor(daysLeft / 7);

    // // Get remainder of division
    // secsLeft = secsLeft % 60;
    // minsLeft = minsLeft % 60;
    // hrsLeft = hrsLeft % 24;
    // daysLeft = daysLeft % 7;
    // weeksLeft = weeksLeft;


    
    if (timeLeft <= 0) {
        countCon[index].innerHTML = '<h1 class="number">Time Up!!!</h1>';
        // clearInterval(timerId);
    }
    else {
        // Add to Html
        weeks[index].innerHTML = formatTime(weeksLeft);
        days[index].innerHTML = formatTime(daysLeft);
        hours[index].innerHTML = formatTime(hrsLeft)
        mins[index].innerHTML = formatTime(minsLeft);
        secs[index].innerHTML = formatTime(secsLeft);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// countdown();
// call function every 1000 milliseconds i.e 1seconds
timerId = setInterval(countdown, 1000);

