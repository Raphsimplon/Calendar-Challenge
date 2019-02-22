import { swapConsole } from "./swap-console";
import { EventLabel } from "./class/eventLabel"



// value = JSON.parse(window.localStorage.getItem('key'));
// console.log(value);


let button1 = document.querySelector('#buttonEvent');
let button2 = document.querySelector('#buttonLabel');
let buttonSubmitEvent = document.querySelector('#submitEvent');
let buttonSubmitLabel = document.querySelector('#submitLabel');


let affichageEvent = document.querySelector('#affichageEvent');
let affichageLabel = document.querySelector('#affichageLabel');

let labelId = 0;
let labelList = [];
let eventList = [];

button1.addEventListener('click', function (event) {
    swapConsole(affichageLabel, affichageEvent);
    let eventOptions = document.querySelector("#eventAssociatedLabel");
    eventOptions.innerHTML = "";

    for (let i = 0; i < labelList.length; i++) {
        let option = document.createElement("option");
        option.classList.add("labelOption");
        option.id = labelList[i].eventLabelId;
        option.textContent = labelList[i].description;
        eventOptions.appendChild(option);
    }
});

button2.addEventListener('click', function (event) {
    swapConsole(affichageEvent, affichageLabel);
});

buttonSubmitEvent.addEventListener('click', function (event) {
    event.preventDefault();
    eventList.push({
        start: document.querySelector('#eventStart').value,
        end: document.querySelector('#eventEnd').value,
        title: document.querySelector('#eventTitle').value,
        label: document.querySelector('#eventAssociatedLabel').value,
    });
});

buttonSubmitLabel.addEventListener('click', function (e) {
    e.preventDefault();

    if (document.querySelector('#eventLabelId').value === "Create a label") {
        labelList.push(new EventLabel(labelId,
            document.querySelector('#eventLabelDescription').value,
            document.querySelector('#eventLabelColor').value));
        // labelList.push(event);
        labelOptionDisplay(labelList);
        labelId += 1;
        // localStorage.setItem('stockageLabel', label[0]);
        // var val = JSON.stringify(label);
        // window.localStorage.setItem('key', val);

    }

    else {
        for (let i = 0; i < labelList.length; i++) {
            console.log(labelList[i].eventLabelId);
            console.log(selectedLabelValue);

            if (labelList[i].eventLabelId == selectedLabelValue) {
                console.log(labelList[i]);

                labelList[i].edit(document.querySelector('#eventLabelDescription').value, document.querySelector('#eventLabelColor').value)
                console.log(labelList[i]);

                labelOptionDisplay(labelList);
                break;
            }
        }
    }
    labelDisplay();
});


function labelOptionDisplay(list) {
    let labelOptions = document.querySelector("#eventLabelId");
    labelOptions.innerHTML = "";
    let option = document.createElement("option");
    option.textContent = "Create a label";
    labelOptions.appendChild(option);

    for (let i = 0; i < list.length; i++) {
        let option = document.createElement("option");
        option.classList.add("labelOption");
        option.id = labelList[i].eventLabelId;
        option.textContent = labelList[i].description;
        labelOptions.appendChild(option);
    }

}
function labelDisplay() {
    let labelDisplay = document.querySelector("#label-display")
    labelDisplay.innerHTML = "";
    for (let i = 0; i < labelList.length; i++) {
        let option = document.createElement("div")
        option.textContent = labelList[i].description;
        labelDisplay.appendChild(option);
    }

}