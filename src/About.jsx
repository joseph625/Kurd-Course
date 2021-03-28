import React from 'react'
import './about.css'
import Header from './components/views/Header.jsx'
import Footer from './components/views/Footer.jsx'

function About() {
    return (
        <div className="about">
            <div className="about-body">
            <Header />
                <div className="photo">
                    <img src="image/about/y.jpg" alt=""/>
                </div>
                
                <div className="detail">
                   <h1>Yousif Jasm <span>webdeveloper</span></h1>
                   <ul dir="rtl">


                       <li dir="rtl" style={{color: "#ca9e9e"}}> ئامانجی ئەم وێبسایتە بۆ کۆکردنەوەی کۆرسە کوردییەکان لەگەڵ چەند جۆرە سەرچاوەیەکی جیاواز بۆ روونکردنەوەی زیاتری بابەتەکان.</li>
                       <li style={{color: '#ec8181'}}>بۆ هەر ڕەخنە و پێشنیارێک تکایە ئاگادارم بکەوە .</li>
                       <li>هەر کۆرسێکی تر کە یارمەتی فێرخوازان دەدات و تێیدا نیە تکایە ئاگادارم بکەوە بۆ ئەوەی زیادی بکەم.</li>
                   </ul>
                    
                    
                </div>
             <Footer />
            </div>
            
        </div>
    )
}

export default About;