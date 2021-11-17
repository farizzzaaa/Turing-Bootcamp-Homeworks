
function clockTimer()
{
    let date = new Date();

    let time = [date.getHours(),date.getMinutes()];


    if(time[0] < 10){time[0] = "0"+ time[0];}
    if(time[1] < 10){time[1] = "0"+ time[1];}

    let current_time = [time[0],time[1]].join(':');
    let clock = document.getElementById("clock");

    clock.innerHTML = current_time;


    setTimeout("clockTimer()", 1000);
}



