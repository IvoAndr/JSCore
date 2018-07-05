function timer() {
    let timer;
    let secVal = 0;
    let minVal = 0;
    let hourVal = 0;
    let start = $("#start-timer");
    let stop = $("#stop-timer");
    stop.attr("disabled", true);

    start.on("click", function () {
        stop.attr("disabled", false);
        start.attr("disabled", true);
        updateTime();
        timer = setInterval(updateTime, 1000);
    });

    stop.on("click", function () {
        clearInterval(timer);
        stop.attr("disabled", true);
        start.attr("disabled", false);
    });

    function updateTime() {
        if (minVal === 60) {
            minVal = 0;
            hourVal++;
        }

        if (secVal === 60) {
            secVal = 0;
            minVal++
        }

        $("#seconds").text(addZero(secVal));
        $("#minutes").text(addZero(minVal));
        $("#hours").text(addZero(hourVal));
        secVal++;
    }

    function addZero(val) {
        if (val < 10) {
            return "0" + val;
        }

        return "" + val;
    }
}