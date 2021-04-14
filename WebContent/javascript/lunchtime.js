    let show = document.getElementById('show');
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth();
    let date = time.getDate();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();

    let lunchTime = new Time(hh, mm, ss);
    let diffTime = lunchTime.getTime() - time.getTime;

    console.log(diffTime)