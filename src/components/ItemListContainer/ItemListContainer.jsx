
const categorias = ['Tele', 'Camara', 'playstation']

function ItemListContainer({greetings}) {
    //console.log(categorias) 
  return (
    <>
    <h4>Productos</h4>
    <ul className="list-group">
    {categorias.map((category, index) =>
    
    (<li className="list-group-item" key={index}>{category}</li>)

    )}
    </ul>
    </>
  )
}

export default ItemListContainer