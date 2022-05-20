function calculation() {
    var x = document.getElementsByName('x');
    var y = document.getElementsByName('y');
    var z = document.getElementsByName('z');

    var F = 1/(x[0].value+y[0].value+z[0].value);
    alert(F);
}

function clock() {
    now= new Date();
    date= now.getDate();
    month= now.getMonth()+1;
    year= now.getYear()-100;
    dateStr = year;
    dateStr += ":" + month;
    dateStr += ((date < 10) ? ":0" : ":") + date;

    hours= now.getHours();
    minutes= now.getMinutes();
    seconds= now.getSeconds();
    timeStr= ":" + hours;
    timeStr+= ((minutes < 10) ? ":0" : ":") + minutes;
    timeStr+= ((seconds < 10) ? ":0" : ":") + seconds;
    document.clock.date.value = dateStr+timeStr;
    Timer= setTimeout("clock()",1000);
    }
