const voiceOptions=document.querySelector('#voiceOptions');
const volumeSlider=document.querySelector('#volumeSlider');
const rateSlider=document.querySelector('#rateSlider');
const pitchSlider=document.querySelector('#pitchSlider');
const button=document.querySelector('#btn');
const text=document.querySelector('#txt');
const voiceMap=[];
var voices=[];
function loadVoices(){
    voices=speechSynthesis.getVoices();
    
   voices.forEach((voice)=>{
       
       var options=document.createElement('option');
       options.value=voice.name;
       options.textContent=voice.name;
       voiceMap[voice.name]=name;
       voiceOptions.appendChild(options);
   })

}
window.speechSynthesis.onvoiceschanged=function(e){
    e.preventDefault();
    loadVoices();
}
function speak(e){
    
    var msg=new SpeechSynthesisUtterance();
    msg.volume=volumeSlider.value;
    msg.value=voiceMap[voiceOptions.value];
    msg.rate=rateSlider.value;
    msg.pitch=pitchSlider.value;
    msg.text=text.value;
    window.speechSynthesis.speak(msg);
}
