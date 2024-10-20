document.getElementById('calculateBtn').addEventListener('click', function() {
    let basePrice = 100;

    const educationCoeff = parseFloat(document.getElementById('education').value);
    const netWorthCoeff = parseFloat(document.getElementById('netWorth').value);
    const casteBonus = parseFloat(document.getElementById('caste').value);

    let skillsBonus = 0;
    if (document.getElementById('skillInstrument').checked) {
        skillsBonus += parseFloat(document.getElementById('skillInstrument').value);
    }
    if (document.getElementById('skillCook').checked) {
        skillsBonus += parseFloat(document.getElementById('skillCook').value);
    }
    if (document.getElementById('skillEasygoing').checked) {
        skillsBonus += parseFloat(document.getElementById('skillEasygoing').value);
    }
    if (document.getElementById('skillSing').checked) {
        skillsBonus += parseFloat(document.getElementById('skillSing').value);
    }

    const ageCoeff = parseFloat(document.querySelector('input[name="age"]:checked').value);

    let reputationCoeff = 1;
    let reputationPenalty = 0;
    if (document.getElementById('gossipParent').checked) {
        reputationCoeff *= parseFloat(document.getElementById('gossipParent').value);
    }
    if (document.getElementById('gossipCharacter').checked) {
        reputationCoeff *= parseFloat(document.getElementById('gossipCharacter').value);
    }
    if (document.getElementById('gossipGeneral').checked) {
        reputationPenalty += parseFloat(document.getElementById('gossipGeneral').value);
    }

    let finalPrice = basePrice * educationCoeff * netWorthCoeff * ageCoeff * reputationCoeff + casteBonus + skillsBonus + reputationPenalty;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `The final dowry price is: <span>${finalPrice.toFixed(2)}$</span>`;
});
