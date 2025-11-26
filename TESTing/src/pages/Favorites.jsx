import React from 'react';
import { apiDataContaxt } from '../contaxt/apiContaxt';
import Card from '../components/card';

function Favorites(props) {


  const { certifecates, error, loader } = React.useContext(apiDataContaxt);


if(error){
  return <h1 className=' bg-red-500 text-7xl flex justify-center items-center min-h-screen p-4 text-white font-bold '> something went wrong </h1>
}

if(loader){
  return <h1 className=' bg-green-600 text-7xl flex justify-center items-center min-h-screen p-4 text-white font-bold ' > loading </h1>
}
console.log(certifecates);

const favourites = Array.isArray(certifecates)
  ? certifecates.filter(
      c =>
        c.favorate === true 
    )
  : [];

    return (
        <div className="bg-indigo-300 p-4 flex flex-col gap-4 items-center min-h-screen">
      
        
    <div className='bg-gray-500 text-amber-50 p-4  rounded-md '><h1>Favourate Certifecates ({favourites.length})</h1>

 <Card certifecates={favourites}/>
  
 
  
    </div>
        </div>
    );
}

export default Favorites;