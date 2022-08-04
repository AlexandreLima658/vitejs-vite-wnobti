import './Style.css';

function Menu() {
  return (
    <>
      <header>
        <nav>
          <a href="#" className="logo">
            Logo
          </a>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">contacts</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Menu;
