import React, { useState } from 'react';
import './RandomQuote.css';
import reload_icon from "../assets/reload.jpg";
import x_icon from "../assets/x.jpg";

const RandomQuote = () => {
    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe",
    });

    const random = async () => {
        try {
            const response = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random");
            const data = await response.json();
            setQuote({
                text: data[0].q,
                author: data[0].a,
            });
        } catch (err) {
            console.error("Failed to fetch quote:", err);
        }
    };

    const x = () => {
        window.open(`https://x.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
    };

    return (
        <div className='container'>
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <img src={reload_icon} onClick={random} alt="" width="50px" height="50px" />
                        <img src={x_icon} onClick={x} alt="" width="80px" height="50px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomQuote;
