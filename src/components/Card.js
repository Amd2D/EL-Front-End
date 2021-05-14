import React from 'react';
import ReactDOM from 'react-dom';

export default function Card() {
    return (
        <div className={"itemContainer"}>
            <div className={"imageContainer"}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXESeFnda-JJhfsFWJeV_ewrkZak3N8wNWQ&usqp=CAU'/>
                <p>
                    The image is here
                </p>
            </div>
            {/*<div className={"itemBox"}>*/}
            {/*    <div className={"itemTitle"}>*/}
            {/*        <h1>Name: Lenovo Legion 7</h1>*/}
            {/*        <h1>Type: Laptop</h1>*/}
            {/*        <h1>Price: 1800</h1>*/}
            {/*    </div>*/}
            {/*    <div className={"itemDescription"}>*/}
            {/*        <p>Description: The Lenovo Legion 7i laptop is one hell of a machine. Powerful, great screen and*/}
            {/*            graphics, good sound, very good battery life, it ticks just about every box</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
