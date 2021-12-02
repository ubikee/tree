import React from "react";
import he from '../img/he.png'
import she from '../img/she.png'
import "./avatar.css"

export const Avatar = ({ person, partner, onPrev, onNext }) => {

    const { src, name, date } = person
    return (
        <div className="avatar">
            {onPrev ? <aside>
                <div className="clickable">PREV</div>
            </aside> : null}
            <div className="person" >
                <div className="frame">
                    <img src={src ? src : he}></img>
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <p>{date}</p>
                </div>
            </div>
            {onNext ? <aside>
                <div className="clickable">NEXT</div>
            </aside> : null}
        </div>
    )
}