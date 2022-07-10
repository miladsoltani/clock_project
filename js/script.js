const hour = document.querySelectorAll('span')[0]
const minute = document.querySelectorAll('span')[1]
const secound = document.querySelectorAll('span')[2]

setInterval(() => {

    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let secounds = time.getSeconds()

    if (hours < 10){
        hours = '0' + hours
    }
    if (secounds < 10){
        secounds = `0${secounds}`
    }
    if (minutes < 10){
        minutes = `0${minutes}`
    }

    hour.innerHTML = hours
    minute.innerHTML = minutes
    secound.innerHTML = secounds

}, 1000);
