import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"




const ItemListContainer = ({greetings}) => {

  const [products , setProducts] = useState ([])
  const {category} = useParams()

useEffect (()=> {

  if(!category){

    getProducts()
    .then((res)=>{
      setProducts(res)
    })
       .catch((err)=>console.log(err))
   
   } else{

    getProductsByCategory(category)
    .then((res)=>{
      setProducts(res)
    })
    .catch((err)=> console.log(err))

   }

  }

  , [category])

  return (
    <div>

<h1>Productos</h1>
<ItemList products={products}/>
    </div>
  )
}

// const categorias = ['Tele', 'Camara', 'playstation']

// function ItemListContainer({greetings}) {
//     //console.log(categorias) 
//   return (
//     <>
//     <h4>Productos</h4>
//     <ul className="list-group">
//     {categorias.map((category, index) =>
    
//     (<li className="list-group-item" key={index}>{category}</li>)

//     )}
//     </ul>
//     </>
//   )
// }

export default ItemListContainer