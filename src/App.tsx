import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
import './App.css'
import { Assortment } from './sections/assortment';
import { Search } from './sections/search';


function App() {
  return (
   
    <div className='App'>
       <Search/>
      <Assortment/>
    </div>
  );
  
    
     
}
  
export default App
