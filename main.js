Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");
Webcam.attach(camera);
console.log(camera)
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id=" caputered_image" src="'+data_uri+'"/>'

    });
}

console.log('ml5 version:', ml5.version);
Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/k-dk8kmQ4/model.json',modelloaded)

function modelloaded(){
    console.log('model loaded!')
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction_1;
    speak_data_2="the second prediction is"+prediction_2;
var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2)
synth.speak(utterthis);
}







