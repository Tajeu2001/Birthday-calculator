let akanMale = ["Kwasi","kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let akanFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

let dateString
let dateOfBirth 
let year
let gender

$(document).ready(function(){
  $("#submit").click(function(e){

  gender = $("form input[name='gender']:checked").val();
  dateString = new Date($("form input[name='date']").val());

  let dayOfTheWeek = parseInt(dateString.getDay());

  if(gender = male){
    document.getElementById("displayNameHere").innerHTML= "Your Akan name is " + akanMale[dayOfTheWeek] ;
  } 

  if(gender = female){
    document.getElementById("displayNameHere").innerHTML= "Your Akan name is " + akanFemale[dayOfTheWeek] ;
  } 


  e.preventDefault();
  });
}); 


  