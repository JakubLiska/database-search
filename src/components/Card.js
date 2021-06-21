import React from 'react';

const Card = (props) => {
    console.log(props)
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt ="paleciok" src = {`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.street}</p>
                <p>{props.id}</p>
            </div>
        </div>
    
    )
}

export default Card;