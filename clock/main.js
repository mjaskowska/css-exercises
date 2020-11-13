const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');
const dateText = document.querySelector('.date-text')

const today = new Date();
const date = "Today is " + today.toDateString();
dateText.innerHTML = date;

function setTime() {
    const time = new Date();

    const seconds = time.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = time.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;
    minute.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = time.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;
    hour.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setTime, 1000);