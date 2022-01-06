import React from 'react';
import Description from '../../description';
import GrayImg from '../../shared/greyimg';

const Planet = (props) => {

    /* const names = ['a', 'b', 'c']
    const satelites = names.map((n) => 
        <li>Satélite {n}</li>
    ) */


    let title;
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    return(
        <div onClick={() => props.clickPlanet(props.name)}>
            {title}
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <Description description={props.description} link={props.link}/>

            {/* <h4>Satélites</h4>
            <ul>
                {satelites}
            </ul> */}
        </div>
    )
}

export default Planet;