import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header-logo">
      <div className="logo-image">
        <img
          alt=""
          className="header-img"
          src="https://pngimg.com/uploads/mustang/mustang_PNG57.png"
        />
      </div>
      <div className="logo-text">
        <Link to="/">AUTO CLUB</Link>
      </div>
    </div>
  );
}

export default Logo;
