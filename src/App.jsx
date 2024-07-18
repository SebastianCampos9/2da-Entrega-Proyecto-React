// import { useState } from "react"
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
// const [ cartCount, setCartCount] = useState(5)

  return (
    <BrowserRouter>
     
     <Navbar />

     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    
     </Routes>
     
      {/* <Navbar cartCount={cartCount} title="Mi tienda"/>
      <ItemListContainer greetings="Bienvenidos"/> */}
    </BrowserRouter>
  )
}

export default App
