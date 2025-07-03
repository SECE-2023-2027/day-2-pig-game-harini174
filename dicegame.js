const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const diceEl = document.getElementById('dice');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.getElementById('player--0');
const player1El = document.getElementById('player--1');

const btnRoll = document.getElementById('btn--roll');
const btnHold = document.getElementById('btn--hold');
const btnNew = document.getElementById('btn--new');

const resetGame = () => {
  scores[0] = scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = '0';
  score1El.textContent = '0';
  current0El.textContent = '0';
  current1El.textContent = '0';
  diceEl.style.display = 'none';

  player0El.classList.add('active');
  player1El.classList.remove('active');
  player0El.classList.remove('winner');
  player1El.classList.remove('winner');
};

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = '0';
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('active');
  player1El.classList.toggle('active');
};

btnRoll.addEventListener('click', () => {
  if (!playing) return;

  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice${dice}.jpeg`;//to show the dice image 
  diceEl.style.display = 'block';

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', () => {
  if (!playing) return;

  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    playing = false;
    diceEl.style.display = 'none';
    document.getElementById(`player--${activePlayer}`).classList.add('winner');
    document.getElementById(`player--${activePlayer}`).classList.remove('active');
    alert(`🎉 Player ${activePlayer + 1} Wins!`);
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', resetGame);
resetGame();
