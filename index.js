
var earth = document.getElementById('topleft');
var wind = document.getElementById('topright');
var fire = document.getElementById('bottomleft');
var water = document.getElementById('bottomright');

earth.addEventListener("click", function(){
  earth.classList.remove('earth');
  earth.classList.remove('active');
  fire.classList.remove('fire');
  fire.classList.remove('active');
  wind.classList.remove('wind');
  wind.classList.remove('active');
  water.classList.remove('water');
  water.classList.remove('active');
  earth.classList.add('earth');
  earth.classList.add('active');
})

fire.addEventListener("click", function(){
  earth.classList.remove('earth');
  earth.classList.remove('active');
  fire.classList.remove('fire');
  fire.classList.remove('active');
  wind.classList.remove('wind');
  wind.classList.remove('active');
  water.classList.remove('water');
  water.classList.remove('active');
  fire.classList.add('fire');
  fire.classList.add('active');
})

water.addEventListener("click", function(){
  earth.classList.remove('earth');
  earth.classList.remove('active');
  fire.classList.remove('fire');
  fire.classList.remove('active');
  wind.classList.remove('wind');
  wind.classList.remove('active');
  water.classList.remove('water');
  water.classList.remove('active');
  water.classList.add('water');
  water.classList.add('active');
})

wind.addEventListener("click", function(){
  earth.classList.remove('earth');
  earth.classList.remove('active');
  fire.classList.remove('fire');
  fire.classList.remove('active');
  wind.classList.remove('wind');
  wind.classList.remove('active');
  water.classList.remove('water');
  water.classList.remove('active');
  wind.classList.add('wind');
  wind.classList.add('active');
})


let baseURI = "https://galvanize-cors.herokuapp.com/http://api.musixmatch.com/ws/1.1/"

////////////////////////////////

let fireTracks = [];  // duplicate

document.getElementById("bottomleft").addEventListener("click", fireClick);

function fireClick(event){
fetch(
  "https://galvanize-cors.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=19f997a50a7117eb12ee72fea784a8dc&q_track=Fire&page_size=10")
  .then(response => response.json())
  .then(result => {fireTracks = result.message.body.track_list; return result;})
  .then(result => {console.log(fireTracks); processData(fireTracks)});
}

//////////////////////////////////







function processData(trackList){
    trackList.forEach( element => createCard(element));
  }

function createCard(element){

    
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerText = `Track Name:  ${element.track.track_name} \n Artist Name: ${element.track.artist_name} \n`;

    document.getElementById("bottomleft").appendChild(card);
  }

//http://api.musixmatch.com/ws/1.1/track.search?apikey=***&q_track=Dire%20straits%20Sultans%20of%20Swing&page_size=10