// pull some elements in for every hour 
var workTime = [9,10,11,12,13,14,15,16,17];
var info = document.querySelector('#input');
var save = document.querySelector('.saveBtn')



// current date of the daily planner 
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);

hourColor = () => {
var currentHour = moment().format('H');
if (workTime > currentHour){
    $('.description').css('background-color', 'green');
} else if (workTime < currentHour) {
    $('.description').css('background-color', 'grey');

} else if (workTime == currentHour){
    $('.description').css('background-color', 'red');

}
}


infoDisplay = () => {
    var hourInput = localStorage.getItem("event-input");
    info.textContent = hourInput;
   

}
save.addEventListener("click", function(event) {
    event.preventDefault();

    var newInfo = document.querySelector('#input').value;

    localStorage.setItem("event-input", newInfo);
    infoDisplay();
}
);




// document.querySelector("saveBtn").addEventListener("click")

hourColor();





