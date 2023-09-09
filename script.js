document.addEventListener("DOMContentLoaded", function () {
    const inputTemp = document.getElementById("inputTemp");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const result = document.getElementById("result");
    const convertBtn = document.getElementById("convertBtn");
    const container = document.querySelector(".container");
    const background = document.body; // Select the body for background image

    // Function to update background image
    function updateBackgroundImage(temp, unit) {
        let backgroundImage;

        if (unit === "celsius") {
            if (temp < 15) {
                backgroundImage = "images/cold.jpg"; // Set your cold background image here
            } else if (temp > 28) {
                backgroundImage = "images/sunny.jpg"; // Set your sunny background image here
            } else {
                backgroundImage = "images/pleasant.jpg"; // Set your pleasant background image here
            }
        } else if (unit === "fahrenheit") {
            if (temp < 59) {
                backgroundImage = "images/cold.jpg"; // Set your cold background image here
            } else if (temp > 86) {
                backgroundImage = "images/sunny.jpg"; // Set your sunny background image here
            } else {
                backgroundImage = "images/pleasant.jpg"; // Set your pleasant background image here
            }
        }

        background.style.backgroundImage = `url('${backgroundImage}')`;
    }

    // Function to convert temperature
    function convertTemperature() {
        const temp = parseFloat(inputTemp.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (isNaN(temp)) {
            alert("Please enter a valid temperature.");
            return;
        }

        let convertedTemp;
        if (from === "celsius" && to === "fahrenheit") {
            convertedTemp = (temp * 9/5) + 32;
        } else if (from === "fahrenheit" && to === "celsius") {
            convertedTemp = (temp - 32) * 5/9;
        } else {
            convertedTemp = temp;
        }

        result.value = convertedTemp.toFixed(2);

        // Update the background image when the temperature is converted
        updateBackgroundImage(temp, from);
    }

    // Attach the convertTemperature function to the button click event
    convertBtn.addEventListener("click", convertTemperature);
});
