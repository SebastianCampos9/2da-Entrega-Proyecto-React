import { useEffect, useState } from "react"
import { getProductById, getProducts, getProductsByCategory } from "../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {

  const [product, setProduct] = useState();
const {id} = useParams()
  useEffect(()=>{

    getProductById(id)
    .then((res)=>{
      setProduct(res)})
    .catch((err)=> console.log(err))


    }, []);

  
  return (
    <div>

<ItemDetail {...product}/>

    </div>
  )
}

export default ItemDetailContainer