var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var actions = ['login', 'refresh', 'reload', 'start tts'];
var actionGrammar = '#JSGF V1.0; grammar actions; public <action> = ' + actions.join(' | ') + ' ;';

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(actionGrammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var action = event.results[last][0].transcript;
    switch (action.toLowerCase().trim()) {
        case 'login':
            const loginButton = document.getElementById('account-label');
            loginButton.click();
            break;
        case 'close':
            const closeButton = document.getElementsByClassName("btn-outline-info waves-effect")[0];
            closeButton.click();
            break;
        case 'scroll':
            window.scrollBy(0, 100);
            break;
        case 'down':
            window.scrollBy(0, 100);
            break;
        case 'up':
            window.scrollBy(0, -100);
            break;
        case 'phone':
            const phoneButton = document.getElementsByClassName('firebaseui-idp-phone')[0];
            phoneButton.click();
            break;
        case 'reload':
        case 'refresh':
            location.reload();
            break;
        case 'start tds':
        case 'start dts':
        case 'start tts':
            document.getElementById('start-tts').click();
            break;
    }
    console.log('Result received: ' + action.toLowerCase());
    console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onnomatch = function (event) {
    console.log('I didnt recognise that color.');
    console.log(event);
}

recognition.onerror = function (event) {
    console.log('Error occurred in recognition: ' + event.error);
}

function startVoiceControl() {
    startTTS("Voice Assiststarted");
    recognition.start();
    console.log('Ready to receive a action command.');
}
