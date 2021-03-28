import React from 'react'
import './item.css'
function Item(props) {
    return (
        <div className="item">
            <img src={props.img} alt=""/>
                <p>{props.title}</p>
               <a href={`#/${props.url}`}><button>زانیاری</button></a>
                
        </div>
    )
}

export default Item
