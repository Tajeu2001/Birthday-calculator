function getDayBorn() {
  alert("Hi there! We'll start by providing the day born. Click ok to continue"); 
  let dateString = prompt("Enter date born in the following format: mm/dd/yyyy"); 
  let gender = prompt("What is your gender, female or male?"); 
  document.getElementById('displayNameHere').innerHTML = "Your Akan Name is " + getNameFromDate(dateString, gender);
}

function getNameFromDate(dateString,gender) {
  let dateOfBirth = new Date(dateString); 
  let dayOfTheWeek = dateOfBirth.getDay();
  let akanMale = ["Kwasi","kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  let akanFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  if(gender == "male"){
    return akanMale[dayOfTheWeek];
  }
  else if(gender == "female"){
  return akanFemale[dayOfTheWeek];
  }
  else {
    return "Error generating birth name!";
  }
}

