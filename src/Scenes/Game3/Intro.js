import React, { useContext, useState, useEffect, useRef } from 'react';
import "../../stylesheets/styles.css";

import Lottie from "react-lottie-segments";
import loadAnimation from '../../utils/loadAnimation'
import { UserContext } from '../../components/BaseShot';
import { prePathUrl, initialAudio , startRepeatAudio} from '../../components/CommonFunctions';
import GamePanel from "./GamePanel"
import Review from "./Review"
import loadSound from '../../utils/loadSound';
var isGameStarted = false;

let animationList = []
new loadAnimation('main/Chick_1.json').then(result => {
    animationList[1] = result;
}, () => { });

new loadAnimation('main/Chicken2_1.json').then(result => {
    animationList[0] = result;
}, () => { });

let timerList = []

const BaseScene = React.forwardRef(({ nextFunc, _geo, _baseGeo, showMusicBtn }, ref) => {

    const audioList = useContext(UserContext)
    const [isIntroHide, setIntroHide] = useState(false)
    const [isGameFinished, setGameFinish] = useState(false)
    const [isGameRenderStart, setGameRenderStart] = useState(false)

    const playBtnRef = useRef();
    const gamePanelRef = useRef();
    // const [isShow, setShow] = useState(false)

    useEffect(() => {

        audioList.titleAudio = loadSound('SB_53_Audio_07');
        audioList.bodyAudio = loadSound('SB_53_Audio_08');
        audioList.subBodyAudio = loadSound('SB_53_Audio_12');

        setTimeout(() => {
            audioList.titleAudio.play();
        }, 1200);

        setTimeout(() => {
            playBtnRef.current.className = 'introText'
            setGameRenderStart(true)
        }, 1500);

        setTimeout(() => {
            playBtnRef.current.className = 'commonButton'
            playBtnRef.current.style.pointerEvents = ''
        }, 3000);


        playBtnRef.current.className = 'hide'

        return () => {
            audioList.titleAudio.pause();
            audioList.titleAudio.currentTime = 0;

        }
    }, [])

    function finishGame() {
        gamePanelRef.current.style.display = 'none'
        setGameFinish(true)

        setGameRenderStart(false)
    }

    function clickFunc() {
        showMusicBtn();

        audioList.titleAudio.pause();
        audioList.titleAudio.currentTime = 0;

        if (!isGameStarted)
            new initialAudio(audioList)

        if (!isGameStarted) {
            setTimeout(() => {
                isGameStarted = true;
            }, 500);
        }

        setTimeout(() => {
            audioList.backAudio.play().catch(error => {
            });

            gamePanelRef.current.style.display = 'inline-block'
            gamePanelRef.current.style.transition = '1s'
            gamePanelRef.current.style.opacity = 1
            setTimeout(() => {

                timerList[0] = setTimeout(() => {
                    audioList.bodyAudio.play();
                    timerList[1] = setTimeout(() => {
                        audioList.subBodyAudio.play();
                        startRepeatAudio();
                    }, audioList.bodyAudio.duration * 1000 + 1000);
                }, 1000);
                setIntroHide(true)
            }, 1000);
        }, 200);
    }

    function stopSound() {

        timerList.map(timer => {
            clearTimeout(timer)
        })

        audioList.bodyAudio.pause();
        audioList.subBodyAudio.pause();

        audioList.bodyAudio.src = loadSound('SB_54_Audio_10')
    }

    return (
        <div>
            {!isIntroHide &&
                <div >
                    <div
                        style={{
                            position: "fixed", width: _geo.width * 0.5 + "px",
                            left: _geo.width * 0.0 + _geo.left + "px"
                            , bottom: _geo.height * -0.45 + _geo.top + "px",
                        }}>
                        <img draggable={false} width={"100%"}
                            src={prePathUrl() + 'images/SB_53_BG-Intro/Game3/SB_53_Intro_game3_stone_01 .svg'}
                        />
                    </div>

                    <div
                        style={{
                            position: "fixed", width: _geo.width * 0.3 + "px",
                            left: _geo.width * 0.15 + _geo.left + "px"
                            , bottom: _geo.height * 0.2 + _geo.top + "px",
                        }}>
                        <img draggable={false} width={"100%"}
                            src={prePathUrl() + 'images/SB_53_BG-Intro/Game3/SB_53_Intro_game3_alien_01 .svg'}
                        />
                    </div>

                    <div
                        style={{
                            position: "fixed", width: _geo.width * 0.8 + "px",
                            left: _geo.width * 0.3 + _geo.left + "px"
                            , bottom: _geo.height * 0.00 + _geo.top + "px",
                        }}>
                        <img draggable={false} width={"100%"}
                            src={prePathUrl() + 'images/SB_53_BG-Intro/Game3/SB_53_Intro_game3_Stars_01 .svg'}
                        />
                    </div>
                    {/* {isShow && */}
                    <div
                        className='introText'
                        style={{
                            position: "fixed", width: _geo.width * 0.6 + "px",
                            left: _geo.width * 0.35 + _geo.left + "px"
                            , bottom: _geo.height * 0.35 + _geo.top + "px",
                        }}>
                        <img draggable={false} width={"100%"}
                            src={prePathUrl() + 'images/SB_53_BG-Intro/Game3/SB_53_Intro_game3_name_01 .svg'}
                        />
                    </div>
                    {/* } */}

                    <div
                        className="hide"
                        ref={playBtnRef}
                        onClick={clickFunc}
                        style={{
                            position: "fixed", width: _geo.width * 0.1 + "px",
                            left: _geo.width * 0.45 + _geo.left + "px"
                            , top: _geo.height * 0.5 + _geo.top + "px",
                            cursor: "pointer",
                            pointerEvents: 'none'
                        }}>
                        <img draggable={false}
                            width={"100%"}
                            src={prePathUrl() + 'images/Buttons/Play_blue.svg'}
                        />
                    </div>
                </div>
            }
            {isGameRenderStart &&
                < div
                    ref={gamePanelRef}
                    style={{ display: 'none', opacity: 0 }}
                >
                    <GamePanel stopSound={stopSound} finishGame={finishGame} _baseGeo={_baseGeo} _geo={_geo} />
                </div>
            }
            {
                isGameFinished &&
                <Review nextFunc={nextFunc} _baseGeo={_baseGeo} _geo={_geo} />
            }
        </div >
    );
});

export default BaseScene;
