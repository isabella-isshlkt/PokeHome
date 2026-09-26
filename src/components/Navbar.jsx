import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        PokéHome 🏠
      </Link>

      <div className="nav-links">

        <Link to="/">Início</Link>

        <Link to="/adote">Adote aqui!</Link>

        <Link to="/como-adotar">Como adotar?</Link>

        <Link to="/produtos">Produtos</Link>

        <Link to="/sobre">Sobre nós</Link>

        <Link to="/perfil">Perfil</Link>

      </div>

    </nav>
  );
}

export default Navbar;