// Nested Components

import React from "react";

const Biography = () => {
    
    const name = "Chief Obafemi Awolowo";
    
    const summary = `Chief Obafemi Jeremiah Oyeniyi Awolowo 
    GCFR (Yoruba - Ọbáfẹ́mi Oyèéníyì Awólọ́wọ̀ 6 March 1909 – 9 May 1987)
     was a Nigerian nationalist and statesman who played a key role in 
     Nigeria's independence movement (1957-1960). Awolowo
     founded the Yoruba nationalist group Egbe Omo Oduduwa, and 
     was the first Leader of Government Business and Minister of 
     Local Government and Finance, and first Premier of the Western 
     Region under Nigeria's parliamentary system, from 1952 to 1959.
     He was the official Leader of the Opposition in the federal parliament 
     to the Balewa government from 1959 to 1963.`;
    
    const earlyLifeContent = `Obafemi Awolowo was born Jeremiah Obafemi 
    Oyeniyi Awolowo on 6 March 1909 in the Remo town of Ikenne, 
    in present-day Ogun State of Nigeria.He was the only son of 
    David Shopolu Awolowo, a farmer and sawyer, and Mary Efunyela Awolowo. 
    He had two sisters and one maternal half-sister. Awolowo's father was 
    born to a high chief and member of the Iwarefa, the leading faction of 
    the traditional Osugbo group that ruled Ikenne. In 1896, Awolowo's father 
    became one of the first Ikenne natives to convert to Christianity. 
    Awolowo's paternal grandmother, Adefule Awolowo, whom Awolowo adored, 
    was a devout worshipper of the Ifá. Adefule, Awolowo's grandmother, 
    believed that Obafemi was a reincarnation of her father 
    (his great-grandfather). Awolowo's father's conversion to Christianity 
    often went at odds with his family's beliefs. He often challenged 
    worshippers of the god of smallpox, Obaluaye. His father ultimately 
    died on April 8, 1920, of smallpox when Obafemi was about eleven years old.
    He attended various schools, including Baptist Boys' High School (BBHS), 
    Abeokuta; and then became a teacher in Abeokuta, after which he 
    qualified as a shorthand typist. Subsequently, he served as a clerk at 
    the Wesley College Ibadan, as well as a correspondent for the Nigerian 
    Times. It was after this that he embarked on various business ventures 
    to help raise funds to travel to the UK for further studies. 
    Following his education at Wesley College, Ibadan, in 1927, 
    he enrolled at the University of London as an External Student 
    and graduated with the degree of Bachelor of Commerce (Hons.). 
    He went to the UK in 1944 to study law at the University of London 
    and was called to the Bar by the Honorable Society of the Inner Temple 
    on 19 November 1946. In 1949, Awolowo founded the Nigerian Tribune,
    a private Nigerian newspaper, which he used to spread nationalist 
    consciousness among Nigerians.`;
     
    const earlyLife = "Early Life";
    
    const Introduction = () => {
        return (
            <section>
                <div>
                    <h1>{name}</h1>
                    <h3>{Introduction.name.toUpperCase()}</h3>
                    <p>{summary}</p> 
                </div>
            </section>  
        );
    }
    
    const EarlyLife = () => {
        return (
            <section>
                <div>
                    <h3>{earlyLife.toUpperCase()}</h3>
                    <p>{earlyLifeContent}</p>
                </div>
            </section>
        );
    }
    
    return (
        <>
            <div>
                <Introduction />
                <EarlyLife />
            </div>
        </>
    );
}

export { Biography };