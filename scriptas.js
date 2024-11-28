// Prediction equations for FEV1 and PEF based on age, height, and gender
function predictFEV1(height, age, gender) {
    if (gender === "male") {
        return (0.0576 * height - 0.026 * age - 4.34).toFixed(2); // Height in cm, age in years
    } else {
        return (0.0395 * height - 0.025 * age - 2.60).toFixed(2);
    }
}

function predictPEF(height, age, gender) {
    if (gender === "male") {
        return (height * 5.48 - age * 3.38 - 1.58).toFixed(2); // Height in cm, age in years
    } else {
        return (height * 4.66 - age * 2.93 - 1.78).toFixed(2);
    }
}

// Bronchodilator Analysis
document.getElementById('pftForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Input values
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const fev1Before = parseFloat(document.getElementById('fev1Before').value);
    const fev1After = parseFloat(document.getElementById('fev1After').value);
    const pefBefore = parseFloat(document.getElementById('pefBefore').value);
    const pefAfter = parseFloat(document.getElementById('pefAfter').value);

    // Predicted values
    const predictedFEV1 = predictFEV1(height, age, gender);
    const predictedPEF = predictPEF(height, age, gender);

    // Percentage improvements
    const fev1Improvement = ((fev1After - fev1Before) / fev1Before) * 100;
    const pefImprovement = ((pefAfter - pefBefore) / pefBefore) * 100;

    // Interpretation
    const fev1Percent = (fev1Before / predictedFEV1) * 100;
    const pefPercent = (pefBefore / predictedPEF) * 100;
    const hasAsthma = fev1Improvement >= 12 && pefImprovement >= 15;

    let result = `Predicted FEV1: ${predictedFEV1} L, Predicted PEF: ${predictedPEF} L/min\n`;
    result += `FEV1 is ${fev1Percent.toFixed(1)}% of predicted. PEF is ${pefPercent.toFixed(1)}% of predicted.\n`;
    result += hasAsthma
        ? "Bronchodilator response suggests asthma. Consult a healthcare provider."
        : "Bronchodilator response does not suggest asthma. Consult a healthcare provider if symptoms persist.";

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    resultDiv.style.color = hasAsthma ? "green" : "red";
});

// Raw Values Analysis
document.getElementById('rawForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Input values
    const gender = document.getElementById('genderRaw').value;
    const age = parseFloat(document.getElementById('ageRaw').value);
    const height = parseFloat(document.getElementById('heightRaw').value);
    const fev1 = parseFloat(document.getElementById('fev1Raw').value);
    const pef = parseFloat(document.getElementById('pefRaw').value);

    // Predicted values
    const predictedFEV1 = predictFEV1(height, age, gender);
    const predictedPEF = predictPEF(height, age, gender);

    // Percent of predicted
    const fev1Percent = (fev1 / predictedFEV1) * 100;
    const pefPercent = (pef / predictedPEF) * 100;

    // Interpretation
    let result = `Predicted FEV1: ${predictedFEV1} L, Predicted PEF: ${predictedPEF} L/min\n`;
    result += `FEV1 is ${fev1Percent.toFixed(1)}% of predicted. PEF is ${pefPercent.toFixed(1)}% of predicted.\n`;

    if (fev1Percent < 80 || pefPercent < 80) {
        result += "Results suggest possible lung function impairment. Consult a healthcare provider.";
    } else {
        result += "Results suggest normal lung function.";
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    resultDiv.style.color = fev1Percent >= 80 && pefPercent >= 80 ? "green" : "red";
});

// FeNO Analysis
document.getElementById('fenoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Input value
    const feno = parseFloat(document.getElementById('feno').value);

    // Interpretation based on ATS guidelines
    let result = `FeNO Level: ${feno} ppb\n`;
    if (feno < 25) {
        result += "Low FeNO: Unlikely to indicate eosinophilic inflammation.";
    } else if (feno >= 25 && feno <= 50) {
        result += "Intermediate FeNO: May suggest eosinophilic inflammation.";
    } else {
        result += "High FeNO: Suggests eosinophilic inflammation and potential asthma. Consult a healthcare provider.";
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    resultDiv.style.color = feno < 25 ? "green" : "red";
});
