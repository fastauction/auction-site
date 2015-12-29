$(document).ready(function() {
    var getVehicleInventory = ("./data/data.json");
    $.getJSON(getVehicleInventory, function(allInventory) {
        $(".hx1").append("<span>" + allInventory[1].FIELD4 + " " + allInventory[1].FIELD5 + " " + allInventory[1].FIELD6 + "</span>");
        $(".hx2").append("<span>" + (commaSeparateNumber(allInventory[1].FIELD53)) + "</span");
        $(".mi-1").append("<span>" + allInventory[1].FIELD4 + " " + allInventory[1].FIELD5 + " " + allInventory[1].FIELD6 + "</span>");
        $(".mi-cond").append("<span>" + allInventory[1].FIELD1 + "</span>");
        $(".mi-2").append("<span>" + allInventory[1].FIELD7 + "</span>");
        $(".mi-3").append("<span>" + allInventory[1].FIELD8 + "</span>");
        $(".mi-4").append("<span>" + allInventory[1].FIELD11 + "</span>");
        $(".mi-5").append("<span>" + allInventory[1].FIELD14 + "</span>");
        $(".mi-6").append("<span>" + allInventory[1].FIELD15 + "</span>");
        $(".mi-7").append("<span>" + (commaSeparateNumber(allInventory[1].FIELD18)) + "</span>");
        $(".mi-8").append("<span> City: " + allInventory[1].FIELD49 + " / Hwy: " + allInventory[1].FIELD50 + "</span>");
        $(".mi-9").append("<span>" + (allInventory[1].FIELD30.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")) + "</span>");
        $(".dealer-phone").wrap("<a href=tel:" + allInventory[1].FIELD30 + "></a>");
        $(".mi-10").append("<span>" + allInventory[1].FIELD2 + "</span>");
        //console.info('current CSV :', allInventory);
        //start 2nd auction, gather data from json files
        $(".2-hx1").append("<span>" + allInventory[2].FIELD4 + " " + allInventory[2].FIELD5 + " " + allInventory[2].FIELD6 + "</span>");
        $(".2-hx2").append("<span>" + (commaSeparateNumber(allInventory[2].FIELD53)) + "</span");
        $(".2-mi-1").append("<span>" + allInventory[2].FIELD4 + " " + allInventory[2].FIELD5 + " " + allInventory[2].FIELD6 + "</span>");
        $(".2-mi-cond").append("<span>" + allInventory[2].FIELD1 + "</span>");
        $(".2-mi-2").append("<span>" + allInventory[2].FIELD7 + "</span>");
        $(".2-mi-3").append("<span>" + allInventory[2].FIELD8 + "</span>");
        $(".2-mi-4").append("<span>" + allInventory[2].FIELD11 + "</span>");
        $(".2-mi-5").append("<span>" + allInventory[2].FIELD14 + "</span>");
        $(".2-mi-6").append("<span>" + allInventory[2].FIELD15 + "</span>");
        $(".2-mi-7").append("<span>" + (commaSeparateNumber(allInventory[2].FIELD18)) + "</span>");
        $(".2-mi-8").append("<span> City: " + allInventory[2].FIELD49 + " / Hwy: " + allInventory[2].FIELD50 + "</span>");
        $(".2-mi-9").append("<span>" + (allInventory[2].FIELD30.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")) + "</span>");
        $(".2-dealer-phone").wrap("<a href=tel:" + allInventory[2].FIELD30 + "></a>");
        $(".2-mi-10").append("<span>" + allInventory[2].FIELD2 + "</span>");
        //start 3rd auction, gather data from json files
        $(".3-hx1").append("<span>" + allInventory[3].FIELD4 + " " + allInventory[3].FIELD5 + " " + allInventory[3].FIELD6 + "</span>");
        $(".3-hx2").append("<span>" + (commaSeparateNumber(allInventory[3].FIELD53)) + "</span");
        $(".3-mi-1").append("<span>" + allInventory[3].FIELD4 + " " + allInventory[3].FIELD5 + " " + allInventory[3].FIELD6 + "</span>");
        $(".3-mi-cond").append("<span>" + allInventory[3].FIELD1 + "</span>");
        $(".3-mi-2").append("<span>" + allInventory[3].FIELD7 + "</span>");
        $(".3-mi-3").append("<span>" + allInventory[3].FIELD8 + "</span>");
        $(".3-mi-4").append("<span>" + allInventory[3].FIELD11 + "</span>");
        $(".3-mi-5").append("<span>" + allInventory[3].FIELD14 + "</span>");
        $(".3-mi-6").append("<span>" + allInventory[3].FIELD15 + "</span>");
        $(".3-mi-7").append("<span>" + (commaSeparateNumber(allInventory[3].FIELD18)) + "</span>");
        $(".3-mi-8").append("<span> City: " + allInventory[3].FIELD49 + " / Hwy: " + allInventory[3].FIELD50 + "</span>");
        $(".3-mi-9").append("<span>" + (allInventory[3].FIELD30.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")) + "</span>");
        $(".3-dealer-phone").wrap("<a href=tel:" + allInventory[3].FIELD30 + "></a>");
        $(".3-mi-10").append("<span>" + allInventory[3].FIELD2 + "</span>");
        //start 4th auction, gather data from json files
        $(".4-hx1").append("<span>" + allInventory[4].FIELD4 + " " + allInventory[4].FIELD5 + " " + allInventory[4].FIELD6 + "</span>");
        $(".4-hx2").append("<span>" + (commaSeparateNumber(allInventory[4].FIELD53)) + "</span");
        $(".4-mi-1").append("<span>" + allInventory[4].FIELD4 + " " + allInventory[4].FIELD5 + " " + allInventory[4].FIELD6 + "</span>");
        $(".4-mi-cond").append("<span>" + allInventory[4].FIELD1 + "</span>");
        $(".4-mi-2").append("<span>" + allInventory[4].FIELD7 + "</span>");
        $(".4-mi-3").append("<span>" + allInventory[4].FIELD8 + "</span>");
        $(".4-mi-4").append("<span>" + allInventory[4].FIELD11 + "</span>");
        $(".4-mi-5").append("<span>" + allInventory[4].FIELD14 + "</span>");
        $(".4-mi-6").append("<span>" + allInventory[4].FIELD15 + "</span>");
        $(".4-mi-7").append("<span>" + (commaSeparateNumber(allInventory[4].FIELD18)) + "</span>");
        $(".4-mi-8").append("<span> City: " + allInventory[4].FIELD49 + " / Hwy: " + allInventory[4].FIELD50 + "</span>");
        $(".4-mi-9").append("<span>" + (allInventory[4].FIELD30.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")) + "</span>");
        $(".4-dealer-phone").wrap("<a href=tel:" + allInventory[4].FIELD30 + "></a>");
        $(".4-mi-10").append("<span>" + allInventory[4].FIELD2 + "</span>");
        //start 5th auction, gather data
        $(".5-hx1").append("<span>" + allInventory[5].FIELD4 + " " + allInventory[5].FIELD5 + " " + allInventory[5].FIELD6 + "</span>");
        $(".5-hx2").append("<span>" + (commaSeparateNumber(allInventory[5].FIELD53)) + "</span");
        $(".5-mi-1").append("<span>" + allInventory[5].FIELD4 + " " + allInventory[5].FIELD5 + " " + allInventory[5].FIELD6 + "</span>");
        $(".5-mi-cond").append("<span>" + allInventory[5].FIELD1 + "</span>");
        $(".5-mi-2").append("<span>" + allInventory[5].FIELD7 + "</span>");
        $(".5-mi-3").append("<span>" + allInventory[5].FIELD8 + "</span>");
        $(".5-mi-4").append("<span>" + allInventory[5].FIELD11 + "</span>");
        $(".5-mi-5").append("<span>" + allInventory[5].FIELD14 + "</span>");
        $(".5-mi-6").append("<span>" + allInventory[5].FIELD15 + "</span>");
        $(".5-mi-7").append("<span>" + (commaSeparateNumber(allInventory[5].FIELD18)) + "</span>");
        $(".5-mi-8").append("<span> City: " + allInventory[5].FIELD49 + " / Hwy: " + allInventory[5].FIELD50 + "</span>");
        $(".5-mi-9").append("<span>" + (allInventory[5].FIELD30.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")) + "</span>");
        $(".5-dealer-phone").wrap("<a href=tel:" + allInventory[5].FIELD30 + "></a>");
        $(".5-mi-10").append("<span>" + allInventory[5].FIELD2 + "</span>");
        //start 6th auction
        $(".6-hx1").append("<span>" + allInventory[6].FIELD4 + " " + allInventory[6].FIELD5 + " " + allInventory[6].FIELD6 + "</span>");
        $(".6-hx2").append("<span>" + (commaSeparateNumber(allInventory[6].FIELD53)) + "</span");
        $(".6-mi-1").append("<span>" + allInventory[6].FIELD4 + " " + allInventory[6].FIELD5 + " " + allInventory[6].FIELD6 + "</span>");
        $(".6-mi-cond").append("<span>" + allInventory[6].FIELD1 + "</span>");
        $(".6-mi-2").append("<span>" + allInventory[6].FIELD7 + "</span>");
        $(".6-mi-3").append("<span>" + allInventory[6].FIELD8 + "</span>");
        $(".6-mi-4").append("<span>" + allInventory[6].FIELD11 + "</span>");
        $(".6-mi-5").append("<span>" + allInventory[6].FIELD14 + "</span>");
        $(".6-mi-6").append("<span>" + allInventory[6].FIELD15 + "</span>");
        $(".6-mi-7").append("<span>" + (commaSeparateNumber(allInventory[6].FIELD18)) + "</span>");
        $(".6-mi-8").append("<span> City: " + allInventory[6].FIELD49 + " / Hwy: " + allInventory[6].FIELD50 + "</span>");
        $(".6-mi-9").append("<span>" + (allInventory[6].FIELD30.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")) + "</span>");
        $(".6-dealer-phone").wrap("<a href=tel:" + allInventory[6].FIELD30 + "></a>");
        $(".6-mi-10").append("<span>" + allInventory[6].FIELD2 + "</span>");
        //start 7th auction
        $(".7-hx1").append("<span>" + allInventory[7].FIELD4 + " " + allInventory[7].FIELD5 + " " + allInventory[7].FIELD6 + "</span>");
        $(".7-hx2").append("<span>" + (commaSeparateNumber(allInventory[7].FIELD53)) + "</span");
        $(".7-mi-1").append("<span>" + allInventory[7].FIELD4 + " " + allInventory[7].FIELD5 + " " + allInventory[7].FIELD6 + "</span>");
        $(".7-mi-cond").append("<span>" + allInventory[7].FIELD1 + "</span>");
        $(".7-mi-2").append("<span>" + allInventory[7].FIELD7 + "</span>");
        $(".7-mi-3").append("<span>" + allInventory[7].FIELD8 + "</span>");
        $(".7-mi-4").append("<span>" + allInventory[7].FIELD11 + "</span>");
        $(".7-mi-5").append("<span>" + allInventory[7].FIELD14 + "</span>");
        $(".7-mi-6").append("<span>" + allInventory[7].FIELD15 + "</span>");
        $(".7-mi-7").append("<span>" + (commaSeparateNumber(allInventory[7].FIELD18)) + "</span>");
        $(".7-mi-8").append("<span> City: " + allInventory[7].FIELD49 + " / Hwy: " + allInventory[7].FIELD50 + "</span>");
        $(".7-mi-9").append("<span>" + (allInventory[7].FIELD30.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")) + "</span>");
        $(".7-dealer-phone").wrap("<a href=tel:" + allInventory[7].FIELD30 + "></a>");
        $(".7-mi-10").append("<span>" + allInventory[7].FIELD2 + "</span>");
        // start 8th auction
        $(".8-hx1").append("<span>" + allInventory[8].FIELD4 + " " + allInventory[8].FIELD5 + " " + allInventory[8].FIELD6 + "</span>");
        $(".8-hx2").append("<span>" + (commaSeparateNumber(allInventory[8].FIELD53)) + "</span");
        $(".8-mi-1").append("<span>" + allInventory[8].FIELD4 + " " + allInventory[8].FIELD5 + " " + allInventory[8].FIELD6 + "</span>");
        $(".8-mi-cond").append("<span>" + allInventory[8].FIELD1 + "</span>");
        $(".8-mi-2").append("<span>" + allInventory[8].FIELD7 + "</span>");
        $(".8-mi-3").append("<span>" + allInventory[8].FIELD8 + "</span>");
        $(".8-mi-4").append("<span>" + allInventory[8].FIELD11 + "</span>");
        $(".8-mi-5").append("<span>" + allInventory[8].FIELD14 + "</span>");
        $(".8-mi-6").append("<span>" + allInventory[8].FIELD15 + "</span>");
        $(".8-mi-7").append("<span>" + (commaSeparateNumber(allInventory[8].FIELD18)) + "</span>");
        $(".8-mi-8").append("<span> City: " + allInventory[8].FIELD49 + " / Hwy: " + allInventory[8].FIELD50 + "</span>");
        $(".8-mi-9").append("<span>" + (allInventory[8].FIELD30.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")) + "</span>");
        $(".8-dealer-phone").wrap("<a href=tel:" + allInventory[8].FIELD30 + "></a>");
        $(".8-mi-10").append("<span>" + allInventory[8].FIELD2 + "</span>");
    });
});
