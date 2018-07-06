
var earth = document.getElementById('topleft');
var wind = document.getElementById('topright');
var fire = document.getElementById('bottomleft');
var water = document.getElementById('bottomright');
var logo = document.getElementById('logo')

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
  logo.classList.add('hide');
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
  logo.classList.add('hide');
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
  logo.classList.add('hide');
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
  logo.classList.add('hide');
})


let baseURI = "https://galvanize-cors.herokuapp.com/http://api.musixmatch.com/ws/1.1/"

////////////////////////////////

let fireTracks = [];  // duplicate

document.getElementById("bottomleft").addEventListener("click", fireClick);

function fireClick(event){
  // let bl = document.querySelector("#bottomleft .cardContainer");
  let br = document.querySelector("#bottomright .cardContainer");
  let tl = document.querySelector("#topleft .cardContainer");
  let tr = document.querySelector("#topright .cardContainer");


  while (br.hasChildNodes()){ br.removeChild(br.lastChild);
  }

  while (tl.hasChildNodes()){ tl.removeChild(tl.lastChild);
  }

  while (tr.hasChildNodes()){ tr.removeChild(tr.lastChild);
  }


fetch(
  "https://galvanize-cors.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=19f997a50a7117eb12ee72fea784a8dc&q_track=Fire&page_size=10")
  .then(response => response.json())
  .then(result => {fireTracks = result.message.body.track_list; return result;})
  .then(result => {console.log(fireTracks); processData(fireTracks, "#bottomleft .cardContainer")});
}

//////////////////////////////////

let waterTracks = []; 

document.getElementById("bottomright").addEventListener("click", waterClick);



function waterClick(event){

  let bl = document.querySelector("#bottomleft .cardContainer");
  let tl = document.querySelector("#topleft .cardContainer");
  let tr = document.querySelector("#topright .cardContainer");


  while (bl.hasChildNodes()){ bl.removeChild(bl.lastChild);
  }

  while (tl.hasChildNodes()){ tl.removeChild(tl.lastChild);
  }

  while (tr.hasChildNodes()){ tr.removeChild(tr.lastChild);
  }

// console.log("In Water");

fetch(
  "https://galvanize-cors.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=19f997a50a7117eb12ee72fea784a8dc&q_track=Water&page_size=10")
  .then(response => response.json())
  .then(result => {waterTracks = result.message.body.track_list; return result;})
  .then(result => {console.log(waterTracks); processData(waterTracks,"#bottomright .cardContainer")});


}


function processData(trackList, location){
    trackList.forEach( element => createCard(element,location));
  }

function createCard(element, location){


    let card = document.createElement("div");
    card.classList.add("card");
    let track = document.createElement("h1");
    track.innerText = `Track Name:  ${element.track.track_name}`; 
    let artist = document.createElement("h3");
    artist.innerText = `Artist Name:  ${element.track.artist_name}`; 

    card.appendChild(track);
    card.appendChild(artist);
    

    // card.innerText = `Track Name:  ${element.track.track_name} \n Artist Name: ${element.track.artist_name} \n`;

    document.querySelector(location).appendChild(card);
  }

//http://api.musixmatch.com/ws/1.1/track.search?apikey=***&q_track=Dire%20straits%20Sultans%20of%20Swing&page_size=10
