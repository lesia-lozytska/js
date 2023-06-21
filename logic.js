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
}
