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
      <Route path='/' element={<ItemListContainer greetings={"lista de productos"}/>}/>
      <Route path='/category/:category' element={<ItemListContainer/>}/>
      <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
    
     </Routes>
     
      {/* <Navbar cartCount={cartCount} title="Mi tienda"/>
      <ItemListContainer greetings="Bienvenidos"/> */}
    </BrowserRouter>
  )
}

export default App
