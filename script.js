
// Add code to display the current date in the header of the page.
var currentDay = dayjs().format('dddd, MMM D YYYY');
$('#currentDay').text(currentDay);

//Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
function colorChange() {
  var currentHour = dayjs().format('H');
  var timeBlock = $('.time-block');
  
  timeBlock.each(function() {
    var hour = parseInt($(this).attr('id'));

    if (currentHour > hour) {
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');
    } 
    else if (currentHour == hour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } 
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}
//call function
colorChange();

//Add a listener for click events on the save button. 
//Varable declare
var saveBtn = $('.saveBtn');

saveBtn.on('click',function() {
  var time = $(this).siblings('.hour').text();
  var duty = $(this).siblings('.description').val();
  localStorage.setItem(time,duty);     
});
//Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
function dutySave() {
  $('.hour').each(function(){
    var currenthour = $(this).text();
    var currentDuty = localStorage.getItem(currenthour);
    $(this).siblings('.description').val(currentDuty);
  })
}
//call function
dutySave();
  

  
  




  

