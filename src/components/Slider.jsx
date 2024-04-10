
import "./Style.css"
import Item from "./Item.jsx"
import React, { useState, useEffect } from 'react';

function Slider() {
    const [active, setActive] = useState(2);
    let items;

    useEffect(() => {
        items = document.querySelectorAll('.slider .item');
        loadShow();
    }, [active]);

    function loadShow() {
        if (!items || !items[active]) return; // Verificar si items y items[active] están definidos
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for (var i = active + 1; i < items.length; i++) {
            stt++;
            items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for (var i = active - 1; i >= 0; i--) {
            stt++;
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }

    function handleNext() {
        setActive(active + 1 < items.length ? active + 1 : active);
        loadShow()
    }

    function handlePrev() {
        setActive(active - 1 >= 0 ? active - 1 : active);
        loadShow()
    }

    return (
        <div className="slider">
            
            <Item/>
            <Item/>
            <Item/>
            <Item/>

            <button id="next" onClick={handleNext}>&gt;</button>
            <button id="prev" onClick={handlePrev}>&lt;</button>
        </div>
    );
}

export default Slider;
