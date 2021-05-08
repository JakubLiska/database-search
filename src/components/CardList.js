import React from 'react';
import Card from './Card';


export const CardList = (props) => {
    
    return(
        <div>
        {
            props.item.map((it, i) => {

                return (
                    
                    <Card 
                        key={props.item[i].id} 
                        id={props.item[i].id}
                        street={`Street: ${props.item[i].address.street}`} 
                       
                    />
                )
            })
        }
        </div>
    )   
}