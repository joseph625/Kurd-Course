import React from 'react'
import './design.css'
import Youtube from '../website/Youtube.jsx'
import Vedio from '../detail/Vedio';
import Book from '../detail/Book.jsx'
import Learn from '../detail/Learn.jsx'
import design from './design.js'
import nameBook from './book.js'
import learn from './learn.js'
import Header from '../views/Header.jsx'
import Footer from '../views/Footer.jsx'

function Design() {
    return (
        <div className="design">
            <Header />
            <div className="design-body">
                <Vedio />

                    <div className="grid">

                    
                    {design.map((item) =>(
                        <Youtube
                        key= {item.id}
                        title ={item.title}
                        img={item.img}
                        playlist = {item.playlist}
                        />
                    ))}
                    </div>




                
                    <Book 
                    book ={nameBook.map(book =>(
                        <a key={book.id} href={book.book} target="_blank" rel="noreferrer"><img src={`image/design/${book.img}.svg`} alt=""/></a>
                    ))}
                    />

                
                <Learn 
                learn ={learn.map(url =>(
                    <a key={url.id} href={url.url} target="_blank" rel="noreferrer"><img src={url.img} alt=""/></a>
                ))}
                />
            </div>
            <Footer />
        </div>
    )
}

export default Design
