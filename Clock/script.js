let a;
let date;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let current_time;

let main = document.getElementById("time");
let date_and_day = document.getElementById("date_and_time");

setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString();
    current_day = days[a.getDay()]; 
    current_time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
    main.innerHTML = current_time;
    date_and_day.innerHTML = current_day + ", " + date;

}, 1000);

