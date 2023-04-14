// 1. Live News SPA

import React, { useState, useEffect } from "react";
import { apiKey } from "./options";

const HomePage = () => {
    const [news, setNews] = useState([]);
    const [fetched, setFetched] = useState(false);
    const topic = "politics"
    const url = `https://api.currentsapi.services/v1/search?languages=us&apiKey=${apiKey}`;
    const defaultApiImage = "https://static.arxiv.org/static/browse/0.3.4/images/arxiv-logo-fb.png";
    
    const Loading = () => {
        return <h2>Loading...</h2>
    }
    
    const fetchNews = async() => {
        const data = await fetch(url);
        const dataJson = await data.json();
        setNews(dataJson.news);
        setFetched(true);
        console.log(dataJson.status);
    }

    console.log(2, news);
    
    useEffect(() => {
        fetchNews();
    }, [url]);
    
    return (
        <div>
            <h4>HomePage</h4>
            {fetched ? news.map((info) => {
                const { author, id, image, category, title, url, published, description } = info;
                const [category1, category2] = category;
                return (
                    <section key={id}>
                        <h4><a href={url}>{title}</a></h4>
                        <h5>{author}</h5>
                        <h6>{published}</h6>
                        <img src={image == defaultApiImage ? null : image} alt={`${title} ${category1}`} width="40%" height="40%"/>
                        <p>{description}</p>
                    </section>
                );
            }) : <Loading />}
        </div>
    );
}

export { HomePage };