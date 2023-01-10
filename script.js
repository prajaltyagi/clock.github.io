setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hroation = 30 * htime + mtime / 2;
    mroation = 6 * mtime;
    sroation = 6 * stime;

    hour.style.transform = `rotate(${hroation}deg)`
    minute.style.transform = `rotate(${mroation}deg)`
    second.style.transform = `rotate(${sroation}deg)`
}, 1000);