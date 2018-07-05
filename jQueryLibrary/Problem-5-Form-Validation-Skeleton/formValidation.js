function validate() {
    $("#company").on("click", function () {
        if ($(this).is(":checked")) {
            $("#companyInfo").css("display", "block");
        }
        else {
            $("#companyInfo").css("display", "none");
        }
    });

    $("#submit").on("click", function (event) {
        event.preventDefault();
        let valid = name();

        function name() {
            let regex = /\b[a-zA-Z\d]{3,20}\b/g;
            return email() && setBorder($("#username"), regex.test($("#username").val()));
        }

        function email() {
            let regex = /\b[a-zA-Z\d]+@[a-zA-Z\d]+\.[a-z]{2,3}[\.a-z]*\b/g;
            return pass() && setBorder($("#email"), regex.test($("#email").val()));
        }

        function pass() {
            let regex = /\b\w{5,15}\b/g;
            let pass = setBorder($("#password"), regex.test($("#password").val()));
            let confirm = setBorder($("#confirm-password"), regex.test($("#confirm-password").val()));

            return pass === confirm;
        }

        if (valid) {
            $("#valid").css("display", "block");
        }
        else {
            $("#valid").css("display", "none");
        }

        // console.log(email());
    });

    function setBorder(field, status) {
        console.log(`Field = ${field.attr("id")}, status = ${status}`);
        if (status) {
            field.css("border", "none");
            return true;
        }

        field.css("border", "2px solid red");
        return false;
    }
}
