import React from 'react';
import { Link } from 'react-router-dom';

function Card(prop) {
    const { certifecates } = prop;

const [searchbar, setSearchbar] = React.useState('');
 
const filteredCertifecates = certifecates.filter(certifecate =>
  certifecate.title.toLowerCase().includes(searchbar.toLowerCase())
);

    return (



        <div className=' '>

        <input
                type="text"
                placeholder="Search certificates..."
                value={searchbar} 
                onChange={e => setSearchbar(e.target.value)}
                className="mb-4 p-2 rounded border border-gray-400 w-full"
            />  



{filteredCertifecates.map(certifecate => (
  <Link to={`/certificate/${certifecate.id}`} key={certifecate.id}>
  <div  className='flex bg-gray-800 rounded-md hover:bg-lime-950 p-4 m-2 flex-col gap-2'>

    <div className='flex flex-row gap-5'><h1 className='text-2xl  bg-teal-800  rounded-md p-4'>{certifecate.id}</h1>
     <h1 className=' text-xl rounded-md bg-teal-900 p-4'>{certifecate.title}</h1> 
     </div>
   <div className='flex flex-row gap-5'>
    
  <p className='bg-amber-600 p-4 justify-center items-center rounded-md '>{certifecate.issuer || 'N/A'}</p> 
   <p className='bg-amber-600 p-4 justify-center items-center rounded-md  '>{certifecate.category || 'N/A'}</p>
   <p className='bg-amber-600 p-4 justify-center items-center rounded-md '>{certifecate.issuedDate || 'N/A'}</p></div>
   
  </div>
  </Link>
  
      
     
  )
  )}
            
        </div>
    );
}

export default Card;