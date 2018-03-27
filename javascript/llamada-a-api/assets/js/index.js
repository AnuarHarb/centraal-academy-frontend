const populate = document.querySelector('#populate');
//
// let holaApi = new XMLHttpRequest();
// holaApi.addEventListener('load', getData);
// holaApi.open('GET', 'https://rickandmortyapi.com/api/character/');
// holaApi.send();
//
// function getData() {
//   let data = JSON.parse(this.responseText);
//   console.log(data);
//   let characterInfo = data.results.map(function(character){
//     return `
//       <div class="character-name">
//         ${character.name}
//       </div>
//       <div class="character-image">
//         <img src="${character.image}">
//       </div>
//     `
//   })
//   populate.innerHTML = characterInfo;
// }

function getData() {
  fetch('https://rickandmortyapi.com/api/character/')
    .then((resp) => resp.json())
    .then(function(data) {
      let characterInfo = data.results.map(function(character){
        return `
          <div class="character-name">
            ${character.name}
          </div>
          <div class="character-image">
            <img src="${character.image}">
          </div>
        `
      }).join('');
      populate.innerHTML = characterInfo;
    })
    .catch(function() {
      alert('Error! peligro! Escapa!');
    })
}
getData();
