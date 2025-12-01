function showFilmData(filmData)
{
    console.log(filmData);
    document.querySelector(".filmName").innerHTML = `${filmData.title} realeases in ${filmData.days_until} days!`
    document.querySelector(".filmPoster").src = filmData.poster_url
    document.querySelector(".overview").innerHTML = `<h3>About the movie:</h3> <br>${filmData.overview}`
    document.querySelector(".releaseDate").innerHTML = `<h3>Realease Data: ${filmData.release_date}</h3>`
    document.querySelector(".productionType").innerHTML = `<h3>Type: ${filmData.type}</h3>`

    fetch(`https://www.whenisthenextmcufilm.com/api/?date=${filmData.release_date}`).then(response => response.json()).then(nextFilmData => showNextFilmData(nextFilmData));
}

function showNextFilmData(nextFilmData)
{
    console.log(nextFilmData);
    document.querySelector(".nextFilmName").innerHTML = `${nextFilmData.title}`
    document.querySelector(".nextFilmPoster").src = nextFilmData.poster_url
    document.querySelector(".nextReleaseDate").innerHTML = `<h3>Realease Data: ${nextFilmData.release_date}</h3>`
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('https://www.whenisthenextmcufilm.com/api').then(response => response.json()).then(filmData => showFilmData(filmData));
})