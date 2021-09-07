// add clock to header
setInterval(function () {
    let rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
    $('#currentDay').html("The current date and time is " + rightNow);
}, 1000);

//functions to save tasks to local storage

function saveNine() {
    localStorage.setItem("nineAm", $('#nineAm').val());
};

function saveTen() {
    localStorage.setItem("tenAm", $('#tenAm').val());
};

function saveEleven() {
    localStorage.setItem("elevenAm", $('#elevenAm').val());
};

function saveTwelve() {
    localStorage.setItem("twelvePm", $('#twelvePm').val());
};

function saveOne() {
    localStorage.setItem("onePm", $('#onePm').val());
};

function saveTwo() {
    localStorage.setItem("twoPm", $('#twoPm').val());
};

function saveThree() {
    localStorage.setItem("threePm", $('#threePm').val());
};

function saveFour() {
    localStorage.setItem("fourPm", $('#fourPm').val());
};

function saveFive() {
    localStorage.setItem("fivePm", $('#fivePm').val());
};

// function to save all tasks entered to local storage
function saveAll() {
    saveNine();
    saveTen();
    saveEleven();
    saveTwelve();
    saveOne();
    saveTwo();
    saveThree();
    saveFour();
    saveFive();
};

//function to load text into textareas
function loadTasks() {
    $('textarea').each(function() {
        $('#nineAm').val(localStorage.getItem("nineAm"));
        $('#tenAm').val(localStorage.getItem("tenAm"));
        $('#elevenAm').val(localStorage.getItem("elevenAm"));
        $('#twelvePm').val(localStorage.getItem("twelvePm"));
        $('#onePm').val(localStorage.getItem("onePm"));
        $('#twoPm').val(localStorage.getItem("twoPm"));
        $('#threePm').val(localStorage.getItem("threePm"));
        $('#fourPm').val(localStorage.getItem("fourPm"));
        $('#fivePm').val(localStorage.getItem("fivePm"));
    });
};

// set color code when page loads
function setColor() {
    
    let hour = $(".hour");

    let time = moment(hour, "L").set("hour", 17);

    if (moment().isBefore(time)) {
        $(".hour").addClass("future");
    } else if (Math.abs(moment().diff(time, "hours")) <= 1) {
        $(".hour").addClass("present");
    } else {
        $(".hour").addClass("past");
    };

};

//timeblock color coding refreshing every 10 minutes
setInterval(setColor, ((1000 * 60) * 10));

// save button listeners

$('#btn9').on("click", saveNine);
$('#btn10').on("click", saveTen);
$('#btn11').on("click", saveEleven);
$('#btn12').on("click", saveTwelve);
$('#btn1').on("click", saveOne);
$('#btn2').on("click", saveTwo);
$('#btn3').on("click", saveThree);
$('#btn4').on("click", saveFour);
$('#btn5').on("click", saveFive);
$('#bigBtn').on("click", saveAll);


// load tasks when page opens
loadTasks();
setColor();