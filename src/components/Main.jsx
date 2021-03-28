import React from 'react'
import './main.css'
import Item from './Item.jsx'
import item from './item.js'
import Header from './views/Header.jsx'
import Footer from './views/Footer.jsx'
function Main() {
    return (
        <div className="main">
            <div className="body">
                <Header />
              <div className="container">
                <div className="left">
                    <p dir="rtl"> هەموو جۆرە کۆرسێک لە بوارەکانی
                        <br/> وێبسایت
                        <br/> دیزاین
                        <br/>ئەپڵیکەیشن
                        <br/>نێتۆرکینگ
                        <br/>چەندین کۆرسی تر..
                    </p>
                    <p id="detail" dir="rtl">لێرەدا هەوڵمانداوە کە زۆرترین کۆرسە کوردییەکان بەردەست بخەین </p>
                </div>

                <div className="right">
                    <img src="image/main.gif" alt=""/>
                </div>
              </div>

                <div className="list-item">
                    {item.map( a  =>(
                        <Item 
                        key={a.id}
                        img = {a.img}
                        title = {a.title}
                        url ={a.url}
                        />
                    ))}

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Main
