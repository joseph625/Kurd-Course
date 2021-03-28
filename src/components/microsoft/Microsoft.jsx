import React from 'react'
import './microsoft.css'
import Vedio from '../detail/Vedio.jsx'
import Youtube from '../website/Youtube.jsx'
import microsoft from './microsoft.js'
import Header from '../views/Header.jsx'
import Footer from '../views/Footer.jsx'

function Microsoft() {
    return (
        <div className="microsoft">
            <Header />
            <div className="microsoft-body">

                <Vedio />

            <div className="grid">


                {microsoft.map(d =>(
                    <Youtube 
                    key = {d.id}
                    title ={d.title}
                    img ={d.img}
                    playlist = {d.playlist}
                    />
                    ))}

            </div>
            </div>
            <Footer />
        </div>
    )
}
export default Microsoft
