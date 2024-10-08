import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://dummyjson.com/todos')
    .then((response)=>{
      setData(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return <>{JSON.stringify(data)}</>
}

export default App
