let dateB = document.getElementById("date").value;
let monthB =document.getElementById("month").value;
let yearB = document.getElementById("year").value;

let showName = document.getElementById("show-name");

let btn = document.getElementById("submit");


var birthday = new Date(monthB +"-"+ dateB+"-"+ yearB);
  console.log(birthday);
let d = birthday.getDate();
let m = birthday.getMonth();
let y = birthday.getYear();
let c = centuryFromYear("yearB")
console.log(c);
var form = document.getElementById("form");

btn.addEventListener("click",(date,month,year)=> {
  let dateB = document.getElementById("date").value;
  date = dateB.value;
  console.log(date);
    month = monthB.value;
    year = yearB.value;
  if(dateB.value <="0" || dateB.value >"31") {
    alert("Enter a valid number!");
  }
  if(monthB.value <="0" || monthB.value> "12") {
    alert("Enter a valid number!");
  }
  if(yearB.value=="") {
    alert("Please provide year!");
  }
})

var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleNames = ["Kwasi","kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
/*
var day = birthday.getDay();
console.log(day);
var feNa = femaleNames[console.log(day)];
  
var maNa = maleNames[console.log(day)];*/






