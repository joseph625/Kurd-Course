import React,{useState} from 'react'
import './footer.css'
function Footer() {

    const time = new Date();
    const year = time.getFullYear();

    const [show, setShow] = useState(false);

    function change(){
        setShow(true)
    }

    function reChange(){
        setShow(false)
    }

    return (
        <div className="footer">
            {/* <hr/> */}

    <div className="bottom-web">

        <a href="https://www.facebook.com/yusf.jasm.3" target="_blank" rel="noreferrer"><img src="image/footer/facebook.svg" alt=""/></a>
        <a href="https://github.com/joseph625" target="_blank" rel="noreferrer"><img src="image/footer/github.svg" alt=""/></a>
        <a href="https://www.linkedin.com/in/yousif-jasm-76b31b1b8/" target="_blank" rel="noreferrer"><img src="image/footer/linkedin.svg" alt=""/></a>
        <div onMouseEnter={change} onMouseLeave={reChange}  style={{display: 'inline'}}>
        <img
        style = {{display: show ? 'none': 'inline'}}
        src="image/footer/telephone.svg" alt=""/> 
        <p style={{display : show ? 'inline': 'none'}}>+964 750 716 1432 </p>
        </div>

        <p className="year">{year} Yousif @WEBdeveloper</p>

    </div>
        </div>
    )
}

export default Footer
