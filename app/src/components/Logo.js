import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header-logo">
      <img
        alt=""
        className="header-img"
        src="https://pngimg.com/uploads/mustang/mustang_PNG57.png"
      />
      <p>
        <Link to="/table">AUTO CLUB</Link>
      </p>
    </div>
  );
}

export default Logo;
