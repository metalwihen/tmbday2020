
// global variable for count
var total = 6;
var current = 1;

// Setup listeners
var incantationInput = document.getElementById("incantation-input");
incantationInput.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {    	
    	if(isCorrect(current,incantationInput.value.trim())) {    	
    		callOnCorrectIncantiation();
        } else {
        	callOnWrongIncantiation();
        }
        incantationInput.value = '';
  }
});

function isCorrect(index, typedIncantation){
	return (index == 1 && typedIncantation.toLowerCase() == "relworg a ton reknoh")
			|| (index == 2 && typedIncantation.toLowerCase() == "elkcispop a em ekam")
			|| (index == 3 && typedIncantation.toLowerCase() == "emag a yalp su tel")
			|| (index == 4 && typedIncantation.toLowerCase() == "muy muy")
			|| (index == 5 && typedIncantation.toLowerCase() == "oop oop ihc ihc")
			|| (index == 6 && typedIncantation.toLowerCase() == "kooh baj baj");
}

function callOnCorrectIncantiation(){
	if(current >= 1 && current < total){		
		playCorrect();    			    	
    	showFallingItem(current);
    	hideClue(current);
		current+=1;				
    	showClue(current);		    			    	
	} else if (current == total){
		playCorrect();
		showFallingItem(current);
		hideClue(current);	
		showCatGetsBirdie();					
	} else {
		// do nothing
	}
}

function callOnWrongIncantiation(){
	playWrong();
	showSnackBar()
}

function showClue(currentItem) {
	var id = getClueId(currentItem);			
	document.getElementById(id).classList.remove("gone")
	console.log(id)
}

function hideClue(currentItem){
	var id = getClueId(currentItem);
	document.getElementById(id).classList.add("gone");
}

function getClueId(index) {
	return "clue-item-"+index;
}

function getFallingItemId(index) {
	return "fall-item-"+index;
}

function showFallingItem(currentItem) {
  var id = getFallingItemId(currentItem);
  console.log(id);
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).classList.add("bounceInDown");
  document.getElementById(id).classList.add("animated");
}

function playCorrect() {		  
  var soundplayer = new Audio("assets/audio/correct-abracadabra.mp3");		  
  soundplayer.play()
}		 

function playWrong() {		  
  var soundplayer = new Audio("assets/audio/wrong-cat-hiss.mp3");
  soundplayer.play()
}		 

function showSnackBar(){
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
  
function showCatGetsBirdie(){
	document.getElementById("birdie").classList.add("gone");
	document.getElementById("kitty-want").classList.add("gone");

  	document.getElementById("intro-section").classList.add("gone");
  	document.getElementById("clue-section").classList.add("gone");

	document.getElementById("kitty-get").classList.remove("gone");
	document.getElementById("kitty-get").classList.add("tada");
  	document.getElementById("kitty-get").classList.add("animated");

  	document.getElementById("winner-msg").classList.remove("gone");		  	
}