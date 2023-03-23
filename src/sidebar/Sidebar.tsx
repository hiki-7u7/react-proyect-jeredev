import React from 'react';
import imgsidebar from '../assets/img/imgsidebar.png'
import contactsvg from '../assets/img/contact.svg'
import { Link } from 'react-router-dom';
import '../App.css'

const SideBar = () => {
    return (
            <div className='sidebar-container'>
                <section className='sidebar-section'>
                    <h3>Navbar</h3>
                    <div className='clearfix'></div>
                    
                    <a href='https://github.com/Jeremiias8' title='Github'>Repositories</a>
                    <Link to="/">Home</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/about">About</Link>
                    <img src={contactsvg} className="sidebar_icon" alt="Contact" />
                    <Link to="/contact">Contact</Link> 
                    <Link to="/nopage">NoPage</Link>
                </section>
            </div>
    );
}

export default SideBar  