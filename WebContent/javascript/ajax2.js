let xhtp = new XMLHttpRequest();
xhtp.onreadystatechange = function () {
    // 4: request finished and response is ready
    // 200 : server status : 'ok'
    if (xhtp.readyState == 4 && xhtp.status == 200) {
        console.log(xhtp.responseXML);
        let doc = xhtp.responseXML;
        let rows = doc.getElementsByTagName('record')
        for (let i = 0; i < rows.length; i++) {
            console.log(rows[i].children[0].innerHTML,
                rows[i].children[1].innerHTML,
                rows[i].children[2].innerHTML,
                rows[i].children[3].innerHTML,
                rows[i].children[4].innerHTML,
                rows[i].children[5].innerHTML,
                rows[i].children[6].innerHTML);
        }
    }
}
xhtp.open('get', 'dataset.xml');
xhtp.send();