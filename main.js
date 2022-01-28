const start = document.querySelector('#start');
const end = document.querySelector('#end');
const result = document.querySelector('#result');
const btn_plus = document.querySelector('#btn-plus');
const btn_clear = document.querySelector('#clear');
var totalHours = 0;
var totalMinute = 0;

btn_clear.addEventListener('click', (event) => {
    totalHours = 0
    totalMinute = 0
    result.innerHTML = `0`
})
btn_plus.addEventListener('click', (event) => {
    const  textStart = start.value.split('');
    const textStartHours = textStart.splice(0, 2).join('');
    const textStartMinutes = textStart.splice(1).join('');

    const textEnd = end.value.split('');
    const textEndHours = textEnd.splice(0, 2).join('');
    const textEndMinutes = textEnd.splice(1, 3).join('');
 
    if(end.value.split('').indexOf('a') > 0) {
        let minute = +textStartMinutes + +textEndMinutes;
        let divMinute = ~~(minute / 60);
        let hours = 24 - +textStartHours + +textEndHours + divMinute;
        minute = minute - divMinute * 60;

        totalHours += hours;
        totalMinute += minute;

        let divTotalMinute = ~~(totalMinute / 60)
        totalHours += divTotalMinute;
        totalMinute -= divTotalMinute * 60;

        result.innerHTML = `${totalHours}h${totalMinute}`;
    }
    else {
        let minute = +textStartMinutes + +textEndMinutes;
        let divMinute = ~~(minute / 60);
        let hours = textEndHours - +textStartHours + divMinute;
        minute = minute - divMinute * 60;

        totalHours += hours;
        totalMinute += minute;

        let divTotalMinute = ~~(totalMinute / 60)
        totalHours += divTotalMinute;
        totalMinute -= divTotalMinute * 60;
        
        result.innerHTML = `${totalHours}h${totalMinute}`;
    }
})

