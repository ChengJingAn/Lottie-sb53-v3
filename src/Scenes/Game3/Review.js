import React, { useEffect, useContext, useRef, useState } from 'react';
import "../../stylesheets/styles.css";
import BaseImage from '../../components/BaseImage';

import { UserContext } from '../../components/BaseShot';
import { prePathUrl, generateStandardNum } from "../../components/CommonFunctions"

let timerList = []
//-0.5,1.25,5,-5

export default function Review1({ _baseGeo, nextFunc }) {
    const audioList = useContext(UserContext)
    const starBaseList = Array.from({ length: 5 }, ref => useRef())
    const baseRef = useRef()

    useEffect(
        () => {
            timerList[0] = setTimeout(() => {
                starBaseList.map((star, index) => {
                    setTimeout(() => {
                        star.current.className = 'show'
                    }, 400 * index);
                })
            }, 1500);

            timerList[1] = setTimeout(() => {
                nextFunc()
            }, 8000);

            return () => {
                timerList.map(timer => {
                    clearTimeout(timer)
                })
            }
        }, []
    )

    return (
        <div ref={baseRef}
            className="aniObject"  >
            <div
                style={{
                    position: "fixed", width: _baseGeo.width + "px",
                    height: _baseGeo.height + "px"
                    , left: _baseGeo.left + _baseGeo.width * 0.0 + "px",
                    bottom: _baseGeo.bottom + _baseGeo.height * 0.0 + "px",
                }}>
                {
                    Array.from(Array(5).keys()).map(value =>
                        <div
                            ref={starBaseList[value]}
                            className='hide'
                            style={{
                                position: 'absolute',
                                width: '14%',
                                height: '14%',
                                cursor: 'pointer',
                                top: (0.45 + 0.3 * parseInt((value / 5))) * 100 + '%',
                                left: (0.12 + (value % 5) * 0.16) * 100 + '%',

                            }}>
                            < BaseImage
                                scale={1.5}
                                posInfo={{ t: -0.8, l: -0.3 }}
                                url={'SB_53_Prop-Interactive/SB_53_PI_game3_star_01.svg'}
                            />


                            < BaseImage
                                scale={0.4}
                                posInfo={{ l: 0.23, t: value > 0 ? 0.2 : 0.15 }}
                                url={'SB_53_Text-Interactive/SB_53_TI_Game3_0' + generateStandardNum(value * 10 + 10) + '.svg'}
                            />
                        </div>
                    )
                }


            </div>
        </div>
    );

}
