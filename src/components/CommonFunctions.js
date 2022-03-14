export function initialAudio(audioList) {
    let allkeys = Object.keys(audioList)
    for (let i = 0; i < allkeys.length; i++) {
        audioList[allkeys[i]].play()
            .catch(error => {
            })
        audioList[allkeys[i]].pause()
    }
}


export function getMaskStyle(info) {

    let maskStyle = {
        position: "absolute", width: info.scale + "%",
        height: info.scale + "%"
        , left: -(info.scale - 100) / 2 + "%",
        bottom: -(info.scale - 100) / 2 + "%",
        WebkitMaskImage: 'url("' + prePathUrl() + 'images/' + info.url + '.svg")',
        WebkitMaskRepeat: "no-repeat",

        backgroundColor: "white"
    }

    return maskStyle;
}

export function generateStandardNum(num) {
    if (num < 10)
        return "0" + num;
    else if (num < 100)
        return "" + num;
    else
        return num;
}

let sharePrePath = ''

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    sharePrePath = './'
} else {
    // production code
    sharePrePath = './'
}

export const prePathUrl = () => sharePrePath;



let repeatAudio, repeatInterval, repeartTimer;


export function setRepeatAudio(audio) {
    repeatAudio = audio;
}

export function startRepeatAudio(pastTime = 3000, intervalTime = 7000) {

    clearTimeout(repeartTimer)
    clearInterval(repeatInterval)

    repeartTimer = setTimeout(() => {
        repeatInterval = setInterval(() => {
            repeatAudio.play();
        }, intervalTime);
    }, pastTime);
}

export function stopRepeatAudio() {

    repeatAudio.pause();
    repeatAudio.currentTime = 0;

    clearTimeout(repeartTimer)
    clearInterval(repeatInterval)

}