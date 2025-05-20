import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

const Navbar=()=>{
     const[isOpen,setIsOpen]=useState(false);
    return(
        <div className="navbar">
            <div className="navbar-menu">
                <h3>Admin Panel</h3>
            </div>
            <ul className={`navbar-right ${isOpen ? "active" : ""}`}>
               <Link className='link' to="/add">Add Events</Link>
               <Link className='link' to="/list">List Events</Link>
               <Link className='link' to="/booking">Booking Events</Link>
            </ul>

            <div className="toogle" onClick={()=>setIsOpen(!isOpen)}>
                {isOpen ? <i class="fa-solid fa-xmark"/> : <i class="fa-solid fa-bars"></i> }
           </div>
        </div>
    )
}

export default Navbar;