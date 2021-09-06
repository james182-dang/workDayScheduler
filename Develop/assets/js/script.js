// add clock to header
setInterval(function () {
    let rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
    $('#currentDay').html("The current time and date is " + rightNow);
}, 1000);

//save tasks to task blocks
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

//function to load text into schedule blocks
function loadTasks() {
    $('textarea').each(function() {
        $('#nineAm').val(localStorage.getItem("nineAm"));
    });

    $('textarea').each(function() {
        $('#tenAm').val(localStorage.getItem("tenAm"));
    });

    $('textarea').each(function() {
        $('#elevenAm').val(localStorage.getItem("elevenAm"));
    });

    $('textarea').each(function() {
        $('#twelvePm').val(localStorage.getItem("twelvePm"));
    });

    $('textarea').each(function() {
        $('#onePm').val(localStorage.getItem("onePm"));
    });

    $('textarea').each(function() {
        $('#twoPm').val(localStorage.getItem("twoPm"));
    });

    $('textarea').each(function () {
        $('#threePm').val(localStorage.getItem("threePm"));
    });

    $('textarea').each(function() {
        $('#fourPm').val(localStorage.getItem("fourPm"));
    });

    $('textarea').each(function () {
        $('#fivePm').val(localStorage.getItem("fivePm"));
    });
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

// save button functionality

$('#btn9').on("click", saveNine);
$('#btn10').on("click", saveTen);
$('#btn11').on("click", saveEleven);
$('#btn12').on("click", saveTwelve);
$('#btn1').on("click", saveOne);
$('#btn2').on("click", saveTwo);
$('#btn3').on("click", saveThree);
$('#btn4').on("click", saveFour);
$('#btn5').on("click", saveFive);


// load tasks when page opens
loadTasks();