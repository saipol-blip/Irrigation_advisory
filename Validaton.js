document.getElementById("registrationForm").addEventListener("submit"
, function (event) {
let valid = true;
const fieldIds = [
"name", "mobile", "email", "plotID", "village",
"cropStage", "soilType", "irrigationMethod",
"registrationDate"
];
function clearError(id) {
document.getElementById(id + "Error").textContent = "";
document.getElementById(id).classList.remove("invalid");
}
function showError(id, message) {
document.getElementById(id + "Error").textContent = message;
document.getElementById(id).classList.add("invalid");
valid = false;
}
fieldIds.forEach(clearError);
let name = document.getElementById("name").value.trim();
let mobile = document.getElementById("mobile").value.trim();
let email = document.getElementById("email").value.trim();
let plotID = document.getElementById("plotID").value.trim();
let village = document.getElementById("village").value.trim();
let cropStage = document.getElementById("cropStage").value;
let soilType = document.getElementById("soilType").value;
let irrigationMethod =
document.getElementById("irrigationMethod").value;
let registrationDate =
document.getElementById("registrationDate").value;
if (name === "") {
showError("name", "Please enter farmer name.");
} else if (!/^[A-Za-z ]+$/.test(name)) {
showError("name", "Name should contain alphabets and spaces only.");
} else {
document.getElementById("name").value = name;
}
if (mobile === "") {
showError("mobile", "Please enter mobile number.");
} else if (!/^\d{10}$/.test(mobile)) {
showError("mobile", "Please enter a valid 10-digit mobile number.");
} else {
document.getElementById("mobile").value = mobile;
}
if (email === "") {
showError("email", "Please enter email address.");
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
showError("email", "Please enter a valid email address.");
} else {
    document.getElementById("email").value = email;
}
if (plotID === "") {
showError("plotID", "Please enter Plot ID.");
} else if (!/^P-\d{3,}$/.test(plotID)) {
showError("plotID", "Plot ID must be in the format P-101.");
} else {
document.getElementById("plotID").value = plotID;
}
if (village === "") {
showError("village", "Please enter village name.");
} else {
document.getElementById("village").value = village;
}
if (cropStage === "") {
showError("cropStage", "Please select crop stage.");
}
if (soilType === "") {
showError("soilType", "Please select soil type.");
}
if (irrigationMethod === "") {
showError("irrigationMethod", "Please select irrigation method.");
}
if (registrationDate === "") {
showError("registrationDate", "Please select registration date.");
} else {
let selectedDate = new Date(registrationDate);
let today = new Date();
today.setHours(0, 0, 0, 0);
selectedDate.setHours(0, 0, 0, 0);
if (selectedDate > today) {
    showError("registrationDate", "Registration date cannot be in the future.");
}
}
if (!valid) {
event.preventDefault();
}
});