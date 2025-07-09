const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

let arrayPosition = 0;
let locationsLength = 0;

let locations;
let data;

async function obtenerDatos(){
    const resp = await fetch('./data/locations.json');
    data = await resp.json();
    locations = Object.keys(data);
    locationsLength = locations.length;
    mostrarUbicaciones();
}

function mostrarUbicaciones(){
    const DocPlaceName = document.getElementById('DocPlaceName');
    const DocAddress = document.getElementById('DocAddress');
    const DocPhoneNumber = document.getElementById('DocPhoneNumber');
    const DocSchedule = document.getElementById('DocSchedule');
    const DocMap = document.getElementById('DocMap');

    const locationName = locations[arrayPosition];
    const locationData = data[locationName];

    let placeName = locationData["placeName"];
    let address = locationData["address"];
    let phoneNumber = locationData["phoneNumber"];
    let schedule = locationData["schedule"];
    let mapURLsrc = locationData["mapURLsrc"];

    DocPlaceName.innerHTML = placeName;
    DocAddress.innerHTML = address;
    DocPhoneNumber.innerHTML = phoneNumber;
    DocSchedule.innerHTML = schedule;
    DocMap.src = mapURLsrc;
}

const leftLocation = document.getElementById('leftLocation');
const rightLocation = document.getElementById('rightLocation');

leftLocation.addEventListener('click', ()=>{
    if (arrayPosition === 0){
        arrayPosition = locationsLength -1;
    } else {
        arrayPosition--;
    }
    mostrarUbicaciones();
})

rightLocation.addEventListener('click', ()=>{
    if (arrayPosition === locationsLength -1){
        arrayPosition = 0;
    } else {
        arrayPosition++;
    }
    mostrarUbicaciones();
})

obtenerDatos();
