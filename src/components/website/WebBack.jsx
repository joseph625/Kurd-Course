import React from 'react'
import webBack from './webBack.js'
import Youtube from './Youtube.jsx'
import './webFront.css'
function WebBack() {
    return (
        <div className="webFront">
            <div className="video">
                <div className="body">
                    <div className="left">
                        <img src="image/video.gif" alt=""/>
                    </div>

                    <div className="right">
                        <h1>ڤیدیۆ</h1>
                    </div>
                </div>

                <div className="grid">
                    
                    {webBack.map((item) =>(
                        <Youtube 
                        key= {item.id}
                        img = {item.img}
                        title ={item.title}
                        playlist = {item.playlist}
                        framework = {item.id === 2 && item.framework.map((list,index) =>{
                            return (
                                <div key={index}>
                                    <h1 style={{display : index !== 0 && 'none'}}>Framework</h1>
                                    <h1>{list.name}</h1>
                                    <iframe src={list.playlist} width="800px" height="600px" frameBorder="0" title="myFrame" />
                                </div>
                            )
                        })}
                        />
                    ))}

                </div>

                <div className="book">
                    <div className="body">
                        <div className="left">
                            <h1>کتێب</h1>
                        </div>

                        <div className="right">
                            <img src="image/book.gif" alt=""/>
                        </div>
                    </div>

                    <div className="icon">
                        <a href="https://drive.google.com/file/d/1HH6a3AjMMUudWBbr0x-0mH3E4PKxz20I/view?usp=sharing" target="_blank" rel="noreferrer"><img src="image/web/php.svg" alt=""/></a>
                        <a href="https://drive.google.com/file/d/1Poqd2dfGkMwGdlcpWTfBDdcUAokW2qo2/view?usp=sharing" target="_blank" rel="noreferrer"><img src="image/web/oop.png" style={{width: '100px'}} height="100px" alt=""/></a>
                        <a href="https://drive.google.com/file/d/1yE0d4XcFkhrKJx2b3QnAdLwm1SnbMWGN/view?usp=sharing" target="_blank" rel="noreferrer"><img src="image/web/node.svg" alt=""/></a>
                        </div>
                </div>

                <div className="learn-website">
                    <h1>کۆمەڵێک وێبسایت کە یارمەتیت دەدات بۆ تێگەیشتنی زیاتر</h1>
                    <div className="items">
                        <a href="https://www.w3schools.com/php/default.asp" target="_blank" rel="noreferrer"><img src="image/web/wschool.jpg" alt=""/></a>
                        <a href="https://www.killerphp.com/" target="_blank" rel="noreferrer"><img src="image/web/killer.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebBack
