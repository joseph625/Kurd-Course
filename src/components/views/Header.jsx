import React,{useState} from 'react'
import './header.css'
function Header() {

    const [show, setShow] = useState(true);

    function change(){
        setShow(false)
    }

    function hidden(){
        setShow(true)
    }

return (
<div className="header">
    <div className={show ? 'header-body' : 'header-body1'}>
        <div className="chap">
           <a href="#/"><h1>کورد کۆرس</h1></a>
        </div>

           <a href="#/"><img src="image/header/learn.svg" alt=""/></a>
            

        <div className="rast">
        <a id="sarake" href="#/">سەرەکی</a>
            <div className="dropdown">
                
                <button className="dropbtn"> کۆرسەکان </button>
                <div className="dropdown-content">
                    <a href="#/programming">Programming priciple</a>
                    <a href="#/website">Website</a>
                    <a href="#/design">Design</a>
                    <a href="#/application">Application</a>
                    <a href="#/networking">Networking</a>
                    <a href="#/msoffice">Microsoft Office</a>
                    <a href="#/database">Database</a>
                </div>
            </div>

            <a href="#/About"> دەربارە </a>
            <button className="bars" onClick={change}><img src="image/header/menu.png" alt=""/></button>
            <button className="remove" onClick={hidden}><img src="image/header/hide.svg" alt=""/></button>
        </div>
    </div>

</div>
)
}

export default Header