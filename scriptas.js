document.getElementById('pftForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Input values
    const fev1Before = parseFloat(document.getElementById('fev1Before').value);
    const fev1After = parseFloat(document.getElementById('fev1After').value);
    const pefBefore = parseFloat(document.getElementById('pefBefore').value);
    const pefAfter = parseFloat(document.getElementById('pefAfter').value);

    // Calculate percentage improvements
    const fev1Improvement = ((fev1After - fev1Before) / fev1Before) * 100;
    const pefImprovement = ((pefAfter - pefBefore) / pefBefore) * 100;

    // Asthma diagnostic criteria
    const hasAsthma = fev1Improvement >= 12 && pefImprovement >= 15;

    // Display result
    const resultDiv = document.getElementById('result');
    if (hasAsthma) {
        resultDiv.textContent = "The results indicate a likelihood of asthma. Consult a healthcare provider.";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "The results do not indicate asthma. However, consult a healthcare provider for a proper diagnosis.";
        resultDiv.style.color = "red";
    }
});
