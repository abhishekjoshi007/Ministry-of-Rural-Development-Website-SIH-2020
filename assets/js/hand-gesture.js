var actionMapper = function (gesture) {
    console.log("gesture");
    if (gesture.isLeft)
        console.log("Hey, your hand is on the left side");
}

JSHG.init({
    "actionCallback": actionMapper,
    "learnDivId": "gestureShownHere",
    "gestureDivId": "gestureShownHere",
    "settings": {
        "cameraWidth": 500,
        "cameraHeight": 400,
        "gestureDisplayWidth": 100,
        "gestureDisplayHeight": 80
    },
});

JSHG.run();