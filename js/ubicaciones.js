const cardContainer = document.getElementById('cardContainer');
let data, locations;

async function tomarUbicaciones(){
    resp = await fetch("../data/locations.json");
    data = await resp.json();
    locations = Object.keys(data);
    for (let loc of locations){
        let current = data[loc];
        let placeName = current['placeName'];
        let address = current['address'];
        let phoneNumber = current['phoneNumber'];
        let schedule = current['schedule'];

        let locationCard = document.createElement('div');
        locationCard.className = "u-card"
        locationCard.setAttribute('locationame', loc)
        locationCard.innerHTML = `
        <figure class="card-figure">
            <img class="figure-img" src="../images/location-images/${loc}.webp" alt="${loc}">
        </figure>
        <h4 class="card-title">${placeName}</h4>
        <p class="card-text">${address}</p>
        <ul class="card-data">
            <li><i class="fa-solid fa-phone"></i><a href="#">${phoneNumber}</a></li>
            <li><i class="fa-solid fa-clock"></i>${schedule}</li>
        </ul>
        <button class="show-map-btn">Ver ubicación</button>
        `
        cardContainer.appendChild(locationCard);
    }

    activarButtons()
}
tomarUbicaciones()

const overlay = document.getElementById('overlay');
const escapeBtn = document.getElementById('escapeBtn');
const mapFrame = document.getElementById('mapFrame');

function activarButtons(){
    const showButtons = document.querySelectorAll('.show-map-btn');
    
    showButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        overlay.classList.remove('hidden');
        mapFrame.classList.remove('hidden');
        cardContainer.scrollIntoView({'behavior':"smooth"});
        let buttonParent = button.parentElement;
        let locName = buttonParent.getAttribute('locationame')

        let mapURL = data[locName]["mapURLsrc"];
        let name = data[locName]['placeName']
        const iframe = document.getElementById('iframeMap');
        const place = document.getElementById('placeName');
        iframe.src = mapURL;
        place.textContent = name;

    })
    })
}

overlay.addEventListener('click', ()=>{
    overlay.classList.add('hidden');
    mapFrame.classList.add('hidden');
})

escapeBtn.addEventListener('click', ()=>{
    overlay.classList.add('hidden');
    mapFrame.classList.add('hidden');
})

