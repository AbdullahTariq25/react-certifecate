import { createContext, useState , useEffect } from "react"

export const apiDataContaxt = createContext();


const ApiContaxt = (props) => {


  const [ error, setError] = useState(false)
  const [loader, setLoader] = useState(false)
  const [certifecates, setCertifecates] =useState([])


useEffect(() => {
  ;(async () => {
  try {
    setLoader(true)
    setError(false)

      const response = await fetch('/api/certifecates');
      const data = await response.json();
      setCertifecates(data);
      console.log(response)
      setLoader(false)

   
      
  } catch (error) {

    setError(true)
setLoader(false)
  }
  })()


},[] );



    return (
        <apiDataContaxt.Provider value={{ certifecates, error, loader}}>
            {props.children}
        </apiDataContaxt.Provider>
    )
}

export default ApiContaxt;

