import React from 'react'
import './website.css'
import {HashRouter as Router,
    Switch,
    Route,
    } from "react-router-dom";

import WebFront from './WebFront.jsx'
import WebBack from './WebBack.jsx'
import Host from './Host.jsx'
import Header from '../views/Header.jsx'
import Footer from '../views/Footer.jsx'
function Website() {
    return (
        <div className="website">
            <Header />

            <Router>
                <Route path="/website" exact render={()=>
            <div className="body">

                <div className="frontend">
                <img src="image/web/fronted.gif" alt=""/>
                <p>Frontend</p>
                <a href="#/website/frontend"><button>دەستپێکردن</button></a> 
                </div>

                <div className="backend">
                <img src="image/web/backend.gif" alt=""/>
                <p>Backend</p>
                <a href="#/website/backend"><button>دەستپێکردن</button></a>

                </div>

            <div className="host">
                <img src="image/web/host.gif" alt=""/>
                <p>Hosting</p>
                <a href="#/website/host"><button>دەستپێکردن</button></a>
            </div>
        </div>
                } />
            
            <Switch>
                <Route path="/website/frontend" component={WebFront} />
                <Route path="/website/backend" component={WebBack} />
                <Route path="/website/host" component={Host} />

            </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default Website
