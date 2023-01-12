$(function() {
    $.get("../Templates/header.html", function(data) {
        $('body').prepend(data);
    })
});