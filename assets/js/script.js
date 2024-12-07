const toggleSwitch = document.getElementById("modeToggle");
const modeText = document.getElementById("modeText");

console.log(toggleSwitch)

// Check if the user has a saved theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
    modeText.textContent = "Dark Mode";
}

// Listen for changes on the toggle
toggleSwitch.addEventListener("change", () => {
    console.log('test')

    if (toggleSwitch.checked) {
        document.body.classList.add("dark-mode");
        modeText.textContent = "Dark Mode";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        modeText.textContent = "Light Mode";
        localStorage.setItem("theme", "light");
    }
});
