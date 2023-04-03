// 1. List of Programming Languages
// 2. Props include: Language Name, Creator, Year Created, Major use
// Major Identifier, Code of Hello World.

import React from "react";

const HelloWorld = () => {
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
            <h2><b>{HelloWorld.name}</b></h2>
            <ProgrammingLanguage 
                languageName = "Python"
                languageCreator = "Guido Van Rossum"
                languageYearCreated = "1991"
                languageIdiosyncracy = "Dynamic, easy to learn language for fast prototyping"
                languageIndustry1 = "Machine Learning"
                languageIndustry2 = "Artificial Intelligence"
                languageIndustry3 = "Data Science"
                languageCode = "print('Hello World')"
            />
            
            <br />
            
            <ProgrammingLanguage 
                languageName = "Javascript"
                languageCreator = "Brendan Eich"
                languageYearCreated = "1995"
                languageIdiosyncracy = "Multi-Paradigm language, efficient for building web technologies"
                languageIndustry1 = "Internet & Web"
                languageIndustry2 = "E-commerce"
                languageIndustry3 = "Visualizations"
                languageCode = "console.log('Hello World')"
            />
            
            <br />
            
            <ProgrammingLanguage 
                languageName = "C"
                languageCreator = "Dennis Ritchie"
                languageYearCreated = "1972"
                languageIdiosyncracy = "A general-purpose computer programming language"
                languageIndustry1 = "Operating System"
                languageIndustry2 = "Device Drivers"
                languageIndustry3 = "Physical Computing"
                languageCode = '#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}'
            />
            
        </>
    );
};

export { HelloWorld };