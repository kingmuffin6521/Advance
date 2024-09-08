x = 0;
y = 0;
screen_width = "0";
screen_height = "0";

apple = "";
speak_data = "";
to_number = "";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
loadImage(apple.png); 
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = number(content);

    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started Drawing Apple";
    draw_apple = "set";}
    else{document.getElementById("status").innerHTML = "The Speech Has Not Recognized a number";


    }
}

function setup() {
 canvas = createCanvas(screen_width, screen_height-150);
 Canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number + "Apples drawn";
    speak()    
    for(var i = 1;i < to_number;i++)
      x = Math.floor(math.random*700);
      y = Math.floor(math.random*400);
      image(apple, x, y, 50, 50);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
