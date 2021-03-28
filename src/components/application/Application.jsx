import React from 'react'
import './application.css'
import {HashRouter as Router,
    Switch,
    Route,
    } from "react-router-dom";
import Mobile from './Mobile.jsx';
import Desktop from './Desktop.jsx'
import Header from '../views/Header.jsx'
import Footer from '../views/Footer.jsx'
function Application() {
return (
<div className="application">
    <div className="application-body">

            <Header />
        <Router>
            <Route path="/application" exact render={()=>
            <div className="app">
                <div className="frontend">
                    <img src="image/design/mobile.gif" alt="" />
                    <p>Mobile Application</p>
                    <a href="#/application/mobile"><button>دەستپێکردن</button></a>
                </div>

                <div className="backend">
                    <img src="image/design/laptop.gif" alt="" />
                    <p>Desktop Application</p>
                    <a href="#/application/desktop"><button>دەستپێکردن</button></a>
                </div>
            </div>
            } />

            <Switch>
                <Route path="/application/mobile" component={Mobile} />
                <Route path="/application/desktop" component={Desktop} />
            </Switch>
        </Router>

        <Footer />

    </div>

</div>
)
}

export default Application