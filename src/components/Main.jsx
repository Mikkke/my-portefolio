import React from "react";
import Aside from "./Aside";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../ComponentLink/Home";
import AboutMe from "../ComponentLink/AboutMe"
import Contact from "../ComponentLink/Contact";
import Experience from "../ComponentLink/Experience";
import FindMe from "../ComponentLink/FindMe";


const Main = () => {
    return (
        <div className="main-div">
            <Router>
                <Aside />

                <Switch>

                    <Route path="/about_me">
                        <AboutMe />
                    </Route>
                    <Route path="/Contact">
                        <Contact />
                    </Route>
                    <Route path="/Experience">
                        <Experience />
                    </Route>
                    <Route path="/Find_me">
                        <FindMe />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </Router>

        </div>
    )
}

export default Main