var speech = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
var ttsBlocks;
var currentBlock;
function startTTS(message) {
    if (message) {
        readTitle(message);
    } else {
        ttsBlocks = document.getElementsByClassName("tts-block");
        currentBlock = 0;
        readBlock(ttsBlocks[currentBlock]);
    }
}

function startTTSBlock(block) {
    ttsBlocks = [block];
    currentBlock = 0;
    readBlock(ttsBlocks[currentBlock]);
}

function readBlock(block) {
    let titleElement = block.getElementsByClassName("tts-title")[0];
    let titleBgnColor = titleElement.style.backgroundColor;
    titleElement.style.backgroundColor = 'yellow';
    readTitle(titleElement.innerHTML).then(result => {
        titleElement.style.backgroundColor = titleBgnColor;
        if (block.getElementsByClassName("tts-subtitle")[0]) {
            let subtitleElement = block.getElementsByClassName("tts-subtitle")[0];
            let subtitleBgnColor = subtitleElement.style.backgroundColor;
            subtitleElement.style.backgroundColor = 'yellow';
            readSubtitle(block.getElementsByClassName("tts-subtitle")[0].innerHTML).then(function () {
                subtitleElement.style.backgroundColor = subtitleBgnColor;
                if (block.getElementsByClassName("tts-text")[0]) {
                    let textElement = block.getElementsByClassName("tts-text")[0];
                    let textBgnColor = textElement.style.backgroundColor;
                    textElement.style.backgroundColor = 'yellow';
                    readText(block.getElementsByClassName("tts-text")[0].innerHTML).then(function () {
                        textElement.style.backgroundColor = textBgnColor;
                        currentBlock = currentBlock + 1;
                        if (currentBlock < ttsBlocks.length) {
                            setTimeout(function () {
                                readBlock(ttsBlocks[currentBlock]);
                            }, 1000);
                        }
                    });
                } else {
                    currentBlock = currentBlock + 1;
                    if (currentBlock < ttsBlocks.length) {
                        setTimeout(function () {
                            readBlock(ttsBlocks[currentBlock]);
                        }, 2000);
                    }
                }
            })
        } else if (block.getElementsByClassName("tts-text")[0]) {
            let textElement = block.getElementsByClassName("tts-text")[0];
            let textBgnColor = textElement.style.backgroundColor;
            textElement.style.backgroundColor = 'yellow';
            readText(block.getElementsByClassName("tts-text")[0].innerHTML).then(function () {
                textElement.style.backgroundColor = textBgnColor;
                currentBlock = currentBlock + 1;
                if (currentBlock < ttsBlocks.length) {
                    setTimeout(function () {
                        readBlock(ttsBlocks[currentBlock]);
                    }, 2000);
                }
            });
        } else {
            currentBlock = currentBlock + 1;
            if (currentBlock < ttsBlocks.length) {
                setTimeout(function () {
                    readBlock(ttsBlocks[currentBlock]);
                }, 2000);
            }
        }
    });
}

function readTitle(title) {
    return new Promise((resolve, reject) => {
        speech.voice = voices[10]; // Note: some voices don't support altering params
        speech.voiceURI = 'native';
        speech.volume = 1; // 0 to 1
        speech.rate = 1; // 0.1 to 10
        speech.pitch = 2; //0 to 2
        speech.text = title;
        speech.lang = 'en-US';
        speech.onend = function (event) {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
            resolve(true);
        };
        speechSynthesis.speak(speech);
    });
}

function readSubtitle(subtitle) {
    return new Promise((resolve, reject) => {
        speech.voice = voices[10]; // Note: some voices don't support altering params
        speech.voiceURI = 'native';
        speech.volume = 1; // 0 to 1
        speech.rate = 1; // 0.1 to 10
        speech.pitch = 1; //0 to 2
        speech.text = subtitle;
        speech.lang = 'en-US';
        speech.onend = function (event) {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
            resolve(true);
        };
        speechSynthesis.speak(speech);
    });
}

function readText(text) {
    return new Promise((resolve, reject) => {
        speech.voice = voices[10]; // Note: some voices don't support altering params
        speech.voiceURI = 'native';
        speech.volume = 1; // 0 to 1
        speech.rate = 1; // 0.1 to 10
        speech.pitch = 0; //0 to 2
        speech.text = text;
        speech.lang = 'en-US';
        speech.onend = function (event) {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
            resolve(true);
        };
        speechSynthesis.speak(speech);
    });
}