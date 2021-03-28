import React from 'react'
import './mobile.css'
import Vedio from '../detail/Vedio.jsx'
import Book from '../detail/Book.jsx'
import Learn from '../detail/Learn.jsx'
import Youtube from '../website/Youtube.jsx'
import mobile from './mobile.js'
import mobileBooks from './mobileBook.js'
import learn from './learn.js'

function Mobile() {
    return (
        <div className="mobile">
            <Vedio />

           
            {mobile.map((item) =>(
                        <Youtube
                        key= {item.id}
                        title ={item.title}
                        img={item.img}
                        playlist = {item.playlist}
                        abbr={item.abbr}
                        detail= {item.detail}
                        framework ={(item.id === 3 || item.id === 4)  && item.framework.map((list, index) =>(
                            <div key={index}>
                                    <h1 style={{display : index !== 0 && 'none'}}>Framework</h1>
                                    <h1>{list.name}</h1>
                                    <iframe src={list.playlist} width="800px" height="600px" frameBorder="0" title="myFrame" />
                                </div>
                        ))}
                        />
                    ))}

                    <Book 
                    book ={ mobileBooks.map(book=>(
                        <a key={book.id} href={book.book} target="_blank" rel="noreferrer"><img src={`${book.img}`} alt=""/></a>
                    ))}
                    />

                    <Learn 
                    learn ={learn.map(url =>(
                        <a key={url.id} href={url.url} target="_blank" rel="noreferrer"><img src={url.img} alt=""/></a>
                    ))}
                    />

        </div>
    )
}

export default Mobile
