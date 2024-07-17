import CartWidget from '../CartWidgets/CartWidget';
import CardWidget from '../CartWidgets/CartWidget';



function Navbar() {
    return (
      <nav style={{display: "flex", justifyContent:"space-between", alignItems: "center"}} >
  <h3>Ecommerce</h3>
  <section>
  <a href=""> Consolas </a>
  <a href=""> Celulares </a>
  <a href=""> Juegos </a>
  </section>
  <CartWidget/>
  </nav>
    );
  }
  
export default Navbar;
  
