import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <div className="navbar">

        {/* LEFT SIDE – LOGO */}
        <div className="navbar-left">
          <Link to="/">
            <img
              src="/assests/logo/logo.jpeg"   // put logo in public/assets
              alt="Logo"
              className="navbar-logo"
            />
          </Link>
        </div>

        {/* RIGHT SIDE – NAV ITEMS */}
        <div className="navbar-right">

          <div className="dropdown">
            <button className="dropbtn">
              Courses <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/courses/online">Online Yoga Classes</Link>
              <Link to="/courses/offline">Offline Yoga Classes</Link>
              <Link to="/courses/fertility">Fertility Yoga Classes</Link>
              <Link to="/courses/kids">Kids Yoga Classes</Link>
              <Link to="/courses/pregnancy">Pregnancy Yoga Classes</Link>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Training Programs <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/training/ryt200">RYT200</Link>
              <Link to="/training/ryt500">RYT500</Link>
              <Link to="/training/ryt1000">RYT1000</Link>
              <Link to="/training/pregnancy">Pregnancy</Link>
              <Link to="/training/fertility">Fertility Yoga</Link>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Books <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/books/garbh-sanskar">Garbh-Sanskar</Link>
              <Link to="/books/gheranda">Gheranda Samhita</Link>
              <Link to="/books/patanjali">Patanjali Yoga-Sutras</Link>
              <Link to="/books/food-mantras">Food-Mantras</Link>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Products <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/products/mat">Yoga Mat</Link>
              <Link to="/products/cushion">Meditation Cushion</Link>
              <Link to="/products/blocks">Yoga Blocks</Link>
              <Link to="/products/strap">Yoga Strap</Link>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Centres <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/centres/delhi">Delhi</Link>
              <Link to="/centres/noida">Noida</Link>
              <Link to="/centres/faridabad">Faridabad</Link>
              <Link to="/centres/ghaziabad">Ghaziabad</Link>
              <Link to="/centres/nepal">Nepal</Link>
              <Link to="/centres/dubai">Dubai</Link>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
