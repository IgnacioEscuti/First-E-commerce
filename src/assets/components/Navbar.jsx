import CartWidget from './CartWidget.jsx';
import Logo from './Logo.jsx';
function Navbar() {
  return (
    <>
      <div>
          <Logo />
      </div>
      <div>
          <ul>
            <li>Productos</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
      </div>
      <div>
          <CartWidget />
      </div>
    </>
  );
}

export default Navbar;
