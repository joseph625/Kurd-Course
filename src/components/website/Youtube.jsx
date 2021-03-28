import React from 'react'
import './youtube.css'
function Youtube(props) {
    return (
        <div className="grid">
            <div className="youtube">

                <h1>{props.title}</h1>
                            <img src={props.img} height="200px" width="200px" alt=""/>
                            <p>{props.abbr} <br/>
                            {props.detail}
                            </p>

                        <iframe src={props.playlist} frameBorder="0" title="myFrame" />

                        <div className="framework">
                            {props.framework}

                        </div>
            </div>
        </div>
    )
}

export default Youtube
