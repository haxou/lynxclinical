// Prediction equations for FEV1 and PEF based on age and height
function predictFEV1(height, age, gender = "male") {
    // Using NHANES III equations (males and females differ slightly)
    if (gender === "male") {
        return (0.0576 * height - 0.026 * age - 4.34).toFixed(2); // Height in cm, age in years
    } else {
        return (0.0395 * height - 0.025 * age - 2.60).toFixed(2);
    }
}

function predictPEF(height, age, gender = "male") {
    // Using NHANES III equations (males and females differ slightly)
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
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const fev1Before = parseFloat(document.getElementById('fev1Before').value);
    const fev1After = parseFloat(document.getElementById('fev1After').value);
    const pefBefore = parseFloat(document.getElementById('pefBefore').value);
    const pefAfter = parseFloat(document.getElementById('pefAfter').value);

    // Predicted values
    const predictedFEV1 = predictFEV1(height, age);
    const predictedPEF = predictPEF(height, age);

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

// FeNO Analysis
document.getElementById('fenoForm').addEventListener('submit', function (event) {
    event.preventDefault();

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
