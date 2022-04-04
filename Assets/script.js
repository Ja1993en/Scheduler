// pull some elements in for every hour 
var workTime = [9,10,11,12,13,14,15,16,17];

//  $('.discription').style.color = 'green';

// current date of the daily planner 
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);

var currentHour = moment().format('H');
if (workTime > currentHour){
    $('.description').css('background-color', 'green');
} else if (workTime < currentHour) {
    $('.description').css('background-color', 'grey');

} else if (workTime == currentHour){
    $('.description').css('background-color', 'red');

}
// var times = $('.hour').text();
// console.log(times)



// var input = $('.discription').text.value;
// console.log(input);


