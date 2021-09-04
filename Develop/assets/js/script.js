// add clock to header
setInterval(function () {
    let rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
    $('#currentDay').html("The current time and date is " + rightNow);
}, 1000);


//Connect time blocks to real-world-time
