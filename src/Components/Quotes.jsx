import React, { useState, useEffect } from 'react';
import './Quotes.css'

function Quotes() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        generateQuote();
    }, []); // Fetch quote on component mount

    const generateQuote = () => {
        fetch('https://dummyjson.com/quotes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log the response data to inspect its structure
                const randomNumber = Math.floor(Math.random() * 30); // Generates a random integer between 0 (inclusive) and 30 (exclusive)
                const newQuote = data.quotes[randomNumber]?.quote || "No quote available";
                setQuote(newQuote);
                setAuthor(data.quotes[randomNumber]?.author);
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                setQuote("Failed to fetch quote");
            });
    };

    const tweetQuote = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
        window.open(twitterUrl, '_blank');
    };

    return (
        <div className="container mt-5">
            <div className="rounded p-4 quote-container">
                <h1 className="text-center mb-4">Random Quotes Generator</h1>
                <div className="quote text-center m-4" id="quote">
                    {quote}
                </div>
                <div className="author text-center m-4" id="author">
                    - {author}
                </div>
            </div>
            <div className="text-center mt-5">
                    <button className="btn btn-primary mr-2" onClick={generateQuote}>
                        <i className="fas fa-random mr-1"></i> Generate Quote
                    </button>
                    &nbsp;
                    <button className="btn btn-primary mr-2" onClick={tweetQuote}>
                        <i className="fas fa-random mr-1"></i> Tweet Quote
                    </button>
                </div>
        </div>
    );
}

export default Quotes;
