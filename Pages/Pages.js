$(function() {
    $.get("../Templates/header.html", function(data) {
        $('body').prepend(data);
    });

    if ($('#d365posts').length) {
        $.getJSON('../data.json', function(data) {
            $.each(data, function(key, value){
                if (value.category.search('code') != -1)
                {
                    switch (value.subcategory) {
                        case 'forms':
                            $('#Forms').append('<li class="list-group-item link-class"><a href="../'+value.file_path+'">'+value.title+'</a></li>');
                            break;
                        case 'tables':
                            $('#Tables').append('<li class="list-group-item link-class"><a href="../'+value.file_path+'">'+value.title+'</a></li>');
                            break;
                        case 'reports':
                            $('#Reports').append('<li class="list-group-item link-class"><a href="../'+value.file_path+'">'+value.title+'</a></li>');
                            break;
                        case 'data entities':
                            $('#Date Entities').append('<li class="list-group-item link-class"><a href="../'+value.file_path+'">'+value.title+'</a></li>');
                            break;
                        case 'financial dimensions':
                            $('#Financial Dimensions').append('<li class="list-group-item link-class"><a href="../'+value.file_path+'">'+value.title+'</a></li>');
                            break;
                        case 'workflow':
                            $('#Workflow').append('<li class="list-group-item link-class"><a href="../'+value.file_path+'">'+value.title+'</a></li>');
                            break;
                        case 'other':
                            $('#Other').append('<li class="list-group-item link-class"><a href="../'+value.file_path+'">'+value.title+'</a></li>');
                            break;
                }
                    //$('#d365posts').append('<li class="list-group-item link-class"><a href="../'+value.file_path+'">'+value.title+'</a></li>');
                }
            });   
        });
    }

    if ($('#d365tools').length) {
        $.getJSON('../data.json', function(data) {
            $.each(data, function(key, value){
                if (value.category.search('Tool') != -1)
                {
                    $('#d365tools').append('<li class="list-group-item link-class"><a href="../'+value.file_path+'">'+value.title+'</a></li>');
                }
            });   
        });
    }

    if ($('#d365certs').length) {
        $.getJSON('../data.json', function(data) {
            $.each(data, function(key, value){
                if (value.category.search('Certification') != -1)
                {
                    $('#d365certs').append('<li class="list-group-item link-class"><a href="../'+value.file_path+'">'+value.title+'</a></li>');
                }
            });   
        });
    }
});