// Updated JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const addInputButton = document.getElementById("addInput");
    const inputsContainer = document.getElementById("inputs");
    let inputCount = 1; // Initialize with one input field

    addInputButton.addEventListener("click", addInputField);
    calculateButton.addEventListener("click", calculateZScore);

    function addInputField() {
        inputCount++;
        const newInputContainer = document.createElement("div");
        newInputContainer.classList.add("input-container");
        newInputContainer.innerHTML = `
            <label for="input${inputCount}">Input ${inputCount}:</label>
            <input type="number" class="input value" id="input${inputCount}">
            <button class="remove-input" data-inputnum="${inputCount}">Remove</button>
        `;
        inputsContainer.appendChild(newInputContainer);

        // Add event listener to remove button
        const removeButtons = document.querySelectorAll(".remove-input");
        removeButtons.forEach(button => {
            button.addEventListener("click", removeInputField);
        });
    }

    function removeInputField(event) {
        const inputNum = event.target.getAttribute("data-inputnum");
        const inputToRemove = document.getElementById(`input${inputNum}`);
        const containerToRemove = inputToRemove.parentElement;
        containerToRemove.remove();
    }

    document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", calculateZScore);
});

function calculateZScore() {
    const valueInputs = document.querySelectorAll(".value");
    const numValueInputs = valueInputs.length;
    const inputs = [];
    // updated
    const zScores = []

    for (let i = 0; i < numValueInputs; i++) {
        const inputValue = parseFloat(valueInputs[i].value);
        if (!isNaN(inputValue)) {
            inputs.push(inputValue);
        }
    }

    // Calculate mean
    const n = inputs.length;
    const sum = inputs.reduce((acc, currentValue) => acc + currentValue, 0);
    const mean = sum / n;

    // Calculate standard deviation
    const squaredDifferences = inputs.map(x => Math.pow(x - mean, 2));
    const variance = squaredDifferences.reduce((acc, currentValue) => acc + currentValue, 0) / (n - 1);
    const standardDeviation = Math.sqrt(variance);

    // Display results
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML =` Mean: ${mean.toFixed(2)} <br> Standard Deviation: ${standardDeviation.toFixed(2)}`;

    //z score
    // const m = parseFloat(document.getElementById("mean").textContent);
    // const sd = parseFloat(document.getElementById("sd").textContent);

    for (let i = 0; i < numValueInputs; i++) {
        const inputValue = parseFloat(valueInputs[i].value);
        if (!isNaN(inputValue)) {
            const zScore = (inputValue-mean)/standardDeviation;
            zScores.push(zScore);
        }
    }
    const zScorecontainer = document.getElementById("zscore");

    let html="";
    for(let i = 0; i < zScores.length; i++){
        html+= `<div class="zsv"> ${zScores[i]} </div> `
        
    }
    zScorecontainer.innerHTML ="z.score : "+ html;

    // zScorecontainer.innerHTML = `z-scores :  ${zScores} , <br>  `



    
}
});