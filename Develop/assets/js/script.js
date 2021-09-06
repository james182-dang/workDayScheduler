// add clock to header
setInterval(function () {
    let rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
    $('#currentDay').html("The current time and date is " + rightNow);
}, 1000);

//save tasks to task blocks
function saveNine() {
    localStorage.setItem("nineAm", $('#nineAm').value);
};

function saveTen() {
    localStorage.setItem("tenAm", $('#tenAm').value);
};

function saveEleven() {
    localStorage.setItem("elevenAm", $('#elevenAm').value);
};

function saveTwelve() {
    localStorage.setItem("twelvePm", $('#twelvePm').value);
};

function saveOne() {
    localStorage.setItem("onePm", $('#onePm').value);
};

function saveTwo() {
    localStorage.setItem("twoPm", $('#twoPm').value);
};

function saveThree() {
    localStorage.setItem("threePm", $('#threePm').value);
};

function saveFour() {
    localStorage.setItem("fourPm", $('#fourPm').value);
};

function saveFive() {
    localStorage.setItem("fivePm", $('#fivePm').value);
};

//function to load text into schedule blocks
function loadTasks() {
    localStorage.getItem("nineAm");
    localStorage.getItem("tenAm");
    localStorage.getItem("elevenAm");
    localStorage.getItem("twelvePm");
    localStorage.getItem("onePm");
    localStorage.getItem("twoPm");
    localStorage.getItem("threePm");
    localStorage.getItem("fourPm");
    localStorage.getItem("fivePm");
};

// timeblock color coding
let hour = $(".hour");

let time = moment(hour, "L").set("hour", 17);

if (moment().isBefore(time)) {
    $(".hour").addClass("future");
} else if (Math.abs(moment().diff(time, "hours")) <= 1) {
    $(".hour").addClass("present");
} else {
    $(".hour").addClass("past");
};
