
import '../App.css'
import { Link } from 'react-router-dom';

function Navbar() {

 

    return (
        <div className='flex flex-row justify-between bg-indigo-200 items-center p-4 border-b-2 '>  
            
            
             <h1 className=' bg-cyan-900 rounded-lg p-4 text-white'> Navbar Component </h1>  
        
        
        
 <div className=' flex flex-row gap-4 text-white'>  
    <Link className='bg-cyan-900 p-2 rounded-lg' to="/Home">Home</Link>
    <Link className='bg-cyan-900 p-2 rounded-lg' to="/Favourites">Favourites</Link>
</div>


        </div>
    );
}

export default Navbar;