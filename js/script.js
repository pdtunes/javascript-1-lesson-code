const container = document.querySelector(".container");

let newHTML = "";

for (let i = 0; i < actionGames.length; i++) {
  let ratingValue = "Not rated";

  if (actionGames[i].rating) {
    ratingValue = actionGames[i].rating;
  }

  const GENRES = actionGames[i].genres;
  const genreHTML = makeGenres(GENRES)

  const details = `<div class="card">
                        <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
                        <div class="details">
                            <h4 class="name">${actionGames[i].name}</h4>
                            <div class="rating">${ratingValue}</div>
                            Genre: ${genreHTML}
                        </div>
                    </div>`;
  newHTML += details;
}


function makeGenres(genreArray) {
  let genreHTML = "";
  for (let i = 0; i < genreArray.length; i++) {
    genreHTML += `<a class=""genre>${genreArray[i].name} </a>`;
   return genreHTML;
  }
}

container.innerHTML = newHTML;
