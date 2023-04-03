// Props Destructuring

import React, { useState } from "react";
import { helloWorldData } from "./helloworld";

const HelloWorld3 = () => {
    
    const [data, setData] = useState(helloWorldData);
    
    const ProgrammingLanguage = (props) => {
        
        const { languageName, languageCreator, languageYearCreated, languageIdiosyncracy,
        languageIndustry1, languageIndustry2, languageIndustry3, languageCode } = props;
        
        return (
            <section>
                <details>
                    <summary>{languageName}</summary>
                    <h4>Creator : {languageCreator}</h4>
                    <time datetime="2000">Year Created : {languageYearCreated}</time>
                    <p>{languageIdiosyncracy}</p>
                    <ol>
                        <h4>Popular Usecases</h4>
                        <li>{languageIndustry1}</li>
                        <li>{languageIndustry2}</li>
                        <li>{languageIndustry3}</li>
                    </ol>
                    <h4>Hello World in {languageName}</h4>
                    <code>{languageCode}</code>
                </details>
            </section>
        );
    }
    
    return (
        <>
            <h2><b>{HelloWorld3.name}</b></h2>
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

export { HelloWorld3 };