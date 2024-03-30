import React from 'react'
import './Header.css'
function Header() {
  return (
    <div>
      <header class="header">
          { <div class="logo"></div> }
              <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
               </nav>
       </header>
    </div>
    
  )
}

export default Header