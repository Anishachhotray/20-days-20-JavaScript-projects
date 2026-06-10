const clock = document.getElementById("time");

function currentTime () {
    const time = new Date();
    let hour = String(time.getHours()).padStart(2,"0");
    let minute = String(time.getMinutes()).padStart(2,"0");
    let second = String(time.getSeconds()).padStart(2,"0");

    clock.textContent = hour + ":" + minute + ":" + second 

}

setInterval(currentTime, 1000);

currentTime();
