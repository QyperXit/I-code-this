const countdown = () => {
    const counterDate = new Date('December 11, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = counterDate - now;

    // how time works
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerHTML = days;
    document.querySelector('.hour').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.second').innerHTML = seconds;
}

setInterval(countdown, 1000)

