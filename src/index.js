
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
      
      } else {
    const title = document.createElement('h5');
    title.textContent = `${game.name} (${game.manufacturer_name})`;
    list.append(title);
    }
  }
}

const getGames = () => {
  fetch(`http://localhost:3000/games`)
  .then(response => response.json())
  .then(data => renderGames(data))
}

getGames();