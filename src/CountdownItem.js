import React, { useState, useEffect, useCallback } from 'react';

export default function CountdownItem({time, timeName}) {
    const [isShrinkingTop, setIsShrinkingTop] = useState(false);
    const [isShrinkingBottom, setIsShrinkingBottom] = useState(false);

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const startAnimation = useCallback(async () => {
      setIsShrinkingTop(true);
      await delay(300);
      setIsShrinkingBottom(true);
      await delay(300);
      setIsShrinkingBottom(false);
      setIsShrinkingTop(false);
  }, []);

  useEffect(() => {
      startAnimation();
  }, [time, startAnimation]);

    return (
        <div className='countdown-item-container'>
            <div className="countdown-item" >
              <div className="half-circle-vertical --left"/>
              <div className="half-circle-vertical --right"/>
              <div className={`countdown-item-top --absolute ${isShrinkingTop ? 'fadeTop-anim' : ''}`}>
                <div className="shadow"/>
                {(time).toString().split('').map((digit, index) => (
                  <img src={`./${digit}-top.svg`}/>
                ))}
              </div>
              <div className={`countdown-item-top`}>
                <div className="shadow"/>
                {(time).toString().split('').map((digit, index) => (
                  <img src={`./${digit}-top.svg`}/>
                ))}
              </div>
              <div className={`countdown-item-bottom`}>
                {(time).toString().split('').map((digit, index) => (
                  <img src={`./${digit}-bottom.svg`}/>
                ))}
              </div>
              <div className={`countdown-item-bottom --absolute ${isShrinkingBottom ? 'fadeBottom-anim' : ''} `}>
                {(time).toString().split('').map((digit, index) => (
                  <img src={`./${digit}-bottom.svg`}/>
                ))}
              </div>
            </div>
              <p className='date-text'>{timeName}</p>
        </div>
    );
}