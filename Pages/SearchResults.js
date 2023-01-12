$(function() {
    $.ajaxSetup({ cache: false });

    $.get("../Templates/header.html", function(data) {
        $('body').prepend(data);
    })

    var JSONData = "../data.json";

    if (!$('#search').val() && new URL(window.location.href).searchParams.get('search') != null) {
        $('#search').val(new URL(window.location.href).searchParams.get('search'));
    }

    // Populates Table based on search expression
    var expression = new RegExp($('#search').val(), "i");

    $.getJSON(JSONData, function(data) {
        $.each(data, function(key, value){
            if (value.title.search(expression) != -1)// || value.category.search(expression) != -1)
            {
                $('#results_table').append('<tr><td><a href="../'+value.file_path+'">'+value.title+'</a></td><td>'+value.category+'</td><td>'+value.subcategory+'</td></tr>');
            }
            console.log(value.title);
        });   
    });

    // Typing Search string
    $('#search').keyup(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
  
        // If 'Enter' is pressed then populate table with results
        if (keycode == '13') {
            $('#result').html('');
            
            var expression = new RegExp($(this).val(), "i");
            
            $('#results_table tbody tr').remove();

            $.getJSON(JSONData, function(data) {
                $.each(data, function(key, value){
                    if (value.title.search(expression) != -1)// || value.category.search(expression) != -1)
                    {
                        $('#results_table').append('<tr><td><a href="../'+value.file_path+'">'+value.title+'</a></td><td>'+value.category+'</td><td>'+value.subcategory+'</td></tr>');
                    }
                });   
            });
        }
        else {
            $('#result').html('');
            
            var expression = new RegExp($(this).val(), "i");
            
            $.getJSON(JSONData, function(data) {
                $.each(data, function(key, value){
                    if (value.title.search(expression) != -1)// || value.category.search(expression) != -1)
                    {
                        $('#result').append('<li class="list-group-item link-class"> '+value.title+' | <span class="text-muted">'+value.category+'</span></li>');
                    }
                });   
            });
        }
    });
    
    // Click Search Results
    $('#result').on('click', 'li', function() {
        var click_text = $(this).text().split('|');

        $('#search').val($.trim(click_text[0]));
        $("#result").html('');
        
        var expression = new RegExp($('#search').val(), "i");

        $('#results_table tbody tr').remove();

        $.getJSON(JSONData, function(data) {
            $.each(data, function(key, value){
                if (value.title.search(expression) != -1)// || value.category.search(expression) != -1)
                {
                    $('#results_table').append('<tr><td><a href="../'+value.file_path+'">'+value.title+'</a></td><td>'+value.category+'</td><td>'+value.subcategory+'</td></tr>');
                }
            });   
        });
    });
});