import "../stylesheets/styles.css";
import React, { useContext, useEffect } from 'react';
import Lottie from "react-lottie";
import loadAnimation from "../utils/loadAnimation"
import { UserContext } from "../components/BaseShot"
import {prePathUrl} from "../components/CommonFunctions"


let animationData, animationData1, animationData2, animationData3, animationData4, animationData5, animationData6,
    animationData7, animationData8

new loadAnimation('welldone/sh44w.json').then(result => {
    animationData = result;
}, () => { });

new loadAnimation('welldone/sh44e01.json').then(result => {
    animationData1 = result;
}, () => { });
new loadAnimation('welldone/sh44L01.json').then(result => {
    animationData2 = result;
}, () => { });

new loadAnimation('welldone/sh44L02.json').then(result => {
    animationData3 = result;
}, () => { });

new loadAnimation('welldone/sh44d.json').then(result => {
    animationData4 = result;
}, () => { });

new loadAnimation('welldone/sh44O.json').then(result => {
    animationData5 = result;
}, () => { });

new loadAnimation('welldone/sh44n.json').then(result => {
    animationData6 = result;
}, () => { });

new loadAnimation('welldone/sh44e02.json').then(result => {
    animationData7 = result;
}, () => { });

new loadAnimation('welldone/sh44eee.json').then(result => {
    animationData8 = result;
}, () => { });



export default function Scene18({ nextFunc, _geo }) {
    const audioList = useContext(UserContext)

    useEffect(() => {
        audioList.bodyAudio.src = prePathUrl() + "sounds/SB_53_Audio_09.mp3"
        const timer = setTimeout(() => {
            nextFunc();
        }, 8000);

        setTimeout(() => {
            audioList.bodyAudio.play().catch(error => { })
        }, 1500);

        setTimeout(() => {
            audioList.clapAudio.play();
            audioList.yeahAudio.play();
        }, 4000);

        return () => {
            clearTimeout(timer);
            
            audioList.yeahAudio.pause();
            audioList.yeahAudio.currentTime = 0;

            audioList.clapAudio.pause();
            audioList.clapAudio.currentTime = 0;

        }
    }, [])

    const showSourceList = [
        animationData, animationData1, animationData2, animationData3,
        animationData4, animationData5, animationData6, animationData7, animationData8,
    ];

    function returnOption(index) {
        return {
            loop: true,
            autoplay: true,
            animationData: showSourceList[index],
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
    }

    return (
        <div className='aniObjectDelay'>
            < div className="excellentText" style={{
                position: "fixed", width: _geo.width * 1.3 + "px",
                left: _geo.left - _geo.width * 0.15 + "px",
                top: _geo.top - _geo.height * 0.15 + "px"
            }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/welldone/SB08_Well-Done_Particles.svg"}
                />
            </div>

            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.14 + "px",
                    left: _geo.left + _geo.width * 0.25 + "px",
                    top: _geo.top + _geo.height * 0.16 + "px"
                }}
            >


                <Lottie autoplay loop options={returnOption(0)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>

            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.07 + "px",
                    left: _geo.left + _geo.width * 0.40 + "px",
                    top: _geo.top + _geo.height * 0.23 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(1)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.09 + "px",
                    left: _geo.left + _geo.width * 0.48 + "px",
                    top: _geo.top + _geo.height * 0.17 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(2)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.09 + "px",
                    left: _geo.left + _geo.width * 0.58 + "px",
                    top: _geo.top + _geo.height * 0.17 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(3)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.12 + "px",
                    left: _geo.left + _geo.width * 0.24 + "px",
                    top: _geo.top + _geo.height * 0.5 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(4)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div
                style={{
                    position: "fixed",
                    width: _geo.width * 0.11 + "px",
                    left: _geo.left + _geo.width * 0.36 + "px",
                    top: _geo.top + _geo.height * 0.54 + "px"
                }}
            >
                <Lottie autoplay loop options={returnOption(5)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.12 + "px",
                    left: _geo.left + _geo.width * 0.47 + "px",
                    top: _geo.top + _geo.height * 0.53 + "px"
                }}
            >
                <Lottie autoplay loop options={returnOption(6)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div


                style={{
                    position: "fixed",
                    width: _geo.width * 0.1 + "px",
                    left: _geo.left + _geo.width * 0.6 + "px",
                    top: _geo.top + _geo.height * 0.53 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(7)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>
            <div

                style={{
                    position: "fixed",
                    width: _geo.width * 0.08 + "px",
                    left: _geo.left + _geo.width * 0.71 + "px",
                    top: _geo.top + _geo.height * 0.42 + "px"
                }}

            >
                <Lottie autoplay loop options={returnOption(8)}
                    mouseDown={false}
                    isClickToPauseDisabled={true}
                />
            </div>





        </div>
    );
}
