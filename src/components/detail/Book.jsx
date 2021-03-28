import React from 'react'
import './book.css'
function Book(props) {
    return (
        <>
            <div className="book">
                    <div className="body">
                        <div className="left">
                            <h1>پەرتووک</h1>
                        </div>

                        <div className="right">
                            <img src="image/book.gif" alt=""/>
                        </div>
                    </div>

                    <div className="icon">
                        {props.book}
                    </div>
                </div>
        </>
    )
}

export default Book
