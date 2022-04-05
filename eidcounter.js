let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let eid = "3 may 2022";

function showtime() {
    let currentdate = new Date();
    let eiddate = new Date(eid);

    let TotalSeconds = (eiddate - currentdate) / 1000;

    let ds = Math.floor(TotalSeconds / 3600 / 24);
    let h = Math.floor(TotalSeconds / 3600) % 24;
    let min = Math.floor(TotalSeconds / 60) % 60;
    let sec = Math.floor(TotalSeconds) % 60;



    sec = (sec < 10) ? "0" + sec : sec;
    min = (min < 10) ? "0" + min : min;
    h = (h < 10) ? "0" + h : h;
    ds = (ds < 10) ? "0" + ds : ds;



    days.innerHTML = ds;
    hours.innerHTML = h;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

}


showtime();

setInterval(showtime, 1000);