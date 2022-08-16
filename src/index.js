
// When the user clicks on one of the games in the list, display all the details of that game
// in .game-details

const displayDetails = (image, name, manufacturer, highScore) => {
  const details = document.querySelector('.game-details');
  details.textContent = '';
  const img = document.createElement('img');
  img.src = image;

  const nameP = document.createElement('p');
  nameP.textContent = name;

  const mP = document.createElement('p');
  mP.textContent = manufacturer;

  const hP = document.createElement('p');
  hP.textContent = highScore;
  details.append(img, nameP, mP, hP);
}

const renderGames = (games) => {
  const list = document.querySelector('.game-list');
  
  for(const game of games) {
    if(games.indexOf(game) === 0) {
      const imgBox = document.querySelector('#detail-image');
      imgBox.src = game.image;

      const title = document.querySelector('#detail-title');
      title.textContent = game.name;

      const score = document.querySelector('#detail-high-score');
      score.textContent = game.high_score;
      
      title.addEventListener('click', () => {displayDetails(game.image, game.name, 
        game.manufacturer_name, game.high_score)});      
      } else {
    const title = document.createElement('h5');
    title.textContent = `${game.name} (${game.manufacturer_name})`;
    list.append(title);
    title.addEventListener('click', () => {displayDetails(game.image, game.name, 
      game.manufacturer_name, game.high_score)});
    }
  }
}

const getGames = () => {
  fetch(`http://localhost:3000/games`)
  .then(response => response.json())
  .then(data => renderGames(data))
}



getGames();