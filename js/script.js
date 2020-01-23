const CONTAINER = document.querySelector(".container");
console.dir(CONTAINER);

let newHtml = "";

const NAME = "<h4>" + actionGames;

for (i = 0; i < actionGames.length; i++) {
  /*   var name = "<h4>" + actionGames[i].name + "</h4>"; //ES5
    console.log(name); */

  const NAME = `<h4> + ${actionGames[i].name} + </h4>`; //ES6

  const DETAILS = `<div class ="card">
    <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
    <div class="details">
    <h4> + ${actionGames[i].name} + </h4></div>
    <div class="rating">${actionGames[i].rating}</div>
    <div class="released">${actionGames[i].released}</div>
    <div class="released">${actionGames[i].released}</div>
        </div>
    </div>
    `;

  newHtml += DETAILS;
}

CONTAINER.innerHTML = newHtml;
console.log(newHtml);

/*   console.log("actionGames:", actionGames[i].name);
  console.log("actionGames:", actionGames[i].released);
  console.log("actionGames:", actionGames[i].rating); */
