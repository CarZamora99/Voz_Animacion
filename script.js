function mostrar() {
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
          document.getElementById("imagen").src = reader.result;
          const imagen = document.getElementById("imagen");

      }
  }

}

const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");
const info = document.querySelector(".info");

// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "es-MX";

  searchForm.insertAdjacentHTML("beforeend", '<button type="button" ><i class="fas fa-microphone"></i></button>');
  searchFormInput.style.paddingRight = "50px";

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.firstElementChild;

  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if(micIcon.classList.contains("fa-microphone")) { // Start Voice Recognition
      recognition.start(); // First time you have to allow access to mic!
    }
    else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    //ayuda
    if(transcript.toLowerCase().trim()==="ayuda del sitio") {
      window.open('ayuda.html', '__blank');
    }
    else if(!searchFormInput.value) {
      searchFormInput.value = transcript;
    }
    else {
      if(transcript.toLowerCase().trim()==="derecha") {   
    //Animacion 1
        var t1 = just.animate({
        targets: ".ball",
        duration: 500,
        web: {
            opacity: [0, 1],
            transform: ["translateX(500px)", "translateX(0)"]
        }
    });
    t1.play();
    just.tools.player(t1);
      }
      else if(transcript.toLowerCase().trim()==="salir del sitio") {
             
      var mensaje;
      var opcion = confirm("¿Seguro que quieres salir?");
     
      if (opcion == true) { 
         window.close();     
         recognition.stop();
    } else {
        mensaje = "No";
    }

      }
      else if(transcript.toLowerCase().trim()==="parpadeo") {
    //Animacion 2
    var t1 = just.animate({
        targets: ".ball",
        duration: 1000,
        web: {
            opacity: [0, 1]
        }
    });
    t1.play();
    just.tools.player(t1);
 
      }
      else if(transcript.toLowerCase().trim()==="salta") {
            //Animacion 3
    var t1 = just.animate({
        targets: ".ball",
        delay: -500,
        duration: 800,
        easing: "ease-in-out",
        web: {
            y: [0, -30, 5, 0],
            scale: [0.6, { offset: 0.6, value: 1 }, 1],
            filter: {
               value: ["grayscale(.95)", "grayscale(0)"],
               easing: "ease"
            }
        }
    });
    t1.play({ repeat: Infinity, alternate: true });
    just.tools.player(t1);
      }
      else if(transcript.toLowerCase().trim()==="respiración") {
                   //Animacion 4
    var t1 = just.animate({
        targets: ".ball",
        duration: 6000,
        easing: "ease-in-out",
        web: {
            scale: [1, 1.15, 1]
        }
    });
    t1.play({ repeat: Infinity, alternate: true });
    just.tools.player(t1);
      }
      else if(transcript.toLowerCase().trim()==="arriba") {
                           //Animacion 5
    var t1 = just.animate({
        targets: ".ball",
        duration: 500,
        easing: "ease-in-out",
        web: {
            opacity: [0, 1],
            transform: ["translateY(-100px)", "translateY(0)"]
        }
    });
    t1.play();
    just.tools.player(t1);

      }
      else if(transcript.toLowerCase().trim()==="izquierda") {
                           //Animacion 6
                           var t1 = just.animate({
                            targets: ".ball",
                            duration: 500,
                            web: {
                                opacity: [0, 1],
                                transform: ["translateX(-100px)", "translateX(0)"]
                            }
                        });
                        t1.play();
                        just.tools.player(t1);
                    
      }
      else if(transcript.toLowerCase().trim()==="abajo") {
                                   //Animacion 7
                                   var t1 = just.animate({
                                    targets: ".ball",
                                    duration: 500,
                                    web: {
                                        opacity: [1, 0],
                                        transform: ["translateY(0)", "translateY(100px)"]
                                    }
                                });
                                t1.play();
                                just.tools.player(t1);
      }
      else if(transcript.toLowerCase().trim()==="gira") {
                                   //Animacion 8
                                   var t1 = just.animate({
                                    targets: ".ball",
                                    duration: 2000,
                                    web: {
                                        rotateZ: [-400, 0]
                                    }
                                });
                                t1.play();
                                just.tools.player(t1);
      }
      else if(transcript.toLowerCase().trim()==="gira crece") {
                                           //Animacion 9
                                           var t1 = just.animate({
                                            targets: ".ball",
                                            easing: "ease-in-out",
                                            duration: 2000,
                                            web: {
                                                rotateZ: [-400, 0],
                                                scale: [3, 1.5, 3]
                                            }
                                        });
                                        t1.play({ repeat: Infinity, alternate: true });
                                        just.tools.player(t1);
      }
      else if(transcript.toLowerCase().trim()==="mortal") {
       //Animacion 10
        var t1 = just.animate({
            targets: ".ball",
            delay: -500,
            duration: 800,
            easing: "ease-in-out",
            web: {
                y: [0, -30, 5, 0],
                rotateZ: [-400, 0],
                scale: [0.6, { offset: 0.6, value: 1 }, 1],
                filter: {
                   value: ["grayscale(.95)", "grayscale(0)"],
                   easing: "ease"
                }
            }
        });
        t1.play({ repeat: Infinity, alternate: true });
        just.tools.player(t1);
      }
      else {
        searchFormInput.value = transcript;
      }
    }
    // searchFormInput.value = transcript;
    // searchFormInput.focus();
    // setTimeout(() => {
    //   searchForm.submit();
    // }, 500);
 
    
  }
  
  
}
else {
  console.log("Your Browser does not support speech Recognition");
  info.textContent = "Your Browser does not support Speech Recognition";
}
