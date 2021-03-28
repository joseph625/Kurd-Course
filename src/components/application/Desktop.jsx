import React from 'react'
import './mobile.css'
import Vedio from '../detail/Vedio.jsx'
import Book from '../detail/Book.jsx'
import Learn from '../detail/Learn.jsx'
import Youtube from '../website/Youtube.jsx'
import desktop,{book , learn} from './desktop.js'
function Desktop() {
    return (
        <div className="desktop">
            <div className="desktop-body">
            <Vedio />

           
           <div className="grid">

           
        {desktop.map((item) =>(
                    <Youtube
                    key= {item.id}
                    title ={item.title}
                    img={item.img}
                    playlist = {item.playlist}
                    
                    />
                ))}
                </div>

                 <Book 
                book ={ book.map(book=>(
                    <a key={book.id} href={book.book} target="_blank" rel="noreferrer"><img src={`${book.img}`} alt=""/></a>
                ))}
                />

                <Learn 
                learn ={learn.map(url =>(
                    <a key={url.id} href={url.url} target="_blank" rel="noreferrer"><img src={url.img} alt=""/></a>
                ))}
                />
            </div>
            
        </div>
    )
}

export default Desktop
