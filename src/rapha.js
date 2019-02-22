// document.addEventListener('change', function() {
//    let input = document.querySelector('#them-select');
//    if (localStorage['them-select']) { 
//        input.value = localStorage['them-select'];
//        console.log(localStorage);
//    }
//    input.onchange = function () {
//         localStorage['them-select'] = this.value;
//     }
// });

// changeColor('rgba(128, 185, 255, 1)');
// changenavColor('linear-gradient(180deg, rgba(0,0,0,1) 10%,rgba(128, 185, 255, 1)100%)');
// saveSelect();

document.querySelector("#them-select").addEventListener("change", function () {
    if (document.querySelector("#them-select").value === "rgba(128, 185, 255, 1)"){
        changeColor('rgba(128, 185, 255, 1)');
        changenavColor('linear-gradient(180deg, rgba(0,0,0,1) 10%,rgba(128, 185, 255, 1)100%)');
    }
    else if(document.querySelector("#them-select").value === "rgba(61, 255, 71, 1)"){
        changeColor('rgba(61, 255, 71, 1)');
        changenavColor('linear-gradient(180deg, rgba(0,0,0,1) 10%,rgba(61, 255, 71, 1) 100%)');
    }
    else if(document.querySelector("#them-select").value === "rgba(240, 147, 66, 1)"){
        changeColor('rgba(240, 147, 66, 1)');
        changenavColor('linear-gradient(180deg, rgba(0,0,0,1) 10%,rgba(240, 147, 66, 1) 100%)');
    }
    else if (document.querySelector("#them-select").value === "rgba(249, 128, 255, 1)"){
        changeColor('rgba(249, 128, 255, 1)');
        changenavColor('linear-gradient(180deg, rgba(0,0,0,1) 10%,rgba(249, 128, 255, 1)100%)');
    }
    else if(document.querySelector("#them-select").value ==="rgba(255, 128, 128, 1)"){
        changeColor('rgba(255, 128, 128, 1)');
        changenavColor('linear-gradient(180deg, rgba(0,0,0,1) 10%,rgba(255, 128, 128, 1) 100%)');
    }
    saveSelect();
});
load();

function saveSelect() {
    localStorage.bgColor = document.getElementById("them-select").value;
    document.querySelector(".color").style.backgroundColor = localStorage.bgColor;
}

function load() {
    if (!localStorage.bgColor) {
        localStorage.bgColor = "color";
    } else {
        let colorDivs = document.querySelectorAll(".color");
        for (const iterator of colorDivs) {
            iterator.style.backgroundColor = localStorage.bgColor;
        }
        document.getElementById("them-select").value = localStorage.bgColor;
    }
}

function changeColor(color) {
    let matches = document.querySelectorAll('.color');
    for (let i = 0; i < matches.length; i++) {
        matches[i].style.backgroundColor = color;
    }
}

function changenavColor(color) {
    let matches = document.querySelectorAll('.navcolor');
    for (let i = 0; i < matches.length; i++) {
        matches[i].style.backgroundColor = color;
    }
}


function myFunction() {
    let x = document.querySelector("#myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}