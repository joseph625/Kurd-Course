import React from 'react'
import './webFront.css'
import Youtube from './Youtube.jsx'
import youtube from './webFront.js'
function WebFront() {
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
                    
                    {youtube.map((item) =>(
                        <Youtube 
                        key= {item.id}
                        img = {item.img}
                        title ={item.title}
                        abbr = {item.abbr}
                        detail = {item.detail}
                        playlist = {item.playlist}
                        framework = {(item.id === 2  || item.id=== 3) && item.framework.map((list,index) =>{
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
                            <img src="/image/book.gif" alt=""/>
                        </div>
                    </div>

                    <div className="icon">
                        <a href="https://drive.google.com/file/d/14MlwGdfuMS4noHa2PiamaKvd4LWmtd3K/view?usp=sharing" target="_blank" rel="noreferrer"><img src="image/web/html.svg" alt=""/></a>
                        <a href="https://drive.google.com/file/d/1nvF2ysCWpVP3uZlSrA0WJ8Qf01zr9T2D/view?usp=sharing" target="_blank" rel="noreferrer"><img src="image/web/css.svg" alt=""/></a>
                        <a href="https://drive.google.com/file/d/1pbgYT_3LmScTV5wTwiemOplNDiz091Cb/view?usp=sharing" target="_blank" rel="noreferrer"><img src="image/web/javascript.svg" alt=""/></a>
                        <a href="https://drive.google.com/file/d/1aoKLAOmYRW4pDtdPTBme1MDDarWbQuC-/view?usp=sharing" target="_blank" rel="noreferrer"><img src="image/web/react.svg" alt=""/></a>
                        <a href="https://drive.google.com/file/d/19ZgC9GtK5LeQwdAEmfbf2gHJp7o_V-4k/view?usp=sharing" target="_blank" rel="noreferrer"><img src="image/web/jquery.svg" alt=""/></a>
                    </div>
                </div>

                <div className="learn-website">
                    <h1>کۆمەڵێک وێبسایت کە یارمەتیت دەدات بۆ تێگەیشتنی زیاتر</h1>
                    <div className="items">
                        <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noreferrer"><img src="image/web/wschool.jpg" alt=""/></a>
                        <a href="https://javascript.info/" target="_blank" rel="noreferrer"><img src="image/web/javascript.info.png" alt=""/></a>
                        <a href="https://htmlreference.io/" target="_blank" rel="noreferrer"><img src="image/web/htmlReference.png" alt=""/></a>
                        <a href="https://cssreference.io/" target="_blank" rel="noreferrer"><img src="image/web/cssReference.png" alt=""/></a>
                        <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noreferrer"><img src="image/web/mdn.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebFront
