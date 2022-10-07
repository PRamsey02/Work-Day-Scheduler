// User Story:
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// Acceptance Criteria:
// WHEN I open the planner, the current day is displayed at the top of the calendar
// WHEN I scroll down, I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day, each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock, I can enter an event
// WHEN I click the save button for that timeblock, the text for that event is saved in local storage
// WHEN I refresh the page, THEN the saved events persist

// Current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// Color-coded blocks to indicate whether it is in the past, present, or future
function timeBlockColor() {
    var hour = moment().hours();
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        if (currentHour > hour ) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};