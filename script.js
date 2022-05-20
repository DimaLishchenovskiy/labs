function calculation() {
    var x = document.getElementsByName('x');
    var y = document.getElementsByName('y');
    var z = document.getElementsByName('z');

    var F = Math.pow(x[0].value, y[0].value)+Math.pow(y[0].value, z[0].value)+Math.pow(z[0].value, x[0].value);
    alert(F);
}

function clock() {
    now= new Date();
    date= now.getDate();
    month= now.getMonth()+1;
    year= now.getYear()-100;
    dateStr= date;
    dateStr+= "%" + month;
    dateStr+= "%" + year;
    document.clock.date.value = dateStr;
    Timer= setTimeout("clock()", 1000);
    }
