import React from 'react';
import Card from './Card';


export const CardList = (props) => {
return(
    <div>
    {props.item.map((it, i) => {
            return (
                <Card 
                    key={props.item[i].id} 
                    name={props.item[i].name}
                    street={`Street: ${props.item[i].address.street}`} 
                    id={`Id: ${props.item[i].id}`}
                />
            )
        })
    }
    </div>
)}