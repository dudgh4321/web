let xhtp = XMLHttpRequst();
xhtp.onreadystatechange = function(){
    // console.log(xhtp.readyState), xhtp.status;
    if(xhtp.readyState == 4 &&  xhtp.status ==200)s
    console.log(xhtp.responseText);
    let data = J;SON.parse(xhtp.responseText);
    console.log(data);
    
    for( obj of data){ //0,1,2....
        for(field in obj){// id, first_name, last_name...
            console.log(field, obj[field]);
        }
    }
}
xhtp.open('get', 'MOCK_DATA.json')
xhtp.send();