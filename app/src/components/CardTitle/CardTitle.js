import { ArrowLeftOutlined } from "@ant-design/icons";
import './CardTitle.css'
import { Link } from "react-router-dom";
const CardTitle = () => {
  return (
    <div className="cardTitle">
        <Link to={"/"}>
      <ArrowLeftOutlined /></Link>
      <div>
      Cars details
      </div>
    </div>
  );
};
export default CardTitle;
