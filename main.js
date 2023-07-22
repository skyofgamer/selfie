var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();
function start(){
    recognition.start();
    document.getElementById("textbox").innerHTML = "";
}

recognition.onresult = function(event){
  console.log(event);
  var content = event.results[0][0].transcript;
  console.log(content);
  document.getElementById("textbox").innerHTML = content;
  if(content == "Take my selfie."){
    speak();
    
  }
  
}

function speak(){
  var synth = window.speechSynthesis;
  speakData = "Taking your selfie in 5 seconds"; ;
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis);
  Webcam.attach(camra)
  setTimeout(function(){
    var synth = window.speechSynthesis;
  speakData = "5"; ;
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis);
  }, 1000);
  setTimeout(function(){
    var synth = window.speechSynthesis;
  speakData = "4"; ;
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis);
  }, 1000);
  setTimeout(function(){
    var synth = window.speechSynthesis;
  speakData = "3"; ;
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis);
  }, 1000);
  setTimeout(function(){
    var synth = window.speechSynthesis;
  speakData = "2"; ;
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis);
  }, 1000);
  setTimeout(function(){
    var synth = window.speechSynthesis;
  speakData = "1"; ;
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis);
  }, 1000);
  
  setTimeout(function(){
    take_Snapshot();
    save();
  }, 8500);
  
}
Webcam.set({
  width:360,
  height:250,
  image_format:'png',
  png_quality:100
})

var camra = document.getElementById("camera");

function take_Snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>";
  })
}

function save(){
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
link.href = image;
link.click();
}
