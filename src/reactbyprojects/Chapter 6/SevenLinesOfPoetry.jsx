// 1. SevenLinesOfPoetry - done.

import React, { useState, useEffect } from "react";

const SevenLinesOfPoetry = () => {
    var title = "Ozymandias";
    const [poems, setPoems] = useState([]);
    const [isDone, setIsDone] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    //const [formTitle, setFormTitle] = useState(title);
    //const url = `https://poetrydb.org/title/${formTitle}/lines.json`;
    const url2 = `https://poetrydb.org/lines/random/title,author,lines,linecount.json`;
   
    const fetchPoetry = async() => {
        const poemData = await fetch(url2);
        const poemDataJson = await poemData.json();
        var randomNumber = Math.floor(Math.random() * poemDataJson.length);
        setPoems(poemDataJson[randomNumber]);
        console.log(poemDataJson[randomNumber], randomNumber, poems);
        setIsDone(true);
    }
    
    useEffect(() => {
        fetchPoetry();
    }, [url2]);
    
    const Poem = () => {
        return (
            <section>
                <h3>{poems.title}</h3>
                <h4>{poems.author}</h4>
                {poems.lines.slice(1,8).map((poem, index) => {
                    return <p key={index}>{poem}</p>
                })}
            </section>
        );
    }
    
    return (
        <div>
            <h3 style={{ color: "darkblue" }}>Seven Lines of Poetry</h3>
            {isClicked && <Poem />}
            <button onClick={() => isDone && setIsClicked(true) }>Search</button>
            <button onClick={() => isDone && location.reload() }>Refresh</button>
        </div>
    );
}

export { SevenLinesOfPoetry };