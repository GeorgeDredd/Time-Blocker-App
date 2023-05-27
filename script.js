const classes = (classesName) => {
    return document.getElementsByClassName(classesName);
}


const containerRow = document.getElementById("containerRow");
const dateTime = document.getElementById("datetime-local");
const taskTitle = document.getElementById("taskTitle")
const submitBtn = document.getElementById("submitBtn");


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


let countdownDiv = [];

function createCountdown() {
    if (taskTitle.value && dateTime.value) {
        let div = document.createElement("div");
        div.setAttribute("class", "col-md-6");
        div.innerHTML = `
                        <h1 class="text-center">${taskTitle.value.charAt(0).toUpperCase() + taskTitle.value.slice(1)}</h1>                    
                        <div class="countdownContainer d-flex justify-content-center align-items-center">
                            <div class="countdown weeksDiv">
                                <p class="number weeks">0</p>
                                <span>weeks</span> 
                            </div>
                            <div class="countdown daysDiv">
                                <p class="number days">0</p>
                                <span>days</span>
                            </div>
                            <div class="countdown hoursDiv">
                                <p class="number hours">0</p>
                                <span>hours</span>
                            </div>
                            <div class="countdown minsDiv">
                                <p class="number mins">0</p>
                                <span>mins</span>
                            </div>
                            <div class="countdown secsDiv">
                                <p class="number secs">0</p>
                                <span>secs</span>
                            </div>
                        </div>   
        `
        containerRow.appendChild(div)
        countdownDiv.push(dateTime.value);
        timerId = setInterval(countdown, 1000);
    } else {
        alert("Please fill in details accordingly");
        return false;
    }    
}


function countdown() {
    countdownDiv.forEach((value, key) => {
        endTime(new Date(value), key)
    })
    
}


let endTime = (end, index) => {     
    // To repeatedly get today in seconds
    const currentDate = new Date();
    // returns in milli seconds
    let timeLeft = [];
    timeLeft[index] = end - currentDate;

    // Method-1
    let secsLeft = Math.floor((timeLeft[index] % minute) / second);   
    let minsLeft = Math.floor((timeLeft[index] % hour) / minute);  
    let hrsLeft = Math.floor((timeLeft[index] % day) / hour);  
    let daysLeft = Math.floor((timeLeft[index] % week) / day);
    let weeksLeft = Math.floor(timeLeft[index] / week);

    
    if (timeLeft[index] <= 0) {
        // let h1 = document.createElement("h1")
        // h1.textContent = "Time Up!!!"
        // countCon[index].appendChild(h1); 
        delete countCon[index];
        // msg.innerHTML = "<h1 class='number'>Time Up</h1>"; 
        clearInterval(timerId);

    }
    else {
        if (timeLeft[index] <= 30 ) {
            countCon[index].style.color = "red";
        }
        // Add to Html
        weeks[index].innerHTML = formatTime(weeksLeft);
        days[index].innerHTML = formatTime(daysLeft);
        hours[index].innerHTML = formatTime(hrsLeft)
        mins[index].innerHTML = formatTime(minsLeft);
        secs[index].innerHTML = formatTime(secsLeft);
        timerId = setInterval(countdown, 1000);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// countdown();
// call function every 1000 milliseconds i.e 1seconds
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createCountdown();
})









// endTime(new Date(dateTime.value), 0)
// endTime(new Date("June 18 2023"), 0);
// endTime(new Date("May 12 2023 07:10:00"), 1);
// endTime(new Date("June 01 2023 00:00:00"), 2);



// Array.from(weeks).forEach((week) => {
//     console.log(week);
// })

// for (let week of weeks) {
//     console.log(week);
// }


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
