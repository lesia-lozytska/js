function MyFunc() { 

var Data = document.getElementById("Data");
  if (Data.style.display === "none") {
    Data.style.display = "block";
  } else {
    Data.style.display = "none";
  } 
const userData = {
        firstName: "John",
        secondName: "Smith",
        age: "35",
        email: "js@gmail.com",
        position: "Director",
        location: {
            country: "Ukraine",
            city: "Kyiv",
            street: "Dehtarna",
            streetNumber: "11"
        },

        keySkills: [
            "Team Management",
            "Scope Management",
            "Planning",
            "Estimations"
        ]
    };
  
    document.getElementById("firstName").innerHTML=`${userData.firstName} ${userData.secondName}`;
    document.getElementById("mail").innerHTML=userData.email;
    document.getElementById("age").innerHTML=userData.age;
    document.getElementById("address").innerHTML=`${userData.location.country}, ${userData.location.city}, ${userData.location.street} ${userData.location.streetNumber}`;
    document.getElementById("position").innerHTML=userData.position;

    document.getElementById("skills").innerHTML=userData.keySkills.join(',  ');

 }

