import React from 'react';
import LinkDiv from "./LinkDiv";
import Photo from "./Photo"
import Footer from "./Footer"
/* import Home from "../ComponentLink/Home" */
import { Link } from 'react-router-dom'


const Nav = () => {

    /*    return (
           <BrowserRouter>
               <div>
                   <Link to="/home">Home</Link>
                   <Route path="/home" component={Home} />
               </div>
   
   
           </BrowserRouter>
       ) */

    return (
        <div className="nav-div">

            <Photo />
            <Link to='/home'><LinkDiv>Home</LinkDiv></Link>
            <Link to='/about_me'><LinkDiv>About me</LinkDiv></Link>
            <Link to='/contact'><LinkDiv>Contact</LinkDiv></Link>
            <Link to='/experience'><LinkDiv>Experience</LinkDiv></Link>
            <Link to='/find_me'><LinkDiv>Find me</LinkDiv></Link>
            <Footer />

        </div>

    )


}

export default Nav;