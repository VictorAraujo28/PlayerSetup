document.addEventListener('DOMContentLoaded', () => {
  const playerForm = document.getElementById('playerForm');
  const playerNamesContainer = document.getElementById('playerNamesContainer');

  // Function to add a player dynamically
  window.addPlayer = () => {
    const currentPlayerCount = playerNamesContainer.children.length + 1;
    if (currentPlayerCount <= 6) {
      const playerNameInput = document.createElement('input');
      playerNameInput.type = 'text';
      playerNameInput.placeholder = `Player ${currentPlayerCount} Name`;
      playerNameInput.name = `player${currentPlayerCount}`;
      playerNamesContainer.appendChild(playerNameInput);
    } else {
      alert('You can have a maximum of 6 players.');
    }
  };

  // Function to start the game
  window.startGame = () => {
    const playerNames = Array.from(playerForm.elements)
      .filter((element) => element.type === 'text')
      .map((element) => element.value.trim());

    // Check if all player names are entered
    if (playerNames.some((name) => name === '')) {
      alert('Please enter names for all players.');
    } else {
      // You can proceed to the next page or perform other actions
      // For now, let's log the player names to the console
      console.log('Player Names:', playerNames);
    }
  };
});
