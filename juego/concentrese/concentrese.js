let pair_1 = null;
let pair_2 = null;
let matchs = 0;
let attempts = 0;
let on_game = false;
let timerInterval;
let limit_in_minutes = 3;
let limit_in_seconds = limit_in_minutes * 60;
let timer_element = document.getElementById('time');
let startElement = document.querySelector('.start') //---
let attemptsElement = document.getElementById('attempts')
let matchsElement = document.getElementById('matchs')
//Capturar el click de cualquier tarjeta
function flipCard(e){
    if(e.classList.contains('match') || !on_game){
        //Ya ha sido descubierta la tarjeta
        return false
    }
    let name = e.dataset.name;
    let id = e.id;
    //Validar si ya hay una tarjeta volteada
    if(!pair_1){
        pair_1 = id;
    }else{
       pair_2 = id; 
    }
   
    if(pair_1 && pair_2){
        attempts++;
        attemptsElement.innerText = attempts;
        e.querySelector('.content').classList.add("flip") //querySelectorAll('.content')[0]
        if(document.getElementById(pair_1).dataset.name == document.getElementById(pair_2).dataset.name){
            match()
        }else{
            setTimeout(noCoincidence, 900);

        }
    }else{
        e.querySelector('.content').classList.add("flip") //--
    }
    
}

function start(){
    on_game = true;
    matchs = 0;
    attempts = 0;
    matchsElement.innerText = '0';
    attemptsElement.innerText = '0';
    startElement.style.display = "none";
    limit_in_seconds = limit_in_minutes * 60;
    document.querySelectorAll('.match').forEach(el => el.classList.remove('match'))
    document.querySelectorAll('.flip').forEach(el => el.classList.remove('flip'))
    //Iniciar el juego, ponemos imagenes en orden aleatorio en las tarjetas
    let images = ['cerebro','creatividad','et','gato','hipopotamo','pastel','pez','plumas'];
    //Se llena un array con el doble de las imagenes
    let dataImages = images.concat(images);
    //Se cambia a un orden aleatorio
    dataImages = dataImages.sort((a, b) => 0.5 - Math.random());
    //Recorremos todas las imagenes para ponerlas en las tarjetas
    dataImages.forEach((value , index) => {
      let id = index + 1;
      let card = document.getElementById('card_'+id);
      card.dataset.name = value;
      card.getElementsByTagName('img')[0].src = 'img/'+value+'.png';
    });

    timerInterval = setInterval(startTimer, 1000);
    
}
//Pareja coincide
function match(){
  matchs++;
  document.getElementById(pair_1).classList.add("match");
  document.getElementById(pair_2).classList.add("match");
  pair_1 = null;
  pair_2 = null;
  if(matchs == 8){
    clearInterval(timerInterval);
    alert('Felicidades has ganado!')
  }
  matchsElement.innerText = matchs;
  
}
//No hay coincidencia, resetear las tarjetas
function noCoincidence(){
  document.getElementById(pair_1).querySelectorAll('.content')[0].classList.remove("flip");
  document.getElementById(pair_2).querySelectorAll('.content')[0].classList.remove("flip");
  pair_1 = null;
  pair_2 = null;
}
//Cronómetro
function startTimer() {
  limit_in_seconds--;
  var minutes = Math.floor(limit_in_seconds / 60);
  var seconds = limit_in_seconds % 60;

  if (limit_in_seconds < 0) {
    timer_element.textContent = '00:00';
    on_game = false;
    startElement.getElementsByTagName('p')[0].innerText = 'Juego terminado, no pudiste completarlo :('
    startElement.style.display = 'block';
    clearInterval(timerInterval);
    return;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  
  timer_element.textContent = minutes + ':' + seconds;
}
