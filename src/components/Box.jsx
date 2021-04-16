import React, { useState } from 'react';
import '../styles/Box.css';
import { Choice } from './Helper';

export const Box = (props) => {
    const [color, setColor] = useState(Choice(props.colorList));

    const handleClick = e => {
        let newColor;
        do { newColor = Choice(props.colorList); } while (newColor === color);
        setColor(newColor);
    }


    return (
        <div className="Box" style={{ backgroundColor: color }} onClick={() => handleClick()}>
        </div>
    )
}
