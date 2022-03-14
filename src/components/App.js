
import React, { useState, useEffect, useRef, useContext } from 'react';

import Intro3 from "../Scenes/Game3/Intro";

import Excellent from "../Scenes/Excellent"

import { MusicButton } from './CommonButtons';

const Switch = props => {
  const { test, children } = props
  // filter out only children with a matching prop
  return children.find(child => {
    return child.props.value === test
  })
}

var __geo;
var backgroundImageIndex = 0;

var backgroundImageList = [
  "SB_53_Intro_game3_bg_01 ", //5
  "SB08_Well-Done_BG",//6
];


import { UserContext } from "./BaseShot";

const App = React.forwardRef(({ geo, _setBackground, _startTransition, baseGeo, _isBackloaded }, ref) => {

  const audioList = useContext(UserContext)

  const [index, setIndex] = useState(0);

  const refScene1 = useRef();
  const musicRef = useRef();

  __geo = geo;

  useEffect(
    () => {
      musicRef.current.className = 'hideObject'
      return () => {
      }
    }, []
  )

  // 1 - center center, 2 - center bottom , 3-left center ,  4 - left bottom, 5 - left top
  const transitionSceneList = []
  const centerBottomBackList = []
  const centerTopBackList = []
  const leftTopBackList = []
  const leftBottomBackList = []

  function changeBackgroundImage(judgeNum) {
    let sendNum = -1;
    if (judgeNum == 0)
      sendNum = 0;
    if (transitionSceneList.includes(judgeNum))
      sendNum = 1;    //mean - transition
    if (judgeNum != backgroundImageIndex) {
      backgroundImageIndex = judgeNum;

      let backState = 1;
      if (centerBottomBackList.includes(judgeNum))
        backState = 2
      else if (leftTopBackList.includes(judgeNum))
        backState = 5;
      else if (leftBottomBackList.includes(judgeNum))
        backState = 4;
      else if (centerTopBackList.includes(judgeNum))
        backState = 6;

      _setBackground(backgroundImageList[judgeNum], sendNum, backState);
    }
  }

  function setFomart(judgeNum) {
    setIndex(judgeNum);
    changeBackgroundImage(judgeNum);
  }

  function showMusicBtn() {
    setTimeout(() => {
      musicRef.current.className = 'introText'
    }, 500);

    setTimeout(() => {
      musicRef.current.className = 'commonButton'
    }, 1500);
  }


  function nextFunc() {
    setFomart(index + 1);
  }


  function goHome() {
    musicRef.current.className = 'hideObject'

    audioList.backAudio.pause();
    audioList.backAudio.currentTime = 0

    setFomart(0);
  }

  return (
    <div >
      <div className={_isBackloaded ? '' : 'hide'}>
        <Switch test={index}>
          <Intro3 showMusicBtn = {showMusicBtn} nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={0} />
          <Excellent nextFunc={goHome} _baseGeo={baseGeo} _geo={__geo} value={1} />
        </Switch>
      </div>
      <MusicButton ref={musicRef} _geo={__geo} backAudio={audioList.backAudio} />
    </div >
  );
})

export default App;
