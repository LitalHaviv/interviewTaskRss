

$(document).ready(function () {
    //callAjax();
})

var ajax_arr;

function callAjax() {
    $.ajax({
        url: "list.json",
        dataType: "json",
        crossDomin: true,
        success: function (data) {
            ajax_arr = data;
        }
    });
}