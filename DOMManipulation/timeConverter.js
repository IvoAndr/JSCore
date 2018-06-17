function attachEventsListeners() {
    document.getElementById("daysBtn").addEventListener("click", convertDays);
    document.getElementById("hoursBtn").addEventListener("click", convertHours);
    document.getElementById("minutesBtn").addEventListener("click", convertMinutes);
    document.getElementById("secondsBtn").addEventListener("click", convertSeconds);

    function convertDays() {
        let days = document.getElementById("days").value;
        if (Number(days)) {
            document.getElementById("hours").value = days * 24;
            document.getElementById("minutes").value = days * 1440;
            document.getElementById("seconds").value = days * 86400;
        }
    }

    function convertHours() {
        let hours = document.getElementById("hours").value;
        if (Number(hours)) {
            let days = hours / 24;
            document.getElementById("days").value = days;
            document.getElementById("minutes").value = days * 1440;
            document.getElementById("seconds").value = days * 86400;
        }
    }

    function convertMinutes() {
        let minutes = document.getElementById("minutes").value;
        if (Number(minutes)) {
            let days = minutes / 1440;
            document.getElementById("days").value = days;
            document.getElementById("hours").value = days * 24;
            document.getElementById("seconds").value = days * 86400;
        }
    }

    function convertSeconds() {
        let seconds = document.getElementById("seconds").value;
        if (Number(seconds)) {
            let days = seconds / 86400;
            document.getElementById("days").value = days;
            document.getElementById("hours").value = days * 24;
            document.getElementById("minutes").value = days * 1440;
        }
    }
}