// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var button = $(".saveBtn");
  var textarea = $(".description");
  var buttonClick = function() {
    localStorage.setItem("hour8", textarea[0].value);
    localStorage.setItem("hour9", textarea[1].value);
    localStorage.setItem("hour10", textarea[2].value);
    localStorage.setItem("hour11", textarea[3].value);
    localStorage.setItem("hour12", textarea[4].value);
    localStorage.setItem("hour13", textarea[5].value);
    localStorage.setItem("hour14", textarea[6].value);
    localStorage.setItem("hour15", textarea[7].value);
    localStorage.setItem("hour16", textarea[8].value);
    localStorage.setItem("hour17", textarea[9].value);
}

$(button).click(buttonClick);

 //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 

var savedWork= function() {
    textarea[0].value = localStorage.getItem("hour8")
    textarea[1].value = localStorage.getItem("hour9")
    textarea[2].value = localStorage.getItem("hour10")
    textarea[3].value = localStorage.getItem("hour11")
    textarea[4].value = localStorage.getItem("hour12")
    textarea[5].value = localStorage.getItem("hour13")
    textarea[6].value = localStorage.getItem("hour14")
    textarea[7].value = localStorage.getItem("hour15")
    textarea[8].value = localStorage.getItem("hour16")
    textarea[9].value = localStorage.getItem("hour17")
}


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function hourTracker() {
    //get current number of hours.
    var currentHour = dayjs().hour(); 

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

  // TODO: Add code to display the current date in the header of the page.
var timeDisplayEl = $('#currentDay');

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] h:mm:ss a');
  timeDisplayEl.text(rightNow);
}
displayTime();
setInterval(displayTime, 1000);

hourTracker();
savedWork();


})
