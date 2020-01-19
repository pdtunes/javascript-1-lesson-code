// we declare both these variables outside the for loop
const container = document.querySelector(".container");
// newHTML's value will change so we use let to declare it
let newHTML = "";

for (let i = 0; i < actionGames.length; i++) {
    // create a default value for the rating
    let ratingValue = "Not rated";

    // if the object contains a rating property
    // set the ratingValue equal to the rating property
    if (actionGames[i].rating) {
        ratingValue = actionGames[i].rating;
    }

    // assign the genres property in each game object to a variable
    const genres = actionGames[i].genres;

    // assign the return value of the makeGenres function (the HTML the function creates) to a variable
    const genresHTML = makeGenres(genres);

    // assign the platforms property in each game object to a variable
    const platforms = actionGames[i].platforms;

    // assign the return value of the makePlatforms function to a variable
    const platformsHTML = makePlatforms(platforms);

    // each time the loop is executed, assign the details variable a template literal
    // this is a string with embedded variables
    const details = `<div class="card">
                        <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
                        <div class="details">
                            <h4 class="name">${actionGames[i].name}</h4>
                            <div class="rating">${ratingValue}</div>
                            ${genresHTML}
                            <div class="platforms">${platformsHTML}</div>
                        </div>
                    </div>`;
    // add the value of details to the existing value of newHTML
    newHTML += details;
}

// set container's innerHTML property to be the HTML that was created in the loop
container.innerHTML = newHTML;

function makeGenres(genreArray) {
    // variable that will hold the HTML string we create in the loop
    let genreHTML = "";

    for (let i = 0; i < genreArray.length; i++) {
        // add the new HTML to the existing HTML stored in genreHTML
        genreHTML += `<a class="genre">${genreArray[i].name}</a>`;
    }

    // return the HTML that was created
    return genreHTML;
}

function makePlatforms(platformsArray) {
    // variable that will hold the HTML string we create in the loop
    let platformsHTML = "";

    for (let i = 0; i < platformsArray.length; i++) {
        // add the new HTML to the existing HTML stored in platformsHTML
        platformsHTML += `<span>${platformsArray[i].platform.name}</span>`;
    }

    // return the HTML that was created
    return platformsHTML;
}
