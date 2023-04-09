// 1. List of Programming Languages
// 2. Props include: Language Name, Creator, Year Created, Major use
// Major Identifier, Code of Hello World.

import React, { useState } from "react";
import { helloWorldData } from "./helloworld";

const HelloWorld2 = () => {
    
    const [data, setData] = useState(helloWorldData);
    
    const ProgrammingLanguage = (props) => {
        return (
            <section>
                <details>
                    <summary>{props.languageName}</summary>
                    <h4>Creator : {props.languageCreator}</h4>
                    <time datetime="2000">Year Created : {props.languageYearCreated}</time>
                    <p>{props.languageIdiosyncracy}</p>
                    <ol>
                        <h4>Popular Usecases</h4>
                        <li>{props.languageIndustry1}</li>
                        <li>{props.languageIndustry2}</li>
                        <li>{props.languageIndustry3}</li>
                    </ol>
                    <h4>Hello World in {props.languageName}</h4>
                    <code>{props.languageCode}</code>
                </details>
            </section>
        );
    }
    
    return (
        <>
            <h2><b>{HelloWorld2.name}</b></h2>
            <ProgrammingLanguage 
                languageName = {data[0].languageName}
                languageCreator = {data[0].languageCreator}
                languageYearCreated = {data[0].languageYearCreated}
                languageIdiosyncracy = {data[0].languageIdiosyncracy}
                languageIndustry1 = {data[0].languageIndustry1}
                languageIndustry2 = {data[0].languageIndustry2}
                languageIndustry3 = {data[0].languageIndustry3}
                languageCode = {data[0].languageCode}
            />
            
            <br />
            
            <ProgrammingLanguage 
                languageName = {data[1].languageName}
                languageCreator = {data[1].languageCreator}
                languageYearCreated = {data[1].languageYearCreated}
                languageIdiosyncracy = {data[1].languageIdiosyncracy}
                languageIndustry1 = {data[1].languageIndustry1}
                languageIndustry2 = {data[1].languageIndustry2}
                languageIndustry3 = {data[1].languageIndustry3}
                languageCode = {data[1].languageCode}
            />
            
            <br />
            
            <ProgrammingLanguage 
                languageName = {data[2].languageName}
                languageCreator = {data[2].languageCreator}
                languageYearCreated = {data[2].languageYearCreated}
                languageIdiosyncracy = {data[2].languageIdiosyncracy}
                languageIndustry1 = {data[2].languageIndustry1}
                languageIndustry2 = {data[2].languageIndustry2}
                languageIndustry3 = {data[2].languageIndustry3}
                languageCode = {data[2].languageCode}
            />
            
        </>
    );
};

export { HelloWorld2 };