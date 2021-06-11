/*keyboard input*/
document.addEventListener('keydown', function(keyboard) {
  playDrums(event.key);
  animate(event.key.toLowerCase());
});

/*mouse input*/
document.querySelectorAll('.drum').forEach(function(mouse) {
  mouse.addEventListener("click", handleClick)
});

function handleClick() {
  let mouseClick = this.innerHTML;
  playDrums(mouseClick);
  animate(mouseClick);
}

/*sound generator based on input*/
function playDrums(key) {
  let sound = "";

  switch (key.toLowerCase()) {
    case "w":
      sound = "sounds/tom-1.mp3";
      break;
    case "a":
      sound = "sounds/tom-2.mp3";
      break;
    case "s":
      sound = "sounds/tom-3.mp3";
      break;
    case "d":
      sound = "sounds/tom-4.mp3";
      break;
    case "j":
      sound = "sounds/snare.mp3";
      break;
    case "k":
      sound = "sounds/crash.mp3";
      break;
    case "l":
      sound = "sounds/kick-bass.mp3";
      break;

    default:
      console.log(key);
  }
  if (sound.length > 0) {
    let audio = new Audio(sound);
    audio.play();
  }
}

/*animation when key is pressed, pressed defined in CSS*/
function animate(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
