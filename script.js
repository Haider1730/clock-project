
function clock(){
    let monthName = ["Januaru", "Fabruary", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let today = new Date();

    document.getElementById("date").innerHTML = dayName[today.getDay()] + " " + today.getDate() + " " + monthName[today.getMonth()] + " " + today.getFullYear();


    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    let day = h <= 11 ? "AM" : "PM";
    h = h < 12 ? h : h - 12;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.querySelector(".hour").innerHTML = h;
    document.querySelector(".min").innerHTML = m;
    document.querySelector(".sec").innerHTML = s + " " +day;






} let inter = setInterval(clock, 1000)