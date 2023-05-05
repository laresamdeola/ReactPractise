import React, { useState, useEffect } from "react";
import { translate } from '@vitalets/google-translate-api';

//const { text } = await translate('Привет, мир! Как дела?', { to: 'en' });

console.log(text) // => 'Hello World! How are you?'

const Ede = () => {
    const translated = async() => {
        const data = await translate('How are you?', {to: "yb"});
        console.log(data);
    }
    
    translated();
    
    return null;
}

export { Ede };