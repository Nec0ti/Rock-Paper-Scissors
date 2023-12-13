let score = JSON.parse(localStorage.getItem
  ('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

    updateScore();

  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */

  function playGame(playerMove = 'Scissors') {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissors'){
      if (computerMove === 'Rock') {
        result = 'You Lose';
      } else if (computerMove === 'Paper') {
        result = 'You Win';
      } else if (computerMove === 'Scissors'){
        result = 'Tie';
      }
    }

    if (playerMove === 'Paper'){
      if (computerMove === 'Rock') {
        result = 'You Win';
      } else if (computerMove === 'Paper') {
        result = 'Tie';
      } else if (computerMove === 'Scissors') {
        result = 'You Lose';
      }
    }

    if (playerMove === 'Rock'){
      if (computerMove === 'Rock') {
        result = 'Tie';
      } else if (computerMove === 'Paper') {
        result = 'You Lose';
      } else if (computerMove === 'Scissors') {
        result = 'You Win';
      }
    }

    if (result === 'You Win') {
      score.wins += 1;
    } else if (result === 'You Lose') {
      score.losses++;
    } else if (result === 'Tie'){
      score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result')
      .innerHTML = result;

    document.querySelector('.js-moves')
      .innerHTML = `You
      <img src="${playerMove}-emoji.png" class="move-icon">
      <img src="${computerMove}-emoji.png" class="move-icon">
      Computer`;
    
    console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
  }

  function updateScore() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNum = Math.random();

    let computerMove = '';

    if (randomNum >= 0 && randomNum < 1 / 3) {
      computerMove = 'Rock';
    } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
      computerMove = 'Paper';
    } else if (randomNum >= 2 / 3 && randomNum < 1){
      computerMove = 'Scissors';
    }

    console.log(computerMove);

    return computerMove;
  }