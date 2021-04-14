$(document).ready(function () {
    $.ajax({
        url: '../MOCK_DATA.json',
        success: function (data) {
            //  let ultag = $('<ul />')
            let table = [];
            table.push('<table border="1"/>');
            for (let i = 0; i < data.length; i++) {
                table.push('<tr>');
                for (field in data[i]) {
                    table.push('<td>' + data[i][field] + '</td>');
                }
                table.push('</tr>');
            }
            table.push('</table>');
            let tag = table.join('');
            $('body').html(tag);
        }
    })
})

$.ajax({
    url: '../MOCK_DATA.json',
    type: 'get',
    data: 'name=hong&age=20',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        let arry = data;
        let ulTag = $('<ul />');
        $(arry).each(function (idx, obj) {
            console.log(idx, obj);
            // ulTag.append($('<li />').html('<a href="#">'+ obj.first_name + '</a>'));
            ulTag.append($('<li />').append($('<a />').html(obj.first_name).attr('href','get.jsp?name='+obj.first_name)
                )
                );

        });
        $('body').append(ulTag);
    },
    error: function (reject) {
        console.error(reject.status, reject.statusText);
    }
});