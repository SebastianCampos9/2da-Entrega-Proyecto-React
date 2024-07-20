import CartWidget from '../CartWidgets/CartWidget';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
      <nav style={{display: "flex", justifyContent:"space-between", alignItems: "center"}} >
  <h3>Cotillon LIP</h3>
  <section>
  <Link to="/category/disfraces"> Disfraces </Link>
  <Link to="/category/globos"> Globos </Link>
  <Link to="/category/utiles"> Utiles </Link>
  </section>
  <CartWidget/>
  </nav>
    );
  }
  
export default Navbar;
  
