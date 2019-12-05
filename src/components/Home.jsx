import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
           <h1>Animações do Adobe After Effects no React JS</h1>
           <ul>
               <li>
                    <Link to="/404">Error 404 Not Found</Link>
               </li>
               <li>
                    <Link to="/500">Error 500 Internal Server Error </Link>
               </li>
           </ul>
         
         
        </div>
    )
}

export default Home;