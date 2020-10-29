const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
// get the DOM elements that will serve us to display the time:

let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');
function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
function printSplit() {
let liTag = document.getElementById('splits')
let parent = document.getElementById('splits-container')
parent.appendChild(liTag)
liTag.innerHTML = printTime()
}
/* button.onclick = () => { // liga o evento à função
    let newListItem = document.createElement('li');
    newListItem.innerHTML = 'item number';
    itemList.appendChild(newListItem)
    console.log('clicking the buttin');*/
function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP"; 
    chronometer.startClick(printTime)
    btnLeft.setAttribute('class', 'btn stop');
  } else {
    btnLeft.innerHTML = "START";
    btnLeft.setAttribute('class', 'btn start');
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if ( btnRight.innerHTML === "RESET") {
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute('class', 'btn split');
    chronometer.resetClick()
  } else {
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute('class', 'btn reset');
    chronometer.splitClick()
  }
});