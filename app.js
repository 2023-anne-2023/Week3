const thumbnails = document.querySelectorAll(".thumbnails img");
const displayImage = document.getElementById("displayImage");
let speech =new SpeechSynthesisUtterance();

thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {

    displayImage.src = thumb.src;
    displayImage.alt = thumb.alt;
    speech.text=displayImage.alt;
    window.speechSynthesis.speak(speech);
    //const utterThis = new SpeechSynthesisUtterance(speech);
    //utterThis.rate = rate.value;
    //synth.speak(utterThis);
    //play.addEventListener("click", speak);
    });
});
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
 
 }
 speech.text=log;
 window.speechSynthesis.speak(log);
