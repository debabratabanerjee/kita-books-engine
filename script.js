$(document).ready(function () {
    $.getJSON("books.json", 
                        function (data) {
                    var output = '';
   
    $('#txt-search').keyup(function () {
        var searchField = $(this).val();
        if (searchField === '') {
            $('#filter-records').html('');
            return;
        }

        var regex = new RegExp(searchField, "i");
        var output = '<div class="row">';
        var count = 1;
        $.each(data, function (key, val) {
            if ((val.category.search(regex) != -1) || (val.name.search(regex) != -1)) {
                output += '<div class="col-md-6 well">';
                output += '<div class="col-md-3"><img class="img-responsive" src="' + val.profile_image + '" alt="' + val.employee_name_car + '" /></div>';
                output += '<div class="col-md-7">';
                output += '<h4>' + val.name + '<span class="badge badge-danger">Title</span> </h4>';
                output += '<b class="btn btn-info">' + val.category + '</b>';
                output += '<h4> <a href= " ' + val.url + '"> Click to Read</a> </h4>';
                output += '<div class="col-md-12 well">';
                output += '<b>Kita Review</b><br/>'
                //output += '<b class="btn btn-primary ">'+val.rating+'/5 <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> <img src="bookmark-star.svg"/> </span></b><br/>';
                //output += '<i>'+val.review+'</i><br/>'
                output += '<div class="alert alert-success" role="alert">Kita Premium reviews will be here soon</div>';
                output += '</div>';
                output += '</div>';
                output += '</div>';
                if (count % 2 == 0) {
                    output += '</div><div class="row">'
                }
                count++;
            }
        });
        output += '</div>';
        $('#filter-records').html(output);
    });
});
});