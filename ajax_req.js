$(document).ready(function () {
    $("#list").on("click", function () {
        $.ajax({
            url:"handler.php"
        }).done(function (data) {
            $(this).empty().append("<tr><td>" + data +"</td></tr>");
        })
    })
})