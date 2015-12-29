var endTime = new Date(2015, 12, 5).getTime() / 1000;

function setClock() {
    var elapsed = new Date().getTime() / 1000;
    var totalSec = endTime - elapsed;
    var d = parseInt(totalSec / 86400);
    var h = parseInt(totalSec / 3600) % 24;
    var m = parseInt(totalSec / 60) % 60;
    var s = parseInt(totalSec % 60, 10);
    var result = d + " d " + h + " h " + m + " m " + s + " s ";
    document.getElementById('timeRemaining').innerHTML = result;
    setTimeout(setClock, 1000);
    //console.info("end of auction #1: ",endTime);
}
setClock();

var endTime2 = new Date(2015, 12, 4).getTime() / 1000;

function setClock2() {
    var elapsed = new Date().getTime() / 1000;
    var totalSec = endTime2 - elapsed;
    var d = parseInt(totalSec / 86400);
    var h = parseInt(totalSec / 3600) % 24;
    var m = parseInt(totalSec / 60) % 60;
    var s = parseInt(totalSec % 60, 10);
    var result = d + " d " + h + " h " + m + " m " + s + " s ";
    document.getElementById('2-timeRemaining').innerHTML = result;
    setTimeout(setClock2, 1000);
    //console.info("end of auction #2: ",endTime2);
}
setClock2();

var endTime3 = new Date(2015, 12, 3).getTime() / 1000;

function setClock3() {
    var elapsed = new Date().getTime() / 1000;
    var totalSec = endTime3 - elapsed;
    var d = parseInt(totalSec / 86400);
    var h = parseInt(totalSec / 3600) % 24;
    var m = parseInt(totalSec / 60) % 60;
    var s = parseInt(totalSec % 60, 10);
    var result = d + " d " + h + " h " + m + " m " + s + " s ";
    document.getElementById('3-timeRemaining').innerHTML = result;
    setTimeout(setClock3, 1000);
    //console.info("end of auction #3: ",endTime3);
}
setClock3();

var endTime4 = new Date(2015, 12, 2).getTime() / 1000;

function setClock4() {
    var elapsed = new Date().getTime() / 1000;
    var totalSec = endTime4 - elapsed;
    var d = parseInt(totalSec / 86400);
    var h = parseInt(totalSec / 3600) % 24;
    var m = parseInt(totalSec / 60) % 60;
    var s = parseInt(totalSec % 60, 10);
    var result = d + " d " + h + " h " + m + " m " + s + " s ";
    document.getElementById('4-timeRemaining').innerHTML = result;
    setTimeout(setClock4, 1000);
    //console.info("end of auction #4: ",endTime4);
}
setClock4();

var endTime5 = new Date(2015, 12, 6).getTime() / 1000;

function setClock5() {
    var elapsed = new Date().getTime() / 1000;
    var totalSec = endTime5 - elapsed;
    var d = parseInt(totalSec / 86400);
    var h = parseInt(totalSec / 3600) % 24;
    var m = parseInt(totalSec / 60) % 60;
    var s = parseInt(totalSec % 60, 10);
    var result = d + " d " + h + " h " + m + " m " + s + " s ";
    document.getElementById('5-timeRemaining').innerHTML = result;
    setTimeout(setClock5, 1000);
    //console.info("end of auction #5: ",endTime5);
}
setClock5();

var endTime6 = new Date(2015, 12, 3).getTime() / 1000;

function setClock6() {
    var elapsed = new Date().getTime() / 1000;
    var totalSec = endTime6 - elapsed;
    var d = parseInt(totalSec / 86400);
    var h = parseInt(totalSec / 3600) % 24;
    var m = parseInt(totalSec / 60) % 60;
    var s = parseInt(totalSec % 60, 10);
    var result = d + " d " + h + " h " + m + " m " + s + " s ";
    document.getElementById('6-timeRemaining').innerHTML = result;
    setTimeout(setClock6, 1000);
    //console.info("end of auction #6: ",endTime6);
}
setClock6();

var endTime7 = new Date(2015, 12, 10).getTime() / 1000;

function setClock7() {
    var elapsed = new Date().getTime() / 1000;
    var totalSec = endTime7 - elapsed;
    var d = parseInt(totalSec / 86400);
    var h = parseInt(totalSec / 3600) % 24;
    var m = parseInt(totalSec / 60) % 60;
    var s = parseInt(totalSec % 60, 10);
    var result = d + " d " + h + " h " + m + " m " + s + " s ";
    document.getElementById('7-timeRemaining').innerHTML = result;
    setTimeout(setClock7, 1000);
    //console.info("end of auction #7: ",endTime7);
}
setClock7();

var endTime8 = new Date(2015, 12, 1).getTime() / 1000;

function setClock8() {
    var elapsed = new Date().getTime() / 1000;
    var totalSec = endTime8 - elapsed;
    var d = parseInt(totalSec / 86400);
    var h = parseInt(totalSec / 3600) % 24;
    var m = parseInt(totalSec / 60) % 60;
    var s = parseInt(totalSec % 60, 10);
    var result = d + " d " + h + " h " + m + " m " + s + " s ";
    document.getElementById('8-timeRemaining').innerHTML = result;
    setTimeout(setClock8, 1000);
    //console.info("end of auction #8: ",endTime8);
}
setClock8();
