import React from 'react'

import {
  
    Link
  } from "react-router-dom";
function Header(){

    return(
        <div className="header">
        <Link to="Home" className="logo">Beans Love beers</Link>
        <div className="header-right">
          <Link className="active" to="Home">Home</Link>
          <Link to="favourite">Favourite</Link>
          
        </div>
      </div>
    )
}

export default Header;