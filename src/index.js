
// When the user clicks on one of the games in the list, display all the details of that game
// in .game-details
const imgBox = document.querySelector('#detail-image');
const title = document.querySelector('#detail-title');
const score = document.querySelector('#detail-high-score');
const form = document.querySelector('form');
let clickedGame;

const displayDetails = (game) => {
  clickedGame = game;
  imgBox.src = game.image;
  title.textContent = game.name;
  score.textContent = game.high_score;
}

const renderGames = (games) => {
  const list = document.querySelector('.game-list');
  for(const game of games) {
    if(games.indexOf(game) === 0) {
      imgBox.src = game.image;
      title.textContent = game.name;
      score.textContent = game.high_score;
      title.addEventListener('click', () => {displayDetails(game)});      
      } else {
    const title = document.createElement('h5');
    title.textContent = `${game.name} (${game.manufacturer_name})`;
    list.append(title);
    title.addEventListener('click', () => {displayDetails(game)});
    }
  }
}

const getGames = () => {
  fetch(`http://localhost:3000/games`)
  .then(response => response.json())
  .then(data => renderGames(data))
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clickedGame.high_score = form['score-input'].value;
  score.textContent = clickedGame.high_score;
});

getGames();