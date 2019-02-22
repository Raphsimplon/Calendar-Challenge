let moment = require('moment');
moment.locale('fr');

// console.log(dt);

// var st = 18/02/2019;
// var dt = moment(st).format('L');
// console.log(dt);


let index = 0;

dateToInit = moment();
index = taInit(dateToInit, index);

function taInit(savdate, index) {
    document.querySelector("#ta-title").innerHTML = moment(savdate).format('MMMM').toUpperCase() + ' ' + moment(savdate).format('YYYY');
    date = moment(savdate).startOf('month');
    resetCalendar();

    let weekCount = 0;
    let endMonth = moment(date).endOf('month').format('D')
    for (let i = 0; i < endMonth; i++) {
        index = (placeDate(moment(date), weekCount, moment(date).format('d'), index));
        if (moment(date).format('d') == 0) {
            weekCount += 1;
        }
        date = moment(date).add(1, 'days');
    }
    return (index);

}

function placeDate(date, row, column, index) {
    if (column == 0) {
        column = 7;
    }
    let td = document.querySelector('#ta-' + row + '-' + column);
    td.textContent = moment(date).format('D');

    if ('05/03/2019' == moment(date).format('L')) {
        td.style.backgroundColor = 'red';
        td.className = 'event';
        let event = document.querySelector('.event');
        event.addEventListener('click', function (event) {
            let affichage = document.querySelector('div.col-3.affichage');
            let p = document.createElement('p');
            affichage.appendChild(p);
            p.innerHTML = 'oui';
        });
    }
    if (moment().format('L') === moment(date).format('L')) {
        index = 1;
        td.style.backgroundColor = 'rgb(255, 255, 78)';
        // rgb(255, 255, 78)
        // console.log(moment().format('L'));

    } else if (index >= 1 && index <= 6) {
        td.style.backgroundColor = 'rgb(252, 252, 172)';
        // rgb(252, 252, 172)
        index++;
    }
    // console.log(index);
    return (index);
}

function resetCalendar() {
    for (let x = 0; x < 5; x++) {
        for (let y = 1; y < 8; y++) {
            let td = document.querySelector('#ta-' + x + '-' + y);
            td.innerHTML = "";

            if (moment().format('L') !== moment(date).format('L')) {
                td.style.backgroundColor = 'white';
            }
        }
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        resetCalendar();
        dateToInit = moment(dateToInit).add(1, 'month');
        taInit(dateToInit, index);
    } else if (e.key === "ArrowLeft") {
        resetCalendar();
        dateToInit = moment(dateToInit).subtract(1, 'month');
        // console.log(dateToInit);

        taInit(dateToInit);
    }
})
let buttonLeft = document.querySelector('.btn.btn-primary.fas.fa-chevron-left') 

buttonLeft.addEventListener('click', function (e) {
        resetCalendar();
        dateToInit = moment(dateToInit).subtract(1, 'month');
        // console.log(dateToInit);

        taInit(dateToInit);
});


let buttonRight = document.querySelector('.btn.btn-primary.fas.fa-chevron-right') 

buttonRight.addEventListener('click', function (e) {
        resetCalendar();
        dateToInit = moment(dateToInit).add(1, 'month');
        // console.log(dateToInit);

        taInit(dateToInit);
});


// let event = document.querySelector('.event');

// event.addEventListener('click', function (event) {
//     let affichage = document.querySelector('div.col-3.affichage');
//     let p = document.createElement('p');
//     affichage.appendChild(p);
//     p.innerHTML = 'oui';
// });