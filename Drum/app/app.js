let numberOfButtons = document.querySelectorAll(".button").length;
  for (let i = 0; i < numberOfButtons; i++) {
  
  document.querySelectorAll(".button")[i]
    .addEventListener("click", function() {
      let buttonStyle = this.innerHTML;
      sound(buttonStyle);
  });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
  });

  // used a switch function to make the sounds work
  function sound(key) {
    switch (key) {
      case "a":
        let boom = new Audio("sounds/boom.wav");
        boom.play();
        break;
    
      case "s":
        let clap = new Audio("sounds/clap.wav");
        clap.play();
        break;
    
      case "d":
        let hihat = new Audio("sounds/hihat.wav");
        hihat.play();
        break;

      case "f":
        let kick = new Audio("sounds/kick.wav");
        kick.play();
        break;
        
      case "g":
        let openhat = new Audio("sounds/openhat.wav");
        openhat.play();
        break;
        
      case "h":
        let ride = new Audio("sounds/ride.wav");
        ride.play();
        break;
        
      case "j":
        let snare = new Audio("sounds/snare.wav");
        snare.play();
        break;

      case "k":
        let tink = new Audio("sounds/tink.wav");
        tink.play();
        break;
          
      case "l":
        let tom = new Audio("sounds/tom.wav");
        tom.play();
        break;

      default: console.log(key);
  }
}

function animation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("animation");
    
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 100);
  }