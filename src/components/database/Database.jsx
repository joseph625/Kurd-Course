import React from 'react'
import './database.css'
import Vedio from '../detail/Vedio.jsx'
import Book from '../detail/Book.jsx'
import Youtube from '../website/Youtube.jsx'
import data from './data.js'
import databook from './databook.js'
import Header from '../views/Header.jsx'
import Footer from '../views/Footer.jsx'

function Data() {
    return (
        <div className="data">
            <Header />
            <div className="data-body">

                <Vedio />

                <div className="grid">

                

                {data.map(d =>(
                    <Youtube 
                    key = {d.id}
                    title ={d.title}
                    img ={d.img}
                    playlist = {d.playlist}
                    framework = {(d.id === 1) && d.framework.map((list,index) =>{
                        return (
                            <div key={index}>
                                <h1>{list.name}</h1>
                                <iframe src={list.playlist} width="800px" height="600px" frameBorder="0" title="myFrame" />
                            </div>
                        )
                    })}
                    />
                ))}
                </div>

                <Book 
                 book= {databook.map(url =>(
                    <a key={url.id} href={url.book} target="_blank" rel="noreferrer"><img src={url.img} alt=""/></a>
                    ))}
                />

            </div>
            <Footer />
        </div>
    )
}

export default Data
