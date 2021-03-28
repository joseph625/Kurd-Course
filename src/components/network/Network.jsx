import React from 'react'
import './network.css'
import Vedio from '../detail/Vedio.jsx'
import Book from '../detail/Book.jsx'
import Youtube from '../website/Youtube.jsx'
import network from './network.js'
import netwrokBook from './networkBook.js'
import Header from '../views/Header.jsx'
import Footer from '../views/Footer.jsx'


function Network() {
    return (
        <div className="network">
            <Header />
            <div className="network-body">

                <Vedio />

                <div className="grid">

                

                {network.map(net =>(
                    <Youtube
                    key={net.id}
                    title = {net.title}
                    img = {net.img}
                    playlist = {net.playlist}
                     />
                ))}

            </div>


                    <Book
                    book ={netwrokBook.map(book =>(
                        <a key={book.id} href={book.book} target="_blank" rel="noreferrer"><img src={book.img} alt=""/></a>
                    ))}
                    />      
            </div>
            <Footer />
        </div>
    )
}

export default Network
