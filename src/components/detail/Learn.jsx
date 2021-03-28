import React from 'react'
import './learn.css'
function Learn(props) {
    return (
        <>
            <div className="learn-website">
                    <h1>کۆمەڵێک وێبسایت کە یارمەتیت دەدات بۆ تێگەیشتنی زیاتر</h1>
                    <div className="items">
                        {props.learn}
                    </div>
                </div>
        </>
    )
}

export default Learn
