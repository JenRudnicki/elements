
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
