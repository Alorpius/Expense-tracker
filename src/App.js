import Header from './component/ui/Header';
import './App.css';
import CharacterGrid from './component/characterGrid/CharacterGrid';
import { useState,useEffect } from 'react';
import axios from 'axios';


function App() {
  const [items, setItems]=useState([]); 
  const [isLoading,setIsLoading]=useState(true)

   useEffect(()=>{
    const fetchItems=async()=>{
      const result=await axios(
        `http://www.breakingbadapi.com/api/characters
        `)
        console.log(result.data)
      setItems(result.data);
      setIsLoading(false)
    }
    fetchItems()
   },[])
  return (
    <div className="container">
      <Header/>
     <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
