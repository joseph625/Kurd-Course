import React from 'react'
import './program.css'
import {HashRouter as Router,
    Switch,
    Route,
    } from "react-router-dom";
import Detail from './Detail.jsx';
import Header from '../views/Header.jsx'
import Footer from '../views/Footer.jsx'


function Program() {
    return (
        <>
            <Header />
        <div className="program">

            <Router>
                <Route path="/programming" exact render={()=>
                <>
                <div className="program-head">
                    <h1>بۆ ئەو کەسانەی کە سەرەتان لە بواری پڕۆگرامینگ </h1>
                    <h2>یەکێک لەم زمانانە هەڵبژێرە</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/r5NTG7nDkdg" title="YouTube video player" ></iframe>
                </div>
                    <div className="program-body">
                        
                    <a href="#/programming/java"><img src="image/program/java.png" alt="" /></a>
                    <a href="#/programming/cpp"><img src="image/program/c.svg" alt="" /></a>
                    <a href="#/programming/python"><img src="image/program/python.svg" alt="" /></a>
                    <a href="#/programming/cSharp"><img src="image/program/csharp.svg" alt="" /></a>
                    <a href="#/programming/dart"><img src="image/application/dart.png" alt="" /></a>

                    </div>
                </>
                } />

                <Switch>
                    <Route path="/programming/java" render={()=>
                        <Detail 
                        all = {'java'}
                        />
                    } />

                    <Route path="/programming/cpp" render={()=>
                        <Detail 
                        all = {'c'}
                        />
                    } />

                    <Route path="/programming/python" render={()=>
                        <Detail 
                        all = {'python'}
                        />
                    } />

                    <Route path="/programming/cSharp" render={()=>
                        <Detail 
                        all = {'cSharp'}
                        />
                    } />
                    <Route path="/programming/dart" render={()=>
                        <Detail 
                        all = {'dart'}
                        />
                    } />
                </Switch>
            </Router>
            <Footer />
        </div>
        </>
    )
}

export default Program
