import { useState } from 'react';
import SideBar from '../ui/Sidebar';


import reactlogo from '../assets/react.svg'
import vitelogo from '../assets/vite.svg'
import pixel3 from '../assets/img/pixel3.png'
import squoosh from '../assets/img/squoosh.svg'




export const Home = () => {

    const [value, setValue] = useState(0)
    return (

        
        <div className="App">
            <span>
            <img src={reactlogo} className="svg" alt="React Logo" />
            <img src={vitelogo} className="svg" alt="Vite Logo" />
            </span>
    
            <div>
            <SideBar />
    
            </div>
    
            <div>
            <h1>Optimized Web Page in React - ViteJS</h1>
            <a href="https://github.com/Jeremiias8" target="_blank">
                <img src={pixel3} className="svg" alt="Vite logo" />
            </a>
            <p>Github</p>
            <a href="https://www.linkedin.com/in/jerem%C3%ADas-fern%C3%A1ndez-1ab01922a/" target="_blank">
                <img src={squoosh} className="svg" alt="React logo" />
            </a>
            <p>Linkedln</p>
            </div>
    
            <div className="card">
            <button onClick={() => setValue((value) => value + 1)}>
                My web page value is {value}
            </button>
            <p>
                Go to <code>github.com/Jeremiias8</code> to see my repos
            </p>
            </div>
            <p className="footer-description">
            Derechos Reservados &copy; Jeremías 2023
            </p>
        </div>

    )
}
