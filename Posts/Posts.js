$(function() {
    $.get("../Templates/header.html", function(data) {
        $('body').prepend(data);
    });
});

function copyCode(element) {
    navigator.clipboard.writeText($(element).text());
  }
