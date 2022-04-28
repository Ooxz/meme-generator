import trollFace from "../images/troll-face.png";

const Nav = () => {
  return (
    <nav className="nav-container">
      <img src={trollFace} alt="troll face" className="nav-logo" />
      <h1 className="nav-title">Meme Generator</h1>
    </nav>
  );
};

export default Nav;
