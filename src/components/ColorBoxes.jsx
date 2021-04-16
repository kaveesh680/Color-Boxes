import React from 'react'
import { Box } from './Box';
import '../styles/ColorBoxes.css';

export const ColorBoxes = (props) => {
    const boxes = Array.from({ length: props.maxBoxes || 18 })
    const colors = ["green", "purple", "red", "blue", "yellow"];

    return (
        <div className="Box-Container">
            {boxes.map(() => <Box colorList={colors} />)}
        </div>
    )
}
