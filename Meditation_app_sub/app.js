//https://github.com/johnkomarnicki/meditation-app?ref=morioh.com&utm_source=morioh.com
//https://morioh.com/p/ad7db801b406?f=5c21fb01c16e2556b555ab32&fbclid=IwAR3-KixGSdEC-lpPpW03BNVN5JsTOlI4F_0fnceq8xALnxkvLZwwbDcTXQg

//segment 1 - user can select option for number of breaths
const circleProgress = document.querySelector(".circle-progress");
//equal to value that user select
const numberOfBreaths = document.querySelector(".breaths-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
// to update number of breaths left
let breathsLeft = 3;

//watching for selected num breaths from user

numberOfBreaths.addEventListener("change", () => {
    //update after user select
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
});


// Grow/Shrink Circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  /*to trigger next step after 4s*/
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
  /*8000 = 8s */
};

// Breathing Instructions
const breathTextUpdate = () => {
  //we want the value of breath decrease by one after one process */
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  //instruction will change every settime which is 4s per timeout */
  instructions.innerText = "Breath in";
  setTimeout(() => {
    instructions.innerText = "Hold Breath";
    setTimeout(() => {
      instructions.innerText = "Exhale Breath Slowly";
    }, 4000);
  }, 4000);
};

// Breathing App Function
const breathingApp = () => {
  //looping this every 12s
  const breathingAnimtaion = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimtaion);
      //will took place after first progress with other instruction 
      instructions.innerText = "Breathing session completed. Click 'Begin' to start another session!";
      start.classList.remove("button-inactive");
      //to show num of breaths that initial value before start
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

// Start Breathing
start.addEventListener("click", () => {
  //instruction before start, to make sure user ready
  start.classList.add("button-inactive");
  //instruction will appear 2 seconds
  instructions.innerText = "Get relaxed, and ready to begin breathing";
  setTimeout(() => {
    //instruction will appear 2 seconds
    instructions.innerText = "Breathing is about to begin...";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 2000);
  }, 2000);
});