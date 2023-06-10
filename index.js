function handleClick(e) {
	
	var el, drumClass;
	if (!e) {
		e = window.event;
	}
	
	el = e.target || e.srcElement;	
	// console.log(el.className);

	
	if(el.classList.contains('w')) {
		
		var audio = new Audio('sounds/tom-1.mp3');
		audio.play();
		el.style.color = "cyan";
			el.classList.add('pressed');
			setTimeout(function() {
				el.style.color = ""; // Revert text color to default after 0.5 second
				el.classList.remove('pressed');
			}, 500);
		console.log("You clicked drum '" + el.innerHTML + "'");
		console.log(el);
		console.log(e);
		
		
	}	else if ( el.classList.contains('a')) {
		
			var audio = new Audio('sounds/tom-2.mp3');
			audio.play();
			el.style.color = "cyan";
			el.classList.add('pressed');
			setTimeout(function() {
				el.style.color = ""; // Revert text color to default after 0.5 second
				el.classList.remove('pressed');
			}, 500);
			console.log("You clicked drum '" + el.innerHTML + "'");
			console.log(el);
			console.log(e);
		
	}	else if ( el.classList.contains('s')) {
		
			var audio = new Audio('sounds/tom-3.mp3');
			audio.play();
			el.style.color = "cyan";
			el.classList.add('pressed');
			setTimeout(function() {
				el.style.color = ""; // Revert text color to default after 0.5 second
				el.classList.remove('pressed');
			}, 500);
			console.log("You clicked drum '" + el.innerHTML + "'");
			console.log(el);
			console.log(e);
	
	}	else if ( el.classList.contains('d')) {
		
			var audio = new Audio('sounds/tom-4.mp3');
			audio.play();
			el.style.color = "cyan";
			el.classList.add('pressed');
			setTimeout(function() {
				el.style.color = ""; // Revert text color to default after 0.5 second
				el.classList.remove('pressed');
			}, 500);
			console.log("You clicked drum '" + el.innerHTML + "'");
			console.log(el);
			console.log(e);
	
	}	else if ( el.classList.contains('j')) {

			var audio = new Audio('sounds/snare.mp3');
			audio.play();
			el.style.color = "cyan";
			el.classList.add('pressed');
			setTimeout(function() {
				el.style.color = ""; // Revert text color to default after 0.5 second
				el.classList.remove('pressed');
			}, 500);
			console.log("You clicked drum '" + el.innerHTML + "'");
			console.log(el);
			console.log(e);
	
	}	else if ( el.classList.contains('k')) {
		
			var audio = new Audio('sounds/crash.mp3');
			audio.play();
			el.style.color = "cyan";
			el.classList.add('pressed');
			setTimeout(function() {
				el.style.color = ""; // Revert text color to default after 0.5 second
				el.classList.remove('pressed');
			}, 500);
			console.log("You clicked drum '" + el.innerHTML + "'");
			console.log(el);
			console.log(e);
		
	}	else if ( el.classList.contains('l')) {
		
			var audio = new Audio('sounds/kick-bass.mp3');
			audio.play();
			el.style.color = "cyan";
			el.classList.add('pressed');
			setTimeout(function() {
				el.style.color = ""; // Revert text color to default after 0.5 second
				el.classList.remove('pressed');
			}, 500);
			console.log("You clicked drum '" + el.innerHTML + "'");
			console.log(el);
			console.log(e);
			
	}
	
}


function handleKeyPress(event) {
  var elKey;
  
  switch (event.key) {
    case 'w':
      elKey = document.querySelector('.w');
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      elKey = document.querySelector('.a');
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      elKey = document.querySelector('.s');
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      elKey = document.querySelector('.d');
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      elKey = document.querySelector('.j');
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      elKey = document.querySelector('.k');
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      elKey = document.querySelector('.l');
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      return; // Ignore other keys
  }

  if (elKey) {
    elKey.style.color = 'cyan';
    elKey.classList.add('pressed');
    setTimeout(function () {
      elKey.style.color = ''; // Revert text color to default after 0.5 second
      elKey.classList.remove('pressed');
    }, 500);
    console.log("You clicked drum '" + elKey.innerHTML + "'");
    console.log(elKey);
    console.log(event);
  }
}


 
var elBtn = document.querySelectorAll(".drum");

for (var i = 0; i < elBtn.length; i++) {
	if (elBtn[i].addEventListener) {
	
	elBtn[i].addEventListener('click', function(e) {
		handleClick(e);
	}, false);
	
}
}

// Set up event listener on the keydown event
	document.addEventListener("keydown", function(event) {
		handleKeyPress(event);
	}, false);