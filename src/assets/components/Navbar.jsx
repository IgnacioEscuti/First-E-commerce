import CartWidget from './CartWidget.jsx';
function Navbar() {
  return (
    <>
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
