const datePicker = document.getElementById("date-picker");
const saveBtn = document.getElementById("save-date-btn");
const startDate = document.getElementById("start-date");
const dayCount = document.getElementById("day-count");
const dateSetupSection = document.querySelector(".date-setup");
const counterSection = document.querySelector(".counter");
const resetBtn = document.getElementById("reset-date-btn");
const resetMsgContainer = document.querySelector(".reset-msg-container");
const confirmBtn = document.querySelector(".confirm-btn");
const cancelBtn = document.querySelector(".cancel-btn");

const today = new Date().toISOString().split("T")[0];
datePicker.max = today;

saveBtn.addEventListener("click", () => {
    if (!datePicker.value) return;
    localStorage.setItem("soberStartDate", datePicker.value);

    updateCounter(datePicker.value)
    dateSetupSection.classList.add('hidden');
    counterSection.classList.remove('hidden');

    counterSection.classList.add("glitch-animate");
    setTimeout(() => {
        counterSection.classList.remove("glitch-animate");
    }, 300);
});

resetBtn.addEventListener("click", () => {
    resetMsgContainer.classList.remove("hidden");
});

confirmBtn.addEventListener("click", () => {
    localStorage.removeItem("soberStartDate");
    datePicker.value = "";
    dateSetupSection.classList.remove('hidden');
    counterSection.classList.add('hidden');
    resetMsgContainer.classList.add('hidden');

    dateSetupSection.classList.add("glitch-animate");
    setTimeout(() => {
        dateSetupSection.classList.remove("glitch-animate");
    }, 300);
});

cancelBtn.addEventListener("click", () => {
    resetMsgContainer.classList.add("hidden");
});

function updateCounter(storedDate) {
    startDate.textContent = storedDate;
    const startDateInMs = new Date(storedDate);
    const dateDifference = Date.now() - startDateInMs;
    dayCount.textContent = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
}

const storedDate = localStorage.getItem("soberStartDate");

if (storedDate) {
    dateSetupSection.classList.add('hidden');
    counterSection.classList.remove('hidden');
    updateCounter(storedDate);
} else {
    dateSetupSection.classList.remove('hidden');
    counterSection.classList.add('hidden');
}