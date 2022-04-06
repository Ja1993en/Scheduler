// pull some elements in for every hour 
var workTime = [9,10,11,12,13,14,15,16,17];
var info = document.querySelector('#input');



// current date of the daily planner 
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);

hourColor = () => {
    // Loops through each element 
    $('.description').each(function(i,obj){
var currentHour = moment().format('H');
if ((i+9) > currentHour){
    $(this).css('background-color', 'green');
} else if ((i+9) < currentHour) {

    $(this).css('background-color', 'grey');

} else if ((i+9) == currentHour){
    $(this).css('background-color', 'red');

}
    });
}

//Get items from local storage and displays inputs
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


infoDisplay = () => {
    // var hourInput = localStorage.getItem("event-input");
    // info.textContent = hourInput;
   

}

// Save inputs into local storage
 $(".saveBtn").click(function() {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")

    //put in local storage
    localStorage.setItem(time, text);
    // localStorage.setItem("event-input", info.value);

    infoDisplay();
    }
    
);




// document.querySelector("saveBtn").addEventListener("click")
infoDisplay();
hourColor();





