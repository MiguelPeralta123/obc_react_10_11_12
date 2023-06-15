import React, { useState } from 'react';

const SquareComponent = () => {

    const [squareColor, setSquareColor] = useState(`rgb(0, 0, 0)`);

    const squareStyle = {
        'height': '255px',
        'width': '255px',
        'margin': '150px auto',
        'borderRadius': '20px',
        'backgroundColor': squareColor
    }

    const randomNumber = () => {
        return Math.floor(Math.random() * 255)
    }

    const changeColor = () => {
        setSquareColor(`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`)
    }

    const stopChangeColor = () => {
        setSquareColor(`rgb(0, 0, 0)`)
    }
    
    return (
        <div style={squareStyle} onMouseOver={changeColor} onMouseLeave={stopChangeColor} onDoubleClick={stopChangeColor}>
        </div>
    );
};

export default SquareComponent;
