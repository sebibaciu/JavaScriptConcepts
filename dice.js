function rollDice(numSides, numDice) {
    let results = [];
    for (let i = 0; i < numDice; i++) {
      results.push(Math.floor(Math.random() * numSides) + 1);
    }
    return results;
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const numSides = Number(document.querySelector('#num-sides').value);
    const numDice = Number(document.querySelector('#num-dice').value);
    const results = rollDice(numSides, numDice);
    const resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = `You rolled ${numDice} ${numSides}-sided dice: ${results.join(', ')}`;
  });
  