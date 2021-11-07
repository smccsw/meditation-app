const numberOfBreaths = document.querySelector('.breath-input');
const circleProgress = document.querySelector('.circle-progress');
const breathsText = document.querySelector('.breaths-text');
const instructions = document.querySelector('.instructions');
const start = document.querySelector('.start');
let breathsLeft = 3;

// Watching for selected breaths from user
numberOfBreaths.addEventListener("change", () => {
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
})

// Grow/shrink circle
const growCircle = () => {
    circleProgress.classList.add("circle-grow");
    setTimeout(() => {
        circleProgress.classList.remove("circle-grow");  
    }, 8000);
}

// Breathing instructions
const breathTextUpdate = () => {
    breathsLeft--;
    breathsText.innerText = breathsLeft;
    instructions.innerText = "Breathe In"
    setTimeout(() => {
        instructions.innerText = "Hold Breath";
        setTimeout(() => {
            instructions.innerText = "Exhale Breath Slowly"
        }, 4000);
    }, 4000);
};

// Breathing App Function
const breathingApp = () => {
    const breathingAnimation = setInterval(() => {
        if (breathsLeft === 0) {
            clearInterval(breathingAnimation);
            instructions.innerText = "Breathing session completed. Click 'Begin' to start another session";
            start.classList.remove("button-inactive");
            breathsLeft = numberOfBreaths.value;
            breathsText.innerText = breathsLeft
            return;
        }
        growCircle();
        breathTextUpdate();
    }, 12000)
}

// Start breathing
start.addEventListener("click", () => {
    start.classList.add("button-inactive");
    instructions.innerText = "Get relaxed and ready to begin breathing"
    setTimeout(() => {
        instructions.innerText = "Breathing is about to begin..."
        setTimeout(() => {
            breathingApp();
            growCircle();
            breathTextUpdate();
        }, 2000);
    }, 2000);
});

