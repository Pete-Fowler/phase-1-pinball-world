
const renderGames = (games) => {
  const list = document.querySelector('.game-list');
  for(const game of games) {
    const title = document.createElement('h5');
    title.textContent = `${game.name} (${game.manfacturer_name})`;
    list.append(title);
    // console.log(game);
  }

}

const getGames = () => {
  fetch(`http://localhost:3000/games`)
  .then(response => response.json())
  .then(data => renderGames(data))
}

getGames();